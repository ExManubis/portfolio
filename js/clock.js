// CONSTANTS
const time = document.querySelector(".time");

// SCRIPT
setInterval(() => {
  let now = new Date();
  time.textContent = now.toLocaleTimeString("da-DK");
}, 1000);
