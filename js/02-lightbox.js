import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((imgs) => {

    let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="${imgs.original}">
            <img
                class="gallery__image"
                src="${imgs.preview}"
                alt="${imgs.description}"
            />
        </a>
    </li>
    `;
    gallery.innerHTML += li;
});


const resultImg = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250});
resultImg.on("show.simplelightbox");    
    
