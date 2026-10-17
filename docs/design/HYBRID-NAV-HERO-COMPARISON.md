# D2 — Hybrid Navigation & Hero Comparison

## Mockup

[Open the self-contained HTML/CSS mockups](./hybrid-navigation-hero-mockups.html). It contains four labeled artboards: Variation A desktop/mobile and Variation B desktop/mobile.

[Open the alternate framed-systems mockup](./hybrid-navigation-hero-variation-c.html). It contains a separate desktop/mobile direction inspired by the reference’s floating dashboard shell and vertical utility rail, with an abstract architectural visual instead of a person.

## Shared hybrid system

Both directions combine the D1 Structural Rail navigation with the D1 Monolith Frame hero:

- A minimal horizontal rail with `JOSH SOLL` on the left and `WORK`, `ABOUT`, `RÉSUMÉ`, and `CONTACT` on the right.
- A small active-route rule instead of a filled or glowing state.
- Oversized, uppercase `JOSH SOLL` typography as the primary focal point.
- Matte black, graphite, silver, and one cool steel signal accent.
- CSS-only architectural geometry: no portrait, robot, generic sculpture, neon effect, or technology-logo grid. The updated shapes borrow the reference’s clipped cards, notched corners, staggered seams, and interlocking panel rhythm while staying monochrome.
- A selected-work CTA and a secondary résumé/contact action.
- Mobile layouts that collapse the links to a labeled `MENU +` control and keep the hero content in a single reading order.

## Variation A — Typography dominant

The title occupies the visual foreground while a thin, skewed structural frame sits behind it. The panel geometry is deliberately quiet: one nested outline, one diagonal rule, two staggered clipped tiles, and one small signal line. The clipped tiles create the industrial construction rhythm from the reference without competing with the name. This makes the positioning statement and selected-work CTA easy to find.

Typography recommendation: use a readable grotesk with a heavy uppercase display weight for the name, a regular sans for positioning copy, and a tracked label face for index metadata. The title should have tight leading but enough counter space to remain legible at small mobile widths.

Palette: `#080909` ink, `#101314` carbon, `#1b1f20` graphite, `#e1e4e1` silver, `#9da5a4` muted steel, and `#9dafb0` signal.

Tradeoff: the most direct and conversion-friendly option. Its restraint makes the brand name and CTA unmistakable, but it carries less architectural drama and depends on excellent type scale and spacing.

## Variation B — Architectural composition

The right half becomes a prominent irregular graphite plane with chamfered edges, an inner frame, and a negative-space cutout. Three smaller clipped tiles interlock along the lower seam, echoing the reference’s modular construction cards without introducing claims or decorative content. The copy column overlaps the plane without losing reading order. The navigation remains quiet so the panel can supply the visual signature.

Typography recommendation: use the same readable grotesk system as Variation A, but reduce the copy measure and introduce a stronger distinction between label, name, and role. Keep the display face neutral; the geometry already provides personality.

Palette: the same shared tokens, with `#262b2c` used only for the panel’s inner surface and `rgb(225 228 225 / 48%)` for the structural frame. The single `#9dafb0` signal line is enough futuristic treatment.

Tradeoff: more memorable and closer to the industrial/VR reference characteristics, but more sensitive to viewport widths and content length. The panel must collapse to normal flow on mobile rather than remain an absolute full-height object.

## Recommendation history

The original D2 recommendation was **Variation A as the first implementation candidate** because it preserved the clearest professional hierarchy and lowest layout risk. D3 supersedes that recommendation: **Variation C — Framed Systems is now the approved foundation**. Variation A remains a documented fallback and is not being developed further.

## Alternate direction — Variation C / Framed systems

Variation C follows the newly supplied reference’s layout logic more closely: a floating rounded shell, left utility rail, large typographic content block, and a right-side visual module. The figure/character treatment is intentionally removed. In its place is a CSS-only architectural panel made from a grid, orbital line, clipped surfaces, and a single muted oxide signal. This makes the concept feel like a professional software systems portfolio rather than an AI-art landing page.

Tradeoff: the framed shell creates a stronger product/interface metaphor and gives the page a memorable container, but it introduces a larger visual object competing with the name. It should be considered a separate route-level exploration or a later hero variant, not merged into Variation A without testing hierarchy and mobile readability.

## Scope and constraints

These are static design prototypes only. No production Next.js components, routes, Sanity files, dependencies, configuration, or content data were changed. The copy is positioning language only and contains no experience statistics, proficiency percentages, or fabricated project claims.
