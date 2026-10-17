# D3 — Approved Portfolio Navigation & Hero Direction

**Decision:** Approve **Variation C — Framed Systems** as the foundation for the portfolio redesign.
**Branch:** `codex/portfolio-ui-design-exploration`
**Status:** Design checkpoint approved; production implementation not started.

## Selected direction

Variation C combines the Structural Rail navigation with a framed, architectural hero:

- Matte-black outer background.
- Light metallic-gray hero surface with a readable, high-contrast text hierarchy.
- Oversized condensed `JOSH SOLL` typography as the primary focal point.
- Minimal horizontal navigation with the name/wordmark left and `WORK`, `ABOUT`, `RÉSUMÉ`, and `CONTACT` right.
- Vertical black utility rail inside the hero panel.
- Asymmetric layout with irregular clipped panels, overlapping surfaces, and deliberate negative-space cutouts.
- Responsive desktop and mobile compositions with a single logical reading order on narrow screens.
- Subtle futuristic details expressed through line work, grid/orbit geometry, and one restrained signal accent—not cyberpunk styling, glow, or character imagery.
- Clear software engineering positioning and selected-work CTA without fabricated statistics or project claims.

The approved reference implementation is the static mockup at [hybrid-navigation-hero-variation-c.html](./hybrid-navigation-hero-variation-c.html). It is a design artifact only and does not represent production UI code.

## Approved refinements for the next design iteration

These are design requirements for the next exploration pass. They are intentionally not implemented in production by this checkpoint:

1. Improve text contrast on the metallic-gray surface.
2. Reduce the opacity of small overlapping decorative shapes near the bottom to approximately 15–25%, or remove unnecessary pieces.
3. Simplify the right-side technical graphic so it reads as architectural structure rather than placeholder interface decoration.
4. Explore a slightly darker, warmer metallic-gray hero surface while preserving readability.
5. Keep the current overall composition and condensed typography.
6. Preserve Variation A as the documented fallback, but do not continue developing it unless this decision is revisited.

## Preserved alternatives and artifacts

- D1 remains the original exploration record and preserves the rationale for the three initial concepts.
- D2 remains the comparison record for Variations A, B, and C.
- Variation A remains a documented fallback and is not being deleted or overwritten.
- All mockups remain static HTML/CSS prototypes under `docs/design/`.

## D4 refinement note

The Variation C mockup has been refined in place without changing its navigation, information architecture, or overall desktop/mobile composition. The metallic surface is now darker and warmer with flatter treatment; primary and secondary text use a darker contrast hierarchy; the lower clipped tiles are held at approximately 20% opacity; and the right-side diagram is reduced to a restrained grid, single orbit, architectural diamond, and one structural rule. These changes are mockup-only and are not production implementation.

## Implementation boundary

This approval does not authorize production implementation. The future implementation task must separately scope changes to navigation, hero layout, global tokens, responsive behavior, focus states, and reduced-motion behavior. Sanity schemas, queries, Studio configuration, dependencies, routes, and existing content behavior remain unchanged until that task is explicitly requested.
