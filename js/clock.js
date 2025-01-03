// CONSTANTS
const time = document.querySelector(".time");
const bodyQS = document.querySelector("body");

// SCRIPT
setInterval(() => {
  let now = new Date();
  time.textContent = now.toLocaleTimeString("da-DK");
}, 1000);

// EASTER EGG
time.addEventListener("click", () => {
  body.classList.toggle("retro");
});
