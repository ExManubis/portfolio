// CONSTANTS
const clickSound = document.querySelector("#mouse_click");

// CLICK SOUND
window.addEventListener("mousedown", () => {
  clickSound.currentTime = 0.75;
  clickSound.play();
});
