import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((imgs) => {

    let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="javascript:void(0)">
            <img
                class="gallery__image"
                src="${imgs.preview}"
                data-source="${imgs.original}"
                alt="${imgs.description}"
            />
        </a>
    </li>
    `;
    gallery.innerHTML += li;
});

gallery.addEventListener("click", (e) => {
    console.log ("You clicked an image!");
    if(e.target.tagName === "IMG"){
        console.log (e.target);
         let origImg = e.target.getAttribute("data-source");
         let resultImg = basicLightbox.create(`<img src="${origImg}" />`);
         resultImg.show();  
    }
});
