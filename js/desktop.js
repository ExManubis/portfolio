// CONSTANTS
const icon = document.querySelector(".icon");
const windowSelector = document.querySelector(".window");
const windowFocus = document.querySelector(".window_focus");
const appFocus = document.querySelector(".app_focus");
const desktop = document.querySelector(".desktop");
const startButton = document.querySelector(".start_button");
const startMenu = document.querySelector(".start_menu");
const startItem = document.querySelector(".start_item");
const crt = document.querySelector(".crt_filter");
const crtOnM = document.querySelector(".toggle_on");
const crtOffM = document.querySelector(".toggle_off");
const crtOnD = document.querySelector(".toggle_on_d");
const crtOffD = document.querySelector(".toggle_off_d");
const setting = document.querySelector(".setting");

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

// REMOVE FOCUS ON DESKTOP CLICK
desktop.addEventListener("click", () => {
  windowFocus.classList.remove("window_focus");
  appFocus.classList.remove("app_focus");
  startButton.classList.remove("active");
  startMenu.classList.remove("active");
  startItem.classList.remove("active");
  setting.classList.remove("active");
});

// START MENU
startButton.addEventListener("click", () => {
  startButton.classList.toggle("active");
  startMenu.classList.toggle("active");
  startItem.classList.remove("active");
  setting.classList.remove("active");
});

// START MENU ITEMS
startItem.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active");
  let targetID = event.currentTarget.id;
  let targetMenu = document.querySelector(`.${targetID}`);
  targetMenu.classList.toggle("active");
});

// CRT SETTING
crtOnM.addEventListener("click", () => {
  crt.classList.remove("off");
  crtOnM.classList.add("active");
  crtOnD.classList.add("active");
  crtOffM.classList.remove("active");
  crtOffD.classList.remove("active");
});

crtOffM.addEventListener("click", () => {
  crt.classList.add("off");
  crtOffM.classList.add("active");
  crtOffD.classList.add("active");
  crtOnM.classList.remove("active");
  crtOnD.classList.remove("active");
});

crtOnD.addEventListener("click", () => {
  crt.classList.remove("off");
  crtOnD.classList.add("active");
  crtOnM.classList.add("active");
  crtOffD.classList.remove("active");
  crtOffM.classList.remove("active");
});

crtOffD.addEventListener("click", () => {
  crt.classList.add("off");
  crtOffD.classList.add("active");
  crtOffM.classList.add("active");
  crtOnM.classList.remove("active");
  crtOnD.classList.remove("active");
});
