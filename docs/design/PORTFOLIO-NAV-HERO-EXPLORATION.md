# Portfolio Navigation & Hero Design Exploration

**Assessment:** D1 — concept exploration only
**Branch:** `codex/portfolio-ui-design-exploration`
**Repository state assessed:** `40a25fb` (`main` tip at assessment time)

## Current interface constraints and opportunities

Observed in the current Next.js application:

- `src/components/Header/Header.tsx` provides a sticky header with only `Home` and `Portfolio` routes. There is no résumé or contact action in the primary navigation.
- `src/components/Hero.tsx` centers a full-height hero around “Josh Soll”, “Software Engineer”, and a short positioning statement. It uses the local Space Jaeger display face, Exo 2, large SVG circuit paths, and animated geometric accents.
- `src/app/page.tsx` follows the hero with large fixed-height spacer/decoration regions, then `WhatIDo`, `Skills`, and `AboutMe`. The current composition is visually expressive but leaves the primary work CTA and contact path implicit.
- `src/app/style/globals.css` is built around near-black carbon surfaces with purple, neon blue, and red accents. The proposed direction should reduce the competing neon palette to one restrained signal accent.
- `src/app/fonts.ts` loads Space Jaeger locally and Exo 2 from Google Fonts. The title treatment should remain highly readable at display sizes; Space Jaeger should be treated as an evaluated option, not a requirement.
- `/portfolio` and `/portfolio/[slug]` are Sanity-backed. `src/sanity/queries.ts` uses `revalidate: 60`; the design should keep project links and content rendering independent of the hero treatment.
- `/studio` remains the Sanity Studio route. No CMS schema or data-shape changes are needed for this exploration.

The strongest opportunity is to turn the existing decorative language—lines, angled paths, irregular outlines—into a clear navigation and content system. The design should make “selected work”, résumé access, and contact access first-class without inventing metrics or adding a technology-logo wall.

## Concept 1 — Structural Rail

### Navigation

A compact, persistent horizontal rail: a left-aligned `JOSH SOLL / SOFTWARE ENGINEER` wordmark, a right-aligned set of `WORK`, `ABOUT`, `RÉSUMÉ`, and `CONTACT` links, and a small active-route marker. Use a thin metallic rule below the rail rather than a filled navbar. Keep the rail sticky with a solid/blurred graphite surface so content remains readable.

### Hero layout

An asymmetric 7/5 composition. The left seven columns carry the editorial message: a small index label such as `01 / SELECTED WORK`, a two-line `JOSH SOLL` title, a concise positioning statement, and two actions: `VIEW SELECTED WORK` and `DOWNLOAD RÉSUMÉ`. The right five columns contain a tall irregular graphite panel with a cropped corner and a single low-contrast structural line motif. The panel is an atmosphere and framing device, not an illustration.

### Typography

Use a neutral grotesk or humanist sans for all reading/UI text. Set the name in a heavy, tightly tracked uppercase display style with controlled line-height; set navigation in a smaller uppercase label style with generous tracking. Use a readable regular weight for the positioning statement. Avoid all-caps body copy and decorative sci-fi letterforms.

### Colors and accent treatment

Matte black and graphite surfaces dominate. Use soft silver for the title and primary text, muted steel for secondary text, and one desaturated signal accent—oxidized blue-gray or warm aluminum—for active states and the CTA rule. Borders should be 1px, low-opacity, and used to expose structure. No purple/blue/red trio in the hero.

### Mobile adaptation

Collapse the rail to a two-row header: wordmark on the left, a labeled menu trigger on the right, with résumé/contact kept in the opened menu. Stack the hero content above the structural panel. Let `JOSH SOLL` wrap naturally across two lines, reduce the title clamp, and keep both CTAs full-width or equal-width. Crop the panel to a shallow horizontal band so it does not push the selected-work CTA below the fold.

### Tradeoffs

