// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';


// Change code below this line
const listGallery = document.querySelector('.gallery');

const createItems = galleryItems
    .map(({ preview, original, description }) => {
        return `<div>
                    <a class="gallery__item" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            alt="${description}"
                        />
                    </a>
                </div>`
    }).join("");

listGallery.insertAdjacentHTML("afterbegin", createItems);
const cb = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return false;
        const sourceImg = event.target.dataset.source;
        // console.log(sourceImg);
    };
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', animationSpeed: "250ms" });
lightbox.close();

listGallery.addEventListener('click', cb);

console.log(galleryItems);



// const titleBooks = JSON.parse(localStorage.getItem("titleBooks") || '[]')
// const listEl = document.querySelector('ul')

// function renderMarkup(titles) {
//     const liesEl = titles.map(title => {
//     return `<li>${title}</li>`
//   }).join('')
//   listEl.innerHTML = liesEl;
// }
// renderMarkup(titleBooks)