// CONSTANTS
const icon = document.querySelectorAll(".icon");
const windowSelector = document.querySelectorAll(".window");
const windowFocus = document.querySelectorAll(".window_focus");
const appDrawer = document.querySelectorAll(".app");
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
icon.forEach((element) => {
  var x = 800,
    w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  if (w < x) {
    element.addEventListener("click", () => {
      let targetID = element.id;
      windowSelector.forEach((element) => {
        element.classList.remove("window_focus");
      });
      appDrawer.forEach((element) => {
        element.classList.remove("app_focus");
      });
      let application = document.querySelectorAll(`.${targetID}`);
      application[0].classList.add("window_focus", "active");
      application[1].classList.add("active", "app_focus");
    });
  } else {
    element.addEventListener("dblclick", () => {
      let targetID = element.id;
      windowSelector.forEach((element) => {
        element.classList.remove("window_focus");
      });
      appDrawer.forEach((element) => {
        element.classList.remove("app_focus");
      });
      let application = document.querySelectorAll(`.${targetID}`);
      application[0].classList.add("window_focus", "active");
      application[1].classList.add("active", "app_focus");
    });
  }
});

// WINDOW FOCUS
windowSelector.forEach((element) => {
  element.addEventListener("click", (event) => {
    let targetID = event.currentTarget.id;
    let application = document.querySelectorAll(`.${targetID}`);
    let targetWindow = event.currentTarget;
    windowSelector.forEach((element) => {
      element.classList.remove("window_focus");
    });
    targetWindow.classList.add("window_focus");
    appDrawer.forEach((element) => {
      element.classList.remove("app_focus");
    });
    application[1].classList.add("app_focus");
  });
});

// REMOVE FOCUS ON DESKTOP CLICK
desktop.addEventListener("click", () => {
  windowSelector.forEach((element) => {
    element.classList.remove("window_focus");
  });
  appDrawer.forEach((element) => {
    element.classList.remove("app_focus");
  });
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