This is the clearest and most durable concept. It maps directly to the existing route structure and gives the portfolio a professional conversion path. It is less experimental than the other directions, and its success depends on disciplined spacing and restrained line work rather than visual novelty.

## Concept 2 — Editorial Index

### Navigation

Treat navigation as a publication index. Place a slim top bar with the name at left, route labels with numeric prefixes (`01 WORK`, `02 ABOUT`, `03 CONTACT`) in the center/right, and a small `MENU` affordance at narrow widths. The active item uses a short silver underline and an index number rather than a color fill.

### Hero layout

Use a broad editorial title block that begins slightly off-center rather than centered. `JOSH` occupies the first line and `SOLL` the second, with a clipped graphite project card intruding from the lower-right corner. The card contains only a live Sanity project title, a one-line description, and a `VIEW WORK` link; it should not invent a hero project or require a new CMS field. A vertical metadata column at the left reads `WEB / UI / SYSTEMS` as descriptive categories, not proficiency claims.

### Typography

Use a high-contrast but quiet display sans for the name and a compact grotesk for labels. The title should be large but not poster-like: prioritize readable counters, moderate tracking, and a short measure. Use tabular numerals for index labels and a consistent baseline grid to give the page the editorial/agency quality described in the references.

### Colors and accent treatment

Use near-black, paper-black, and graphite panels with a soft silver text hierarchy. The accent is a single hairline in brushed nickel or pale blue-gray. Add a subtle material grain only if it remains accessible and does not compete with text; the default should be flat color and border contrast. Hover states can shift a rule or panel edge by one tone.

### Mobile adaptation

The index becomes a compact top bar with a menu drawer. The title becomes a left-aligned two-line block with a maximum width, while the project card becomes a normal-flow panel beneath the statement. The vertical metadata column becomes a horizontal list. Keep the first viewport focused on name, role, and `VIEW WORK`; defer secondary navigation to the menu.

### Tradeoffs

This concept gives the portfolio the strongest editorial hierarchy and makes selected work feel immediately relevant. It has the highest content dependency: the hero card needs a predictable featured-project result and careful empty-state handling when Sanity has no published projects. It also needs more typographic tuning to avoid feeling like a magazine template.

## Concept 3 — Monolith Frame

### Navigation

Use a minimal top-left wordmark and a right-side vertical utility rail on desktop. The rail contains `WORK`, `ABOUT`, `RÉSUMÉ`, and `CONTACT` as rotated or vertical labels with a thin progress/active line. On the home route, the rail remains visible as a framing element; on inner routes it becomes a standard compact header to protect reading space.

### Hero layout

Build a full-bleed monolith: a large graphite field with an offset cutout that reveals the black page background. Place `JOSH SOLL` across the lower-left edge of the field, with the role and positioning statement aligned to a separate narrow column. A bottom utility strip carries `SCROLL TO WORK`, a selected-work anchor, and résumé/contact actions. The cutout is geometric and structural—no robot, portrait, or generic abstract artwork.

### Typography

Use one highly legible sans family with two roles: a heavy, oversized title and a compact mono-like label face only for metadata if needed. Keep the title’s width controlled so it reads as a name, not a texture. Use sentence case for the positioning statement and generous line-height for the narrow column.

### Colors and accent treatment

The base is matte black with a single monolithic graphite panel, a slightly lighter inner frame, and soft silver type. Use one restrained warm-gray or cool-steel accent on the active rail line. Avoid glow, animated neon, and decorative dots. Motion, if retained, should be a slow panel reveal or line draw that respects `prefers-reduced-motion`.

### Mobile adaptation

Remove the vertical rail and use a compact top bar with a menu trigger. The monolith becomes a normal-flow card with a diagonal or chamfered corner; the cutout becomes a short border treatment rather than an absolute viewport-sized shape. Place the title, role, statement, and CTAs in a single reading order, then keep the utility strip as a small inline row.

### Tradeoffs

