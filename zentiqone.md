# ZentiqOne Reference Notes

Working notes for the ZentiqOne site/repo, kept so future sessions can get up to speed fast. I don't have automatic memory across chats, if you point me at this file (or it's in the connected folder) at the start of a session, I'll read it before diving in.

## Read standing-instructions.md first, every session

It's the master checklist of everything Shayla has had to repeat: no content without approval (detail in `content-approval-rules.md`), always verify the live site before saying something's done, avoid AI-slop design patterns (detail in `ai.md`), work directly instead of burning tokens on unnecessary previews, no em dashes or emojis, and keep everything pending review in `pending-approval/`. Read it in full before doing anything on this site.

## What ZentiqOne Is

Banking, Payments & FinTech engineering/consulting platform (not a bank, PA, or PG itself, works alongside licensed institutions). Founder: Amit (amit@zentiqone.com, +91-8750908771). Site built/maintained with help from RazorSharpFocus (credited in every page footer).

- Live site: https://www.zentiqone.com
- Repo: https://github.com/amitmtech2k/ZentiqOne (public, I only have read/clone access, no push credentials)
- Local working copy: `C:\Users\Bharat\Downloads\ZentiqOne` on Bharat's machine, connected via the desktop device bridge

## Tech Stack

- Static HTML/CSS/JS, no build step, no framework
- One shared stylesheet: `assets/styles.css?v=1.1` (see Design System below)
- One shared script: `assets/script.js` (mobile nav toggle + scroll-reveal `.reveal` animation via IntersectionObserver)
- Serverless functions in `/api/*.js` (Vercel-style `module.exports = async function handler(req, res)`), used for form submissions
- Email: `@getbrevo/brevo` npm package (Brevo/Sendinblue transactional email), needs `BREVO_API_KEY` env var
- `package.json` deps: just `@getbrevo/brevo`
- Deploy: push to GitHub main, appears to auto-deploy to zentiqone.com (confirmed: changes went live shortly after a push, likely Vercel connected to the repo)
- Note: `node_modules/` is actually committed to the repo (not gitignored), unusual, worth flagging to Amit at some point, haven't touched it

## Design System (assets/styles.css)

- CSS vars: `--color-navy #0B1F3A`, `--color-blue #2454FF`, `--color-blue-light #EAF0FF`, `--color-bg-alt #F7F9FC`, `--max-width 1160px`, `--radius 12px`
- Header: `.site-header` > `.navbar` (logo + `.nav-links`, mobile `.nav-toggle`)
- Footer: `.site-footer` > `.footer-grid` with columns: Services / Learn / Platform, then `.footer-bottom` copyright
- Page hero patterns: `.hero` (home), `.page-hero` (interior pages), `.article-hero` (Learn articles, with `.topic-tag` + `.article-meta`)
- Long-form content: `.prose` (Learn articles), `.card`/`.grid-3` (card grids), `.faq details/summary`, `.callout` (note boxes), `.related-box` (cross-links), `.cta-band` (bottom CTA)
- Forms: `.form-grid`, honeypot hidden field pattern for spam, client-side validation + `fetch('/api/...')` POST, inline thank-you swap on success (see contact.html / submit-review.html)

## Content Conventions

- Flat file structure at repo root, kebab-case, prefixed by type:
  - `learn-*.html`: educational articles, listed on `learn.html` hub + footer "Learn" column
  - `service-*.html`: service pages
  - singleton pages: `about.html`, `contact.html`, `industries.html`, `success-stories.html`, `glossary.html`, `submit-review.html`
- Every page reuses the exact same `<title>` and generic `<meta description>` (site-wide, not page-specific). That's the existing convention, not a bug I introduced
- Per-page: canonical URL, `og:url`, breadcrumb, and JSON-LD differ
- JSON-LD: `Organization` + `BreadcrumbList` on every page; Learn articles also get `TechArticle` + `FAQPage`
- No `/get-info/` folder exists yet. Amit's original ask was to put new topic pages there when they don't overlap existing Learn content, reserved for future use

## Session Log

**Aug 12-13, 2026**: Handled Amit's request (relayed by Shayla) to add an escrow-account-process page and a review-submission page:
- Uploaded `escrow-account-process.html` overlapped with the existing `learn-settlement-escrow-models.html`. Decision (confirmed with Shayla): merged the new content in rather than creating a duplicate page. Added: 7-step account-opening process, required documents list, release conditions, use cases beyond payment aggregation, 3 new FAQ entries. Updated `learn.html` hub card blurb to match.
- Built `submit-review.html` + `api/submit-review.js`, modeled on kjoller.com/reviewsSubmit.asp (rating, review text, name/title/company/email/website/phone, 3 permission checkboxes), wired like the existing contact form (Brevo + honeypot). Linked from `success-stories.html`.
- Updated `sitemap.xml`, `llms.txt` accordingly.
- No GitHub push access from the cloud sandbox, so files were written directly into the local folder via the device bridge; Bharat ran `git add/commit/push` locally. Confirmed live on zentiqone.com after push.

