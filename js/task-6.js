// ====== Stylization ======
const bodyTag = document.querySelector("body");
bodyTag.style.backgroundColor = "none";
bodyTag.style.display = "flex";
bodyTag.style.flexDirection = "column";
bodyTag.style.justifyContent = "center";
bodyTag.style.alignItems = "center";
bodyTag.style.fontWeight = "500";
bodyTag.style.fontSize = "16px";
bodyTag.style.lineHeight = "1.5";
bodyTag.style.letterSpacing = "0.04em";

const controls = bodyTag.querySelector("#controls");
controls.style.backgroundColor = "#f6f6fe";
controls.style.display = "flex";
controls.style.justifyContent = "center";
controls.style.gap = "16px";
controls.style.width = "486px";
controls.style.height = "104px";
controls.style.borderRadius = "8px";
controls.style.padding = "32px";
controls.style.marginBottom = "16px";

const input = controls.querySelector("input");
input.style.backgroundColor = "#f6f6fe";
input.style.border = "1px solid #808080";
input.style.borderRadius = "8px";
input.style.width = "150px";
input.style.height = "40px";
input.style.outline = "none";
input.style.padding = "8px 16px";

input.addEventListener("focus", () => (input.style.borderColor = "#000"));
input.addEventListener("blur", () => (input.style.borderColor = "#808080"));

const createBtn = controls.querySelector("button[data-create]");
createBtn.style.backgroundColor = "#4e75ff";
createBtn.style.display = "flex";
createBtn.style.alignItems = "center";
createBtn.style.justifyContent = "center";
createBtn.style.flexDirection = "row";
createBtn.style.gap = "10px";
createBtn.style.borderRadius = "8px";
createBtn.style.padding = "8px 16px";
createBtn.style.width = "120px";
createBtn.style.height = "40px";
createBtn.style.fontFamily = "'Montserrat', sans-serif";
createBtn.style.fontWeight = "500";
createBtn.style.fontSize = "16px";
createBtn.style.lineHeight = "1.5";
createBtn.style.letterSpacing = "0.04em";
createBtn.style.color = "#fff";
createBtn.style.border = "none";

createBtn.addEventListener("mouseover", (event) => {
  createBtn.style.backgroundColor = "#6c8cff";
  createBtn.style.cursor = "pointer";
});
createBtn.addEventListener("mouseout", (event) => {
  createBtn.style.backgroundColor = "#4e75ff";
  createBtn.style.cursor = "default";
});
createBtn.addEventListener("mousedown", (event) => {
  createBtn.style.transform = "scale(0.95)";
  createBtn.style.boxShadow = "inset 0 4px 8px rgba(0, 0, 0, 0.2)";
});
createBtn.addEventListener("mouseup", (event) => {
  createBtn.style.transform = "scale(1)";
  createBtn.style.boxShadow = "none";
});

const destroyBtn = controls.querySelector("button[data-destroy]");
destroyBtn.style.backgroundColor = "#ff4e4e";
destroyBtn.style.display = "flex";
destroyBtn.style.alignItems = "center";
destroyBtn.style.justifyContent = "center";
destroyBtn.style.flexDirection = "row";
destroyBtn.style.gap = "10px";
destroyBtn.style.borderRadius = "8px";
destroyBtn.style.padding = "8px 16px";
destroyBtn.style.width = "120px";
destroyBtn.style.height = "40px";
destroyBtn.style.fontFamily = "'Montserrat', sans-serif";
destroyBtn.style.fontWeight = "500";
destroyBtn.style.fontSize = "16px";
destroyBtn.style.lineHeight = "1.5";
destroyBtn.style.letterSpacing = "0.04em";
destroyBtn.style.color = "#fff";
destroyBtn.style.border = "none";

destroyBtn.addEventListener("mouseover", (event) => {
  destroyBtn.style.backgroundColor = "#d84343";
  destroyBtn.style.cursor = "pointer";
});
destroyBtn.addEventListener("mouseout", (event) => {
  destroyBtn.style.backgroundColor = "#ff4e4e";
  destroyBtn.style.cursor = "default";
});
destroyBtn.addEventListener("mousedown", (event) => {
  destroyBtn.style.transform = "scale(0.95)";
  destroyBtn.style.boxShadow = "inset 0 4px 8px rgba(0, 0, 0, 0.2)";
});
destroyBtn.addEventListener("mouseup", (event) => {
  destroyBtn.style.transform = "scale(1)";
  destroyBtn.style.boxShadow = "none";
});

const boxes = document.querySelector("#boxes");
boxes.style.backgroundColor = "#f6f6fe";
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.justifyContent = "center";
boxes.style.gap = "44px";
boxes.style.minWidth = "486px";
boxes.style.minHeight = "134px";
boxes.style.borderRadius = "8px";
boxes.style.padding = "32px";

// ====== Script ======

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    let width = 30;
    let height = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      box.style.backgroundColor = getRandomHexColor();

      width += 10;
      height += 10;

      boxes.append(box);
    }
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

let amount = 0;
input.addEventListener("input", (event) => {
  amount = parseInt(event.currentTarget.value);
});

createBtn.addEventListener("click", (event) => {
  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", (event) => destroyBoxes());

createBoxes(amount);
