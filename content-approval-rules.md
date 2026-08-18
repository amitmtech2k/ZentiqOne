# Standing Rule: No Content Without Approval

Read this before touching anything on zentiqone.com. This rule has already been broken once (found August 18, 2026: unique title tags, meta descriptions, JSON-LD descriptions, a rewritten homepage positioning statement, 6 new glossary terms, a new reconciliation section and FAQs, and 7 topic-tag renames all went live without approval). It does not get broken again.

## The rule, plainly

Shayla cannot approve content changes herself. Every piece of copy on the live site needs her dad's (the project manager's) sign-off before it ships. Not after. This applies even when the change seems small, obviously correct, or purely technical in nature. There is no exception for "it's just a quick fix" or "it's clearly better."

## What counts as content (needs approval, no exceptions)

- Title tags, meta descriptions, og:/twitter: tags, JSON-LD description fields
- Headlines, hero copy, lead paragraphs, any positioning/definition statement
- Body paragraphs, FAQ questions and answers
- Glossary or definition entries, new or edited
- Topic tags, category labels, badges, anything a visitor reads as a word or phrase
- Legal pages (privacy policy, terms, disclaimers) even as "standard boilerplate"
- Alt text or captions that make a descriptive claim (not just decorative)

If it is text a visitor or a search engine would read, it is content. Rewording something "to fix a typo" is fine only if the meaning is unchanged (see below); rewording it "to make it better" is a content change and needs approval.

## What does NOT need approval (safe to ship directly)

- CSS, layout, color, spacing, motion, animation, that reuses existing wording
- Reflowing existing copy into a new layout (e.g., a card grid into a timeline) without changing a single word
- Icon, logo, or image swaps using existing or already-approved assets
- Genuine bug fixes: a broken CSS variable, a stale hex code, a malformed HTML comment, a stray typo like a misplaced period, where the fix does not change what the sentence says
- Functional/backend code: JS wiring, API endpoints, build scripts, version bumps
- Structural additions with zero new copy of any kind

## The failure mode to watch for

The break happened by rationalizing: "this is just SEO housekeeping," "this is standard legal boilerplate," "this is obviously more accurate," "it's a one-word label, low stakes." All four of those were still content changes. None of them were run past Shayla or her dad first. The instinct to just fix it because it's clearly an improvement is exactly the instinct to distrust here.

## Process going forward

1. Before writing or editing any user-facing wording, stop.
2. Either ask Shayla directly in chat, or write the draft into the `pending-approval/` folder for her dad to review. Never write it straight into a live page.
3. If a design or bug-fix task turns up copy that looks wrong, outdated, or duplicated (like the site-wide identical title tag problem), flag it and propose the fix in `pending-approval/`, don't silently correct it inline.
4. When in doubt whether something counts as "content," treat it as content.

## Where approved-but-pending items live

Everything awaiting sign-off goes in one place: `pending-approval/` at the repo root. Not scattered across the repo, not left live on the site "until someone objects."
