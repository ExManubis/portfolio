// CONSTANTS
const icon = document.querySelectorAll(".icon");
const windowSelector = document.querySelectorAll(".window");
const windowFocus = document.querySelectorAll(".window_focus");
const appDrawer = document.querySelectorAll(".app");
const desktop = document.querySelector(".desktop");
const startButton = document.querySelector(".start_button");
const startMenu = document.querySelector(".start_menu");
const startItem = document.querySelectorAll(".start_item");
const crt = document.querySelector(".crt_filter");
const crtOn = document.querySelectorAll(".toggle_on");
const crtOff = document.querySelectorAll(".toggle_off");
const setting = document.querySelectorAll(".setting");
const audioToggleOn = document.querySelectorAll(".audio_toggle_on");
const audioToggleOff = document.querySelectorAll(".audio_toggle_off");

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
  startItem.forEach((element) => {
    element.classList.remove("active");
  });
  setting.forEach((element) => {
    element.classList.remove("active");
  });
});

// START MENU
startButton.addEventListener("click", () => {
  startButton.classList.toggle("active");
  startMenu.classList.toggle("active");
  startItem.forEach((element) => {
    element.classList.remove("active");
  });
  setting.forEach((element) => {
    element.classList.remove("active");
  });
});

// START MENU ITEMS
startItem.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    let targetID = event.currentTarget.id;
    let targetMenu = document.querySelector(`.${targetID}`);
    targetMenu.classList.toggle("active");
  });
});

// CRT SETTING
crtOn.forEach((element) => {
  element.addEventListener("click", () => {
    crt.classList.remove("off");
    crtOn.forEach((element) => {
      element.classList.add("active");
    });
    crtOff.forEach((element) => {
      element.classList.remove("active");
    });
  });
});

crtOff.forEach((element) => {
  element.addEventListener("click", () => {
    crt.classList.add("off");
    crtOff.forEach((element) => {
      element.classList.add("active");
    });
    crtOn.forEach((element) => {
      element.classList.remove("active");
    });
  });
});

// CLICK EFFECT SETTING
audioToggleOn.forEach((element) => {
  element.addEventListener("click", () => {
    audioToggleOff.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
    clickSound.volume = 1;
  });
});

audioToggleOff.forEach((element) => {
  element.addEventListener("click", () => {
    audioToggleOn.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
    clickSound.volume = 0;
  });
});
