import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGal = document.querySelector(`.gallery`);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
       <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join(``);
}

const test = createGallery(galleryItems);
ulGal.insertAdjacentHTML("afterbegin", test);
console.log(galleryItems);
