# Dizzy Eyes

A responsive dizzy-expression animation based on the supplied Figma design.

## Sequence

1. Round eyes blink normally.
2. The eyes and pupils move subtly, then return to center.
3. The centered eyes close and naturally transform into the exact left and right Figma spirals.
4. The two spirals rotate in opposite directions and wobble independently.
5. A segmented orbit remains visible around and between the eyes while masked cutouts keep it out of both spiral shapes.
6. Five rounded colorful stars glide smoothly along the 2.8-second orbit.
7. The stars and spirals collapse together and the round eyes reopen.

## Files

```text
dizzy-eyes/
├─ assets/
│  ├─ spiral-left.svg
│  ├─ spiral-right.svg
│  ├─ star-red.svg
│  ├─ star-orange.svg
│  ├─ star-purple.svg
│  ├─ star-pink.svg
│  └─ star-coral.svg
├─ app.js
├─ index.html
└─ styles.css
```

No dependencies or build step are required. The animation pauses while the browser tab is hidden and respects `prefers-reduced-motion`.
