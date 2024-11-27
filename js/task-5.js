// ====== Stylization ======
const bodyTag = document.querySelector("body");
bodyTag.style.backgroundColor = "transparent";
bodyTag.style.display = "flex";
bodyTag.style.flexDirection = "column";
bodyTag.style.justifyContent = "center";
bodyTag.style.alignItems = "center";

const widget = document.querySelector(".widget");
widget.style.width = "345px";
widget.style.height = "280px";
widget.style.borderRadius = "8px";
widget.style.display = "flex";
widget.style.flexDirection = "column";
widget.style.justifyContent = "center";
widget.style.alignItems = "center";
widget.style.gap = "16px";
widget.style.fontFamily = "'Montserrat', sans-serif";
widget.style.fontWeight = "400";
widget.style.fontSize = "16px";
widget.style.lineHeight = "1.5";
widget.style.letterSpacing = "0.04em";
widget.style.color = "#2e2f42";
widget.style.backgroundColor = "white";

const colDescr = widget.querySelector("p");
colDescr.style.margin = "0";

const span = widget.querySelector(".color");

const button = widget.querySelector(".change-color");
button.style.backgroundColor = " #4e75ff";
button.style.display = "flex";
button.style.alignItems = "center";
button.style.justifyContent = "center";
button.style.flexDirection = "row";
button.style.borderRadius = "8px";
button.style.padding = "8px 16px";
button.style.minWidth = "148px";
button.style.minHeight = "40px";
button.style.color = "#fff";
button.style.fontWeight = "500";
button.style.border = "none";
button.style.fontSize = "16px";
button.style.lineHeight = "1.5";
button.style.letterSpacing = "0.04em";

button.addEventListener("mouseover", (event) => {
  button.style.backgroundColor = "#6c8cff";
  button.style.cursor = "pointer";
});
button.addEventListener("mouseout", (event) => {
  button.style.backgroundColor = "#4e75ff";
  button.style.cursor = "default";
});
button.addEventListener("mousedown", (event) => {
  button.style.transform = "scale(0.95)";
  button.style.boxShadow = "inset 0 4px 8px rgba(0, 0, 0, 0.2)";
});
button.addEventListener("mouseup", (event) => {
  button.style.transform = "scale(1)";
  button.style.boxShadow = "none";
});

// ====== Script ======
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  bodyTag.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
