const { BrevoClient } = require('@getbrevo/brevo');
const crypto = require('crypto');
const store = require('../lib/reviews-store');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    rating, review, name, title, company, email, website, phone,
    permDisplay, permMarketing, permTranslate,
    landingPageUrl, submittedAt, hp_check, userAgent
  } = req.body;

  // Honeypot check: if filled, it's a bot. Silently pretend success.
  if (hp_check) {
    return res.status(200).json({ success: true });
  }

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!validateEmail(email || '')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!name || !review || !rating) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const ratingNum = Number(rating);
  if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return res.status(400).json({ error: 'Invalid rating' });
  }

  const brevo = new BrevoClient({ apiKey: process.env.BREVO_API_KEY });

  const submittedIST = submittedAt
    ? new Date(submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const row = (label, value) => `<tr><td><strong>${label}</strong></td><td>${value || 'N/A'}</td></tr>`;
  const yesNo = (v) => v ? 'Yes' : 'No';

  const reviewId = crypto.randomUUID();
  let approveLinkHtml = '';

  if (store.configured()) {
    try {
      const { reviews, sha } = await store.readReviews();
      reviews.push({
        id: reviewId, rating: ratingNum, review, name, title, company, email, website, phone,
        permDisplay: !!permDisplay, permMarketing: !!permMarketing, permTranslate: !!permTranslate,
        submittedAt: submittedIST, status: 'pending'
      });
      await store.writeReviews(reviews, sha, `Add pending review ${reviewId}`);
      const token = crypto.createHmac('sha256', process.env.APPROVE_SECRET).update(reviewId).digest('hex');
      const approveUrl = `https://www.zentiqone.com/api/approve-review?id=${reviewId}&token=${token}`;
      approveLinkHtml = `<p><a href="${approveUrl}" style="display:inline-block;padding:10px 20px;background:#0a4b8f;color:#fff;text-decoration:none;border-radius:4px;">Approve &amp; Publish This Review</a></p>`;
    } catch (storeError) {
      console.error('Review store error:', storeError);
    }
  }

  const adminEmailPayload = {
    sender: { email: 'zentiqone@gmail.com', name: 'ZentiqOne' },
    to: [{ email: 'zentiqone@gmail.com' }],
    cc: [{ email: 'amit@zentiqone.com' }],
    subject: `New ${ratingNum}-Star Review on ZentiqOne from ${name}`,
    htmlContent: `
      <h2>ZentiqOne: New Review Submission</h2>
      <hr/>
      <table cellpadding="5" cellspacing="0" style="border-collapse:collapse; font-family:sans-serif;">
        ${row('Rating', `${ratingNum} / 5`)}
        ${row('Review', review)}
        ${row('Name', name)}
        ${row('Title', title)}
        ${row('Company', company)}
        ${row('Email', email)}
        ${row('Website', website)}
        ${row('Phone', phone)}
        ${row('May display on website', yesNo(permDisplay))}
        ${row('May share for marketing', yesNo(permMarketing))}
        ${row('May translate', yesNo(permTranslate))}
        ${row('Submitted', submittedIST)}
        ${row('Landing Page URL', landingPageUrl)}
        ${row('Browser Info', userAgent)}
      </table>
      ${approveLinkHtml}
      <hr/>
      <p>ZentiqOne Team</p>
    `
  };

  const userEmailPayload = {
    sender: { email: 'zentiqone@gmail.com', name: 'ZentiqOne' },
    to: [{ email }],
    subject: `Thank you for reviewing ZentiqOne`,
    htmlContent: `
      <p>Hi ${name},</p>
      <p>Thank you for taking the time to share your experience with ZentiqOne. We appreciate the feedback.</p>
      <p>Best,<br/>
      Amit<br/>
      Founder | ZentiqOne<br/>
      +91-8750908771 | zentiqone.com | amit@zentiqone.com</p>
    `
  };

  try {
    await Promise.all([
      brevo.transactionalEmails.sendTransacEmail(adminEmailPayload),
      brevo.transactionalEmails.sendTransacEmail(userEmailPayload)
    ]);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Brevo error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
