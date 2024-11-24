const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

// ====== First way ======

// const gallery = document.querySelector(".gallery");
// gallery.style.padding = "0";
// gallery.style.display = "flex";
// gallery.style.flexWrap = "wrap";
// gallery.style.columnGap = "24px";
// gallery.style.rowGap = "48px";
// gallery.style.listStyleType = "none";

// for (const image of images) {
//   const imgEl = document.createElement("img");
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.style.width = "100%";
//   imgEl.style.height = "100%";
//   imgEl.style.objectFit = "cover";

//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item-image");
//   // itemEl.style.width = "360px";
//   itemEl.style.width = "calc((100% - 48px) / 3)";
//   itemEl.append(imgEl);

//   gallery.append(itemEl);
// }

// ====== or ======

// const gallery = document.querySelector(".gallery");
// gallery.style.padding = "0";
// gallery.style.display = "flex";
// gallery.style.flexWrap = "wrap";
// gallery.style.columnGap = "24px";
// gallery.style.rowGap = "48px";
// gallery.style.listStyleType = "none";
// const pictures = images.map((image) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item-img");
//   // itemEl.style.width = "360px";
//   itemEl.style.width = "calc((100% - 48px) / 3)";

//   const imgEl = document.createElement("img");
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.style.width = "100%";
//   imgEl.style.height = "100%";
//   imgEl.style.objectFit = "cover";
//   itemEl.append(imgEl);
//   return itemEl;
// });
// gallery.append(...pictures);

// ====== Second way ======

const gallery = document.querySelector(".gallery");
gallery.style.padding = "0";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.columnGap = "24px";
gallery.style.rowGap = "48px";
gallery.style.listStyleType = "none";

const markup = images
  .map((image) => `<li><img src = ${image.url} alt = ${image.alt}></li>`)
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

const galItems = gallery.querySelectorAll("li");
galItems.forEach((li) => {
  // li.style.width = "360px";
  li.style.width = "calc((100% - 48px) / 3)";

  const img = li.querySelector("img");
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
});