This is the most distinctive and closest to the industrial/VR reference characteristics. It creates a memorable first impression without imagery, but it is the most layout-sensitive: absolute positioning, cutouts, and the current SVG decoration can easily become brittle at intermediate widths. It also gives navigation less immediate prominence than the other concepts.

## Recommendation

Recommend **Concept 1 — Structural Rail** for the first implementation. It best balances the requested industrial/editorial character with professional information architecture: navigation, selected work, résumé, and contact are all visible without turning the hero into a poster. Its content model can use the existing Sanity project routes and current static copy, so it preserves the CMS integration and keeps the first PR focused on presentation. Concept 2 is a strong follow-on if a featured-project selection is later formalized; Concept 3 is better reserved for a visual refresh after responsive behavior is proven.

## Compact design-token proposal

These are proposed names and starting values, not implementation changes in D1:

```css
--color-ink: #090a0a;
--color-carbon: #111416;
--color-graphite: #1b1f21;
--color-steel: #697278;
--color-silver: #d9dddc;
--color-white: #f3f4f1;
--color-signal: #a8b8bb;
--color-line: rgb(217 221 220 / 18%);
--color-line-strong: rgb(217 221 220 / 36%);
--shadow-panel: 0 18px 60px rgb(0 0 0 / 28%);

--font-display: readable grotesk, sans-serif;
--font-body: readable grotesk, sans-serif;
--font-label: ui-monospace, SFMono-Regular, monospace;

--text-display: clamp(4.5rem, 12vw, 11rem);
--text-h2: clamp(2.25rem, 5vw, 5rem);
--text-body: clamp(1.05rem, 1.5vw, 1.35rem);
--tracking-label: 0.14em;
--leading-display: 0.88;

--space-page: clamp(1.25rem, 4vw, 5rem);
--space-section: clamp(4rem, 10vw, 10rem);
--radius-panel: 0;
--rule: 1px solid var(--color-line);
```

The current Exo 2 and Space Jaeger assets can be evaluated against these roles, but the final title face should be chosen for readability at large uppercase sizes. No new font dependency is necessary for the exploration or the first implementation PR.

## Precise first-PR implementation scope

The first implementation PR should implement Concept 1 only and remain presentation-focused:

1. Update `src/components/Header/Header.tsx` to add the selected-work anchor, résumé link, and contact link while preserving current route-active behavior and adding a keyboard-accessible mobile menu.
2. Update `src/components/Hero.tsx` to create the asymmetric title/statement/CTA layout and one structural panel. Keep the existing role and positioning copy unless content approval changes it; do not add metrics, testimonials, or invented project claims.
3. Update `src/app/style/globals.css` with the token layer, graphite/silver palette, typography roles, focus-visible styles, and responsive layout utilities. Retire competing hero neon colors from the new composition without removing tokens still used by untouched sections until those sections are migrated.
4. Update `src/app/style/animations.css` only for restrained entrance/line motion and a `prefers-reduced-motion: reduce` override. Do not introduce additional animation systems.
5. Make the home-page CTA target the existing `/portfolio` route or a stable in-page selected-work anchor. Do not change Sanity schemas, queries, project types, Studio configuration, dependencies, image configuration, or MongoDB/CMS behavior.
6. Verify desktop, tablet, and narrow mobile layouts, keyboard focus order, contrast, reduced motion, empty Sanity project results, and long project titles. Run `npm run lint`, `npm run typecheck`, and `npm run build` in an environment where Next/Turbopack can spawn its worker processes.

Files intentionally out of scope for that PR: `src/sanity/schemaTypes/project.ts`, `src/sanity/queries.ts`, `src/sanity/types.ts`, `sanity.config.ts`, `next.config.ts`, and all project-detail content behavior.

## Assessment-only constraints

No UI components, application code, dependencies, Sanity schemas, or configuration were changed for D1. No experience metrics or proficiency percentages are proposed. The only intended artifact is this exploration document.
