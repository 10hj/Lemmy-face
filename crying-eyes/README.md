# Crying Eyes

A responsive CSS animation based on the supplied Figma design. The tear pools beneath the right eye, stretches through surface tension, separates, and accelerates downward.

## Files

```text
crying-eyes/
├─ assets/
│  └─ tear.svg
├─ app.js
├─ index.html
└─ styles.css
```

## Run locally

No build step or dependency installation is required. Open `index.html` directly in a browser, or serve the directory with any static file server.

For example:

```bash
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Animation structure

- `.tear-pool`: water gathering beneath the eye
- `.tear-neck`: the narrowing connection created by surface tension
- `.tear-drop`: the SVG drop separating and falling
- `app.js`: pauses animations while the browser tab is hidden

The artwork respects `prefers-reduced-motion` and scales to a 2:3 portrait canvas.
