# Standing Instructions: Read This First, Every Session

Rules Shayla has had to repeat more than once. Once is a request, twice is a standing rule. Check this file before starting any work on this site, and follow it without being asked again.

## 1. Code quality: question every line

Before writing or keeping any line of code, ask whether it's actually needed and whether it can be simpler. Concretely: reuse existing CSS variables, breakpoints, and JS patterns instead of inventing new ones; don't leave dead code behind (remove rules/classes that stop being used); don't add a library or a new pattern when the existing one already does the job; keep diffs minimal, no unrelated changes riding along. If asked directly whether code is optimized, the answer should already be yes because this was followed while writing it, not fixed afterward.

## 2. No AI-generated content or design, strictly avoid

Full detail in `ai.md`, read it before any visual, design, or copy change. Short version: no glow/blur/gradient decoration, no badge-tag directly above an H1, no identical repeating card grids, no side-accent borders, no em-dash-heavy or buzzword-heavy copy, no generic AI-template patterns of any kind. If a change is close to one of these patterns, it gets flagged before shipping, not after. This applies to both design and copy, not just visuals.

## 3. No content ships without approval

Full detail in `content-approval-rules.md`, read it in full. Short version: any user-facing wording (titles, meta descriptions, headlines, body copy, glossary entries, FAQ text, category/topic labels, legal pages) needs Shayla's dad's sign-off before it goes on a live page. No exception for "it's just a quick SEO fix" or "it's obviously correct." Drafts go in `pending-approval/`, never straight into a live file.

## 4. Verify the live site directly, every time, before saying "done"

After any push (or before answering "is it live/done"), check zentiqone.com directly, don't take a push for granted and don't rely on a single method. Use WebFetch, and use Claude in Chrome as a second check when the stakes are higher (a specific claim, a URL, something Shayla will act on). Local file edits and local screenshots are not the same as confirming the live site.

## 5. Work directly, don't burn tokens on unnecessary steps

For a well-scoped, low-ambiguity fix (design, layout, bug), ship it directly rather than building a separate preview/mockup page first. Batch tool calls instead of one-at-a-time. Don't re-read or re-send files that haven't changed. This is also a standing Cowork-wide preference for this account (minimize token usage), so it applies beyond just this project.

## 6. Writing style, site-wide

No em dashes or en dashes used as sentence punctuation, no emojis, anywhere in this repo's code or copy. Matches Shayla's own communication preference too, so it applies to chat replies as well as anything written into the site.

## 7. Everything pending review lives in one folder

`pending-approval/` at the repo root. Not scattered across the repo as loose files, not left live "until someone objects." When in doubt whether something needs review, it goes there instead of straight onto a page.
