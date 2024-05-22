

/* Probably wrong
const BASE_API_URL = 'https://v2.api.noroff.dev/blog/posts/';

// Fetch
fetch('https://v2.api.noroff.dev/blog/posts/Oliver')
    .then(res => console.log(res))
    .catch(error => console.log(error)); */


    import { setRegisterFormListener } from "../account/register.mjs";
    import { setLoginFormListener } from "../account/login.mjs";

    import * as templates from "./templates/index.mjs";
    import * as postMethods from "./api/posts/index.mjs"
    import { renderPostTemplate } from "./templates/index.mjs";


    const path = location.pathname;

    if (path === '/account/login.html') {
        setLoginFormListener()
    } else if (path === '/account/register.html') {
        setRegisterFormListener()
    };

    async function testTemplate() {
        const posts = await postMethods.getPosts();
        const post = posts.pop()
        const container = document.querySelector("#post");
        renderPostTemplate(post, container);
    }

    testTemplate();

