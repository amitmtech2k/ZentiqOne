const crypto = require('crypto');
const store = require('../lib/reviews-store');

const page = (title, message) => `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title>${title} | ZentiqOne</title>
<link rel="stylesheet" href="/assets/styles.css?v=1.1"></head>
<body><main style="max-width:640px;margin:4rem auto;padding:0 1.5rem;text-align:center;">
<h1>${title}</h1><p>${message}</p><p><a href="/success-stories.html" class="btn btn-primary">View Success Stories</a></p>
</main></body></html>`;

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method not allowed');
  }

  const { id, token } = req.query;

  if (!id || !token) {
    return res.status(400).send(page('Invalid Link', 'This approval link is missing required parameters.'));
  }

  if (!store.configured()) {
    return res.status(500).send(page('Not Configured', 'Review storage is not set up yet. Contact the site admin.'));
  }

  const expectedToken = crypto.createHmac('sha256', process.env.APPROVE_SECRET).update(id).digest('hex');
  const tokenBuf = Buffer.from(token, 'hex');
  const expectedBuf = Buffer.from(expectedToken, 'hex');
  const validToken = tokenBuf.length === expectedBuf.length && crypto.timingSafeEqual(tokenBuf, expectedBuf);

  if (!validToken) {
    return res.status(403).send(page('Invalid Link', 'This approval link is not valid.'));
  }

  try {
    const { reviews, sha } = await store.readReviews();
    const review = reviews.find((r) => r.id === id);

    if (!review) {
      return res.status(404).send(page('Not Found', 'This review could not be found. It may have already been removed.'));
    }

    if (review.status === 'approved') {
      return res.status(200).send(page('Already Approved', `The review from ${review.name} is already approved and live.`));
    }

    review.status = 'approved';
    review.approvedAt = new Date().toISOString();
    await store.writeReviews(reviews, sha, `Approve review ${id}`);

    return res.status(200).send(page('Review Approved', `The review from ${review.name} is approved. The site is rebuilding now and it will appear on Success Stories in about a minute.`));
  } catch (error) {
    console.error('approve-review error:', error);
    return res.status(500).send(page('Error', 'Something went wrong approving this review. Try again in a moment.'));
  }
};
