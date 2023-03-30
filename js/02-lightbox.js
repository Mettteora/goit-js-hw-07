import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGal = document.querySelector(`.gallery`);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
       <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join(``);
}

const test = createGallery(galleryItems);
ulGal.insertAdjacentHTML("afterbegin", test);
console.log(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
