const bodyTag = document.querySelector("body");
bodyTag.style.backgroundColor = "none";
bodyTag.style.display = "flex";
bodyTag.style.flexDirection = "column";
bodyTag.style.justifyContent = "center";
bodyTag.style.alignItems = "center";

const catList = document.querySelector("#categories");
catList.style.listStyleType = "none";
catList.style.margin = "0 auto";
catList.style.padding = "0";

const catItems = categories.querySelectorAll(".item");
console.log(`Number of categories: ${catItems.length}`);
catItems.forEach((category) => {
  category.style.backgroundColor = "#f6f6fe";
  category.style.display = "flex";
  category.style.alignItems = "flex-start";
  category.style.justifyContent = "flex-start";
  category.style.flexDirection = "column";
  category.style.gap = "16px";
  category.style.borderRadius = "8px";
  category.style.width = "392px";
  category.style.padding = "16px";
  category.style.margin = "24px";

  const catName = category.querySelector("h2");
  console.log(`Category: ${catName.textContent}`);

  catName.style.fontFamily = "'Montserrat', sans-serif";
  catName.style.lineHeight = "1.3";
  catName.style.fontWeight = "600";
  catName.style.fontSize = "24px";
  catName.style.letterSpacing = "0.04em";
  catName.style.color = "#2e2f42";
  catName.style.margin = "0";

  const catSubList = category.querySelector("ul");
  console.log(`Elements: ${catSubList.children.length}`);

  catSubList.style.listStyleType = "none";
  catSubList.style.padding = "0";
  catSubList.style.display = "flex";
  catSubList.style.flexDirection = "column";
  catSubList.style.gap = "8px";

  const subItems = catSubList.querySelectorAll("li");
  subItems.forEach((subItem) => {
    subItem.style.border = "1px solid #808080";
    subItem.style.borderRadius = "4px";
    subItem.style.minWidth = "360px";
    subItem.style.minHeight = "40px";

    subItem.style.padding = "8px 16px";

    subItem.style.fontFamily = "'Montserrat', sans-serif";
    subItem.style.fontWeight = "400";
    subItem.style.fontSize = "16px";
    subItem.style.lineHeight = "1.5";
    subItem.style.letterSpacing = "0.04em";
    subItem.style.color = "#2e2f42";
  });
});
