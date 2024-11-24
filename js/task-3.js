const input = document.querySelector("#name-input");
input.style.width = "360px";
input.style.height = "40px";
input.style.border = "1px solid #808080";
input.style.borderRadius = "4px";
input.style.padding = "8px 16px";
input.style.fontFamily = "'Montserrat', sans-serif";
input.style.fontWeight = "400";
input.style.fontSize = "16px";
input.style.lineHeight = "1.5";
input.style.letterSpacing = "0.04em";
input.style.color = "#2e2f42";

const output = document.querySelector("h1");
output.style.fontFamily = "'Montserrat', sans-serif";
output.style.fontWeight = "600";
output.style.fontSize = "24px";
output.style.lineHeight = "1.3";
output.style.letterSpacing = "0.04em";
output.style.color = "#2e2f42";

const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() !== "") {
    span.textContent = event.currentTarget.value.trim();
  }
});

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.trim() === "") {
    span.textContent = "Anonymous";
  }
});
