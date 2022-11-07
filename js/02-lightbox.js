import { galleryItems } from './gallery-items.js';
// Change code below this line

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


const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });
