# Sleepy Eyes

A responsive sleepy-expression animation based on the supplied Figma design.

## Sequence

1. Awake eyes blink and look around subtly.
2. The round eyes close to their horizontal center line.
3. Lower-half sleeping crescents unfold from that same line.
4. Six staggered Z symbols use separated placements and gently float upward while rotating and fading.
5. The eyelids lift and the eyes wake up again.

## Files

```text
sleepy-eyes/
├─ assets/
│  └─ z.svg
├─ app.js
├─ index.html
└─ styles.css
```

No dependencies or build step are required. The animation pauses while the browser tab is hidden and respects `prefers-reduced-motion`.