**Known open items:**
- `/get-info/` folder still not created (reserved for future non-overlapping pages)
- Local folder has an untracked file not on GitHub: `ZentiqOne Consultation_Contact us Page Specification.docx`, never committed, probably worth checking with Amit
- Local Windows checkout uses CRLF line endings vs LF on GitHub, cosmetic only (confirmed via diff), not fixed, not asked to fix
- `contact.html` uses flag emoji in its country-code dropdown (pre-existing, not something I added). Flagged below, not removed, since it wasn't part of this cleanup request until confirmed

**Aug 13, 2026: Review approve-and-publish backend built.**
- First pass used Vercel KV, dropped it: Vercel discontinued first-party KV in Dec 2024, replacement (Upstash via Marketplace) requires signing up with a separate third-party vendor mid-setup, too much friction for Amit to self-serve. Switched to storing reviews as a JSON file (`data/reviews.json`) committed directly to this same GitHub repo, using the GitHub Contents API. No new vendor account, reuses the GitHub login Amit already has for this repo.
- `lib/reviews-store.js` (new): shared helper, reads/writes `data/reviews.json` via GitHub's REST API using a personal access token (`GITHUB_TOKEN` env var) and `GITHUB_REPO` (e.g. `amitmtech2k/ZentiqOne`).
- `api/submit-review.js`: on submit, appends the review (`status: 'pending'`) to `data/reviews.json` via a GitHub API commit, and adds an "Approve & Publish" link to the admin notification email. Link = `/api/approve-review?id=<id>&token=<hmac>`, token is HMAC-SHA256 of the id using `APPROVE_SECRET` env var so it can't be guessed. If `GITHUB_TOKEN`/`GITHUB_REPO`/`APPROVE_SECRET` aren't set yet, this step is skipped and old email-only behavior continues, nothing breaks.
- `api/approve-review.js`: admin clicks the email link, verifies the token, flips that review's status to `approved` in `data/reviews.json` via another GitHub API commit. That commit auto-triggers a normal Vercel redeploy (same as any other push). Confirmation page tells the admin it takes about a minute to go live. Idempotent (safe to click twice).
- `api/get-reviews.js`: public GET endpoint, `require`s the bundled `data/reviews.json` directly (so it's always in sync with the latest deploy), returns only reviews where `status === 'approved'` and the customer checked "may display on website." Only public-safe fields (no email/phone/website).
- `success-stories.html`: fetches `/api/get-reviews` on load, renders a card grid if any come back, otherwise keeps the existing "compiling case studies" text.
- **Setup needed before this goes live (all in GitHub + Vercel, no new signup)**: (1) GitHub.com -> profile -> Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens -> Generate new token, scope it to the ZentiqOne repo only, permission "Contents: Read and write", generate, copy it. (2) Vercel project -> Settings -> Environment Variables -> add `GITHUB_TOKEN` (the token from step 1), `GITHUB_REPO` = `amitmtech2k/ZentiqOne`, `APPROVE_SECRET` = any random string. (3) Redeploy. Three env vars, no database, no separate account.

## Style Rule

No em dashes, no en dashes used as sentence punctuation, no emojis, anywhere in this repo's code or copy. Use periods, commas, colons, or "and" instead. Checked and fixed across the files touched in this session on Aug 13, 2026.

## Gotchas for Future Me (working via the device bridge)

- `device_bash` has no network access. Don't run `git fetch`/`git pull`/`git push` there, it'll hang until timeout
- Whole-tree `git status`/`git diff` over the bridge reliably times out (likely `node_modules` + network-mount stat latency). Scope commands to specific file paths instead
- The bridge disallows `unlink()` on mounted files, so git's own lockfile cleanup fails and leaves stale `.git/index.lock` files behind after almost every git operation. Before running another git command, check for and `mv` the lock file aside (e.g. `.git/index.lock.stale_<timestamp>`) since `rm` is blocked but `mv` works
- `git commit` itself has hung/timed out over this bridge without completing. `git add` (staging) works fine scoped to specific files, but leave the actual commit and push to the user's own terminal rather than trying to run it here
