import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');


function createGallery(galleryItems){ 
    return galleryItems
    .map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href = ${original}>
        <img 
        class = gallery__image
        src = ${preview}
        alt = ${description}
        data-orig = ${original}
        />
        </a>
        </div>`
    }).join("");
}


gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));


gallery.addEventListener('click', event => {

    event.preventDefault();

    if (event.target.nodeName !== "IMG"){
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.orig}" width="800" height="600">
    `);

    instance.show()

    gallery.addEventListener('click', event => {
        instance.close();
    });

    gallery.addEventListener('keydown', event => {
        if (event.code === 'Escape'){
            instance.close();
        }
    });
});