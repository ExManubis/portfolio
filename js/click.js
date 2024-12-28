// CONSTANTS
const clickSound = document.querySelector("#mouse_click");

// CLICK SOUND
window.addEventListener("click", () => {
  clickSound.currentTime = 0.75;
  clickSound.play();
});
