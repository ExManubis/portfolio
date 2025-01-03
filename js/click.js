// CONSTANTS
const clickSound = document.querySelector("#mouse_click");

// SET VOLUME TO 0 ON STARTUP
window.addEventListener("load", () => {
  clickSound.volume = 0;
});

// CLICK SOUND
window.addEventListener("mousedown", () => {
  clickSound.currentTime = 0.75;
  clickSound.play();
});
