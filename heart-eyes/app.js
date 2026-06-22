const artwork = document.querySelector(".artwork");

// Pause the expression animation while this browser tab is hidden.
document.addEventListener("visibilitychange", () => {
  artwork.classList.toggle("is-paused", document.hidden);
});
