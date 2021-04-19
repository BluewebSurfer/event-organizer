///////////////////////////
// VIDEO PLAYER

const playBtn = document.querySelector(".play-pause");
const videoPlayer = document.querySelector(".video-player");
const playBtnIcon = document.querySelector(".play-btn-icon");

if (playBtn) {
  playBtn.addEventListener("click", function () {
    if (videoPlayer.paused) {
      playBtnIcon.setAttribute("href", "img/play-pause.svg#icon-pause");
      playBtn.style.backgroundColor = "transparent";
      videoPlayer.play();

      let timeLeft = (videoPlayer.duration - videoPlayer.currentTime) * 1000;
      setTimeout(() => {
        playBtn.style.backgroundColor = "rgba(0, 0, 0, 0.322)";
        playBtnIcon.setAttribute("href", "img/play-pause.svg#icon-play2");
      }, timeLeft);
    } else {
      playBtnIcon.setAttribute("href", "img/play-pause.svg#icon-play2");
      playBtn.style.backgroundColor = "rgba(0, 0, 0, 0.322)";
      videoPlayer.pause();
    }
  });
}
