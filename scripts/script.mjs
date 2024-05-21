

/* Probably wrong
const BASE_API_URL = 'https://v2.api.noroff.dev/blog/posts/';

// Fetch
fetch('https://v2.api.noroff.dev/blog/posts/Oliver')
    .then(res => console.log(res))
    .catch(error => console.log(error)); */


    import { setRegisterFormListener } from "../account/register.mjs";
    import { setLoginFormListener } from "../account/login.mjs";
    import * as post from "./api/posts/index.mjs";


    const path = location.pathname;

    if (path === '/account/login.html') {
        setLoginFormListener()
    } else if (path === '/account/register.html') {
        setRegisterFormListener()
    };


   /* post.createPost();
    post.updatePost();
    post.removePost();
    post.getPost().then(console.log); 
   post.getPosts().then(console.log);  */




// Blog Post Carousel HomePage
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

