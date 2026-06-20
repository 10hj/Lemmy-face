const artwork = document.querySelector(".artwork");

// 다른 탭을 보는 동안 애니메이션을 일시 정지합니다.
document.addEventListener("visibilitychange", () => {
  artwork.classList.toggle("is-paused", document.hidden);
});
