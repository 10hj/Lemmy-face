const artwork = document.querySelector(".artwork");
document.addEventListener("visibilitychange", () => {
  artwork.classList.toggle("is-paused", document.hidden);
});
