// CONSTANTS
const app = document.querySelector(".app");

// FOCUS APP
app.addEventListener("click", () => {
  windowFocus.classList.remove("window_focus");
  appFocus.classList.remove("app_focus");
  let targetID = app.id;
  let application = document.querySelectorAll(`.${targetID}`);
  application[0].classList.add("window_focus", "active");
  application[1].classList.add("app_focus");
});
