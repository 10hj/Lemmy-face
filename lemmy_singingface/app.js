const artwork = document.querySelector(".artwork");

// 다른 탭을 보고 있을 때 애니메이션을 잠시 멈춰 불필요한 작업을 줄입니다.
document.addEventListener("visibilitychange", () => {
  artwork.classList.toggle("is-paused", document.hidden);
});
