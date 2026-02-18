const music = document.getElementById("music");
const playPause = document.getElementById("playPause");
const volume = document.getElementById("volume");
const enter = document.getElementById("enter");

// impostazioni iniziali
music.volume = 0.7;
music.muted = true;

// click to enter (SBLOCCA AUDIO)
enter.addEventListener("click", () => {
  music.muted = false;
  music.currentTime = 0;

  music.play().catch(err => {
    console.log("Autoplay bloccato:", err);
  });

  enter.style.display = "none";
  playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

// play / pause
playPause.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    music.pause();
    playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

// volume
volume.addEventListener("input", () => {
  music.volume = volume.value;
});
