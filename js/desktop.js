// CONSTANTS
const icon = document.querySelector(".icon");
const windowSelector = document.querySelector(".window");
const windowFocus = document.querySelector(".window_focus");
const appFocus = document.querySelector(".app_focus");
const desktop = document.querySelector(".desktop");

// ICON SELECT
// icon.addEventListener("click", () => {
//   icon.classList.toggle("focus");
// });

// OPEN APPLICATION
icon.addEventListener("dblclick", () => {
  let targetID = icon.id;
  windowFocus.classList.remove("window_focus");
  appFocus.classList.remove("app_focus");
  let application = document.querySelectorAll(`.${targetID}`);
  application[0].classList.add("window_focus", "active");
  application[1].classList.add("active", "app_focus");
});

// WINDOW FOCUS
windowSelector.addEventListener("click", (event) => {
  let targetID = event.currentTarget.id;
  let application = document.querySelectorAll(`.${targetID}`);
  if (application[1].classList.contains("app_focus")) {
    console.log("class already active");
  } else {
    let targetWindow = event.currentTarget;
    windowFocus.classList.remove("window_focus");
    targetWindow.classList.add("window_focus");
    application[1].classList.add("app_focus");
  }
});

desktop.addEventListener("click", () => {
  windowFocus.classList.remove("window_focus");
  appFocus.classList.remove("app_focus");
});
