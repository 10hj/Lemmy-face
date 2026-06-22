const face = document.querySelector('.face');
document.addEventListener('visibilitychange', () => {
  face.classList.toggle('is-paused', document.hidden);
});
