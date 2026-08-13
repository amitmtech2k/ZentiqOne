const REPO = process.env.GITHUB_REPO;
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const FILE_PATH = 'data/reviews.json';

function configured() {
  return !!(process.env.GITHUB_TOKEN && REPO && process.env.APPROVE_SECRET);
}

async function readReviews() {
  const url = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`;
  const resp = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json'
    }
  });
  if (resp.status === 404) {
    return { reviews: [], sha: null };
  }
  if (!resp.ok) {
    throw new Error(`GitHub read failed: ${resp.status}`);
  }
  const data = await resp.json();
  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return { reviews: JSON.parse(content || '[]'), sha: data.sha };
}

async function writeReviews(reviews, sha, message) {
  const url = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`;
  const body = {
    message,
    content: Buffer.from(JSON.stringify(reviews, null, 2)).toString('base64'),
    branch: BRANCH
  };
  if (sha) body.sha = sha;
  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`GitHub write failed: ${resp.status} ${text}`);
  }
  return resp.json();
}

module.exports = { configured, readReviews, writeReviews };
