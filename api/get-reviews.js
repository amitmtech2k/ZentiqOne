let allReviews = [];
try {
  allReviews = require('../data/reviews.json');
} catch (e) {
  allReviews = [];
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const reviews = allReviews
    .filter((r) => r && r.status === 'approved' && r.permDisplay)
    .map((r) => ({
      rating: r.rating,
      review: r.review,
      name: r.name,
      title: r.title || '',
      company: r.company || '',
      approvedAt: r.approvedAt
    }))
    .sort((a, b) => new Date(b.approvedAt) - new Date(a.approvedAt));

  res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate');
  return res.status(200).json({ reviews });
};
