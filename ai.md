# AI-Generated Design Tells: What to Avoid on ZentiqOne

Researched via Claude in Chrome from impeccable.style (a design-detector project that catalogs the recurring visual/copy patterns that make a site look AI-generated) plus general search on the same topic. This is our standing checklist. Read this before any visual/design change, not just when told to.

Rule of thumb: if a decoration doesn't serve the content (a real canvas, a real measurement, a real state change), it's slop. Enterprise-grade sites earn their visual interest from typography, spacing, and real content hierarchy, not glow/blur/gradient decoration bolted on top.

## Visual details (avoid)

- Decorative grid/dot texture covering a whole surface with no functional purpose. Fine as a small, sparse brand accent (a corner, next to a heading); not fine as a full-section background texture.
- Thick colored border on one side of a rounded card ("side-tab" accent). Called out as the single most recognizable AI tell. Never do this.
- Glassmorphism: blur, frosted-glass cards, glow borders used as pure decoration rather than to solve real layering.
- Hairline border + wide diffuse shadow ("ghost card"). Pick one, not both.
- Repeating-gradient stripes as surface decoration.
- Extreme border-radius (24px+) on small cards, rounding everything into a blob.
- Hand-drawn SVG mascots/scene illustrations. If we can't afford real illustration or photography, use plain icons or nothing.
- Any radial-gradient glow, ambient halo, or spotlight blur behind text or cards, in light or dark mode. (This is what I added and you correctly called out. Removed.)

## Color (avoid)

- Purple-to-blue gradients, cyan-on-dark. The single most recognizable "AI palette."
- Gradient text on headings, especially over multiple stops.
- Dark backgrounds with colored box-shadow glow accents ("cyberpunk by default").
- Cream/beige page background reached for as the reflexive "tasteful" default.
- Gray text on a colored background (also just bad contrast).

## Typography (avoid)

- Small tracked-uppercase "eyebrow"/"kicker" label sitting above a heading. Borrows editorial authority it hasn't earned.
- Tiny pill/badge chip directly above an oversized hero headline. (Our current hero badge + H1 pattern is close to this, worth revisiting even without changing the words in it.)
- Rounded-square icon tile stacked above a heading. Called "the universal AI feature-card template." (Our page-hero icon-badge circles above H1, and some section icons, land close to this.)
- Oversized italic serif display headline as the hero.
- Flat type hierarchy: heading/subheading/body sizes too close together, no contrast.
- One font used for everything, no distinct display vs. body pairing.
- Overused fonts: Inter, Geist, Space Grotesk, Instrument Serif. (We're on a system-font stack, which is fine, just don't drift to these.)
- Crushed/negative letter-spacing, or the opposite, wide tracking on body text.
- All-caps for long passages of body text.

## Layout (avoid)

- Identical card grids: same-size cards, icon + heading + short text, repeated many times. Called "the default AI homepage layout" in the research. (Our "Why ZentiqOne" 6-card grid and the 3-card trust section are exactly this shape. Worth a look, even with zero copy changes, e.g. varied card sizes, an asymmetric layout, or breaking one section out of the grid entirely.)
- "Hero metric" layout: big number, small label, a row of 3-4 stats, done with a gradient accent. Recognized everywhere, trusted nowhere. (Our stats bar is the plain version of this, without the gradient, which is the safer end of it, but still worth being aware of.)
- Tiny numbered labels ("01", "02") next to headings pretending to be editorial structure.
- Monotonous spacing: the same gap value used everywhere with no rhythm or grouping.
- Cards nested inside cards inside cards.

## Motion (avoid)

- Scaling or rotating an image on hover. Called a "recurring generated-UI signature."
- Bounce/elastic easing (a dialog that springs in with overshoot). Reads as dated/generated, not delightful.
- Decorative pulsing dot on a status indicator that isn't actually live.
- Auto-scrolling marquees that never stop.
- Fake blinking cursor on non-editable hero text.

Motion that's fine: lift + solid border/shadow change on hover (what we shipped), count-up numbers tied to real data, scroll-reveal fades (already in script.js).

## Copy (avoid, per your standing rule too)

- Em-dash overuse. Confirmed independently as a known AI cadence tell, matches our existing no-em-dash rule.
- Marketing buzzwords: streamline, empower, supercharge, world-class, enterprise-grade, next-generation.
- Aphoristic-cadence copy: "Not a feature. A platform." style manufactured contrast.
- Dismissing something as "theater."
- Same phrase repeated in one card/container (label, sublabel, helper text all saying the same thing).

## Imagery (avoid)

- Hero art assembled from generic SVG shapes. Reads as placeholder clip art, not a real illustration.
- Broken/empty image src.

## General production quality (not AI-specific, but check anyway)

- Body text under 14px, line-height under 1.5, letter-spacing over 0.05em.
- Text within 8px of a container edge, or flush against the viewport edge.
- Justified text (creates uneven rivers of whitespace on screen).
- Contrast below WCAG AA (4.5:1 body, 3:1 large text).
- Skipped heading levels (h1 straight to h3).
- Content stuck at opacity:0 because a scroll-reveal script never fired.

## Applying this to ZentiqOne going forward

Before shipping any visual/design change on this site: check it against the lists above. If something on the live site already matches one of these (the hero badge-above-H1, the icon-badge circles, the identical 6-card grid), that's a design observation, not a content change, so it's fair game once you want to act on it. I won't add anything from the "avoid" lists again without flagging it first.
