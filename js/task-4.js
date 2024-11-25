// ====== Stylization ======
const bodyTag = document.querySelector("body");
bodyTag.style.backgroundColor = "none";
bodyTag.style.display = "flex";
bodyTag.style.flexDirection = "column";
bodyTag.style.justifyContent = "center";
bodyTag.style.alignItems = "center";

const form = document.querySelector(".login-form");
form.style.display = "flex";
form.style.alignItems = "flex-start";
form.style.justifyContent = "flex-start";
form.style.flexDirection = "column";
form.style.gap = "8px";
form.style.borderRadius = "8px";
form.style.padding = "24px";
form.style.width = "408px";
form.style.height = "256px";
form.style.background = "#fff";
form.style.fontFamily = "'Montserrat', sans-serif";
form.style.fontWeight = "400";
form.style.fontSize = "16px";
form.style.lineHeight = "1.5";
form.style.letterSpacing = "0.04em";
form.style.color = "#2e2f42";

const labels = form.querySelectorAll("label");
labels.forEach((label) => {
  label.style.display = "flex";
  label.style.flexDirection = "column";

  const input = label.querySelector("input");
  input.style.border = "1px solid #808080";
  input.style.borderRadius = "4px";
  input.style.minWidth = "360px";
  input.style.minHeight = "40px";
  input.style.marginTop = "8px";
  input.style.outline = "none";
  input.style.padding = "8px 16px";

  input.addEventListener("mouseover", (event) => {
    input.style.borderColor = "#000";
  });

  input.addEventListener("mouseout", (event) => {
    input.style.borderColor = "#808080";
  });

  input.addEventListener("input", (event) => {
    input.style.borderColor = "#000";
  });

  input.addEventListener("focus", (event) => {
    input.style.borderColor = "#808080";
  });

  input.addEventListener("blur", (event) => {
    input.style.borderColor = "#808080";
  });
});

const button = form.querySelector("button");
button.style.marginTop = "8px";
button.style.backgroundColor = "#4e75ff";
button.style.display = "flex";
button.style.alignItems = "center";
button.style.justifyContent = "center";
button.style.flexDirection = "row";
button.style.gap = "10px";
button.style.borderRadius = "8px";
button.style.padding = "8px 16px";
button.style.width = "86px";
button.style.height = "40px";
button.style.fontFamily = "'Montserrat', sans-serif";
button.style.fontWeight = "500";
button.style.fontSize = "16px";
button.style.lineHeight = "1.5";
button.style.letterSpacing = "0.04em";
button.style.color = "#fff";
button.style.border = "none";

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

// ====== Form script ======

const dataArr = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  } else {
    dataArr.login = login;
    dataArr.password = password;
  }
  console.log(dataArr);
  form.reset();
});
