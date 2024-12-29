// CONSTANTS
const windowTop = document.querySelectorAll(".window_top");
const body = document.querySelector("body");

// MOVE WINDOWS
windowTop.forEach((element) => {
  element.addEventListener("mousedown", (event) => {
    let currentPosX = 0,
      currentPosY = 0,
      prevPosX = 0,
      prevPosY = 0;
    event.preventDefault();
    prevPosX = event.clientX;
    prevPosY = event.clientY;
    let targetW = event.currentTarget.parentElement;
    body.onmousemove = (event) => {
      event.preventDefault();
      currentPosX = prevPosX - event.clientX;
      currentPosY = prevPosY - event.clientY;
      prevPosX = event.clientX;
      prevPosY = event.clientY;
      targetW.style.top = targetW.offsetTop - currentPosY + "px";
      targetW.style.left = targetW.offsetLeft - currentPosX + "px";
    };
    body.onmouseup = () => {
      body.onmouseup = null;
      body.onmousemove = null;
    };
  });
});
