import { getPosts } from "./api/posts/read.mjs"

async function fetchPosts() {
    try {
        const postList = await getPosts();
        return postList.data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}

function createCarouselItem(post, isActive = false) {
    const li = document.createElement('li');
    li.classList.add('slide');
    if (isActive) {
        li.dataset.active = true;
    }

    const img = document.createElement('img');
    img.src = post.media.url;
    img.alt = post.media.alt || 'Blog post image';

    const title = document.createElement('h3');
    title.innerText = post.title;

    const body = document.createElement('p');
    body.innerText = post.body;

    li.appendChild(img);
    //li.appendChild(title);
    //li.appendChild(body);

    return li;
}

async function initializeCarousel() {
    const posts = await fetchPosts();
    const slidesContainer = document.querySelector('[data-slides]');
    slidesContainer.innerHTML = ''; 

    posts.forEach((post, index) => {
        const isActive = index === 0; 
        const carouselItem = createCarouselItem(post, isActive);
        slidesContainer.appendChild(carouselItem);
    });

    const buttons = document.querySelectorAll("[data-carousel-button]");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector('[data-slides]');

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
}

initializeCarousel();

// Blog Post Carousel HomePage

/*
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
    .closest("[data-carousel]")
    .querySelector('[data-slides]')

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
});

*/