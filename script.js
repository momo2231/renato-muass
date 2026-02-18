const music = document.getElementById("music");
const playPause = document.getElementById("playPause");
const volume = document.getElementById("volume");
const enter = document.getElementById("enter");

music.volume = 0.7;

// CLICK TO ENTER
enter.addEventListener("click", () => {
  music.play();
  enter.style.display = "none";
  playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

// PLAY / PAUSE
playPause.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    music.pause();
    playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

// VOLUME
volume.addEventListener("input", () => {
  music.volume = volume.value;
});
