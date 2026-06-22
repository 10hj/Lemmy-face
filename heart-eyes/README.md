# Heart Eyes

A responsive expression animation based on the supplied Figma design.

## Sequence

1. Round eyes blink and look around subtly.
2. The eyes close and transition into a longer, rhythmic heart-eye section.
3. The round eyes briefly reopen to separate the expressions.
4. The eyes close into happy upper-half crescents while small hearts float upward and fade.
5. The round eyes reopen and the loop repeats.

## Files

```text
heart-eyes/
├─ assets/
│  └─ heart.svg
├─ app.js
├─ index.html
└─ styles.css
```

No build step or dependencies are required. Open `index.html` directly in a browser or serve the directory with any static file server.

The animation pauses when the browser tab is hidden and respects `prefers-reduced-motion`.
