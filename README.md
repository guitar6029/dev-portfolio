✦ PARALLAX-9

A Cyberpunk-Inspired Interactive Web Experience

Parallax-9 is an experimental concept interface built to explore cyberpunk UI themes, immersive motion design, and futuristic navigation patterns. Inspired by dystopian system terminals and neon-lit data archives, the project blends 3D assets, animated panels, and reactive UI behaviors into a cohesive sci-fi experience.

This is not a traditional app — it is a concept environment, a visual/interactive showcase of creativity, motion, and front-end engineering skill.

✦ Live Demo

https://parallax-9.vercel.app

(Hosted on Vercel)

✦ Features

Cyberpunk UI System
Neon panels, angular shapes, animated accents, deep-contrast layouts.

Immersive Navigation
Animated sidebars, active state transitions, section depth effects, and smooth UX flows.

CMC (Construct Memory Core) Simulation
Includes a fake loading sequence, status changes, and a deliberate “system failure” mode.

3D Integration
Custom Blender-made models rendered using Google Model Viewer for performance and compatibility.

Custom Cursor System
Optional futuristic pointer with glow effects and parallax motion.

Dynamic Panels & Components
Reusable cyber-styled UI pieces (Panel-1, Panel-2, NeuralArchiveCard, etc.).

Responsive Layout
Optimized for both large display environments and small/mobile screens.

✦ Tech Stack
Frontend

Nuxt 4 (App Framework)

Vue 3 + Composition API

TailwindCSS 4 (Utility styling, custom themes)

Google Model Viewer (3D rendering)

GSAP / CSS Transitions (for motion & micro-interactions — optional depending on final setup)

Design Tools

Blender — creation of shards, core models, and geometric components

Pixabay — ambient system sounds & effects

Adobe / Figma — UI mockups (optional workflow)

Hosting

Vercel — SSR + static asset hosting


✦ 3D Model Workflow

Designed in Blender

Exported as .glb

Served through public/models/*

Rendered using:

```
<model-viewer
  src="/models/core.glb"
  autoplay
  camera-controls
  disable-zoom
></model-viewer>
```
