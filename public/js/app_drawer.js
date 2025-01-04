// CONSTANTS
const app = document.querySelectorAll(".app");

// FOCUS APP
app.forEach((element) => {
  element.addEventListener("click", () => {
    windowSelector.forEach((element) => {
      element.classList.remove("window_focus");
    });
    appDrawer.forEach((element) => {
      element.classList.remove("app_focus");
    });
    let targetID = element.id;
    let application = document.querySelectorAll(`.${targetID}`);
    application[0].classList.add("window_focus", "active");
    application[1].classList.add("app_focus");
  });
});
