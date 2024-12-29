// CONSTANTS
const min = document.querySelector(".topbox.min");
const max = document.querySelector(".topbox.max");
const close = document.querySelector(".topbox.close");

// MINIMIZE WINDOW
min.addEventListener("click", (event) => {
  let targetWindow = event.currentTarget.parentNode.parentNode.parentNode;
  targetWindow.classList.remove("active");
  let targetID = targetWindow.id;
  let application = document.querySelectorAll(`.${targetID}`);
  application[1].classList.remove("app_focus");
});

// MAXIMIZE WINDOW
max.addEventListener("click", (event) => {
  let targetWindow = event.currentTarget.parentNode.parentNode.parentNode;
  targetWindow.style.top = 0;
  targetWindow.style.left = 0;
  targetWindow.classList.toggle("max");
});

// CLOSE WINDOW
close.addEventListener("click", (event) => {
  let targetWindow = event.currentTarget.parentNode.parentNode.parentNode;
  targetWindow.classList.remove("active");
  appFocus.classList.remove("active");
});
