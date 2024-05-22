

/* Probably wrong
const BASE_API_URL = 'https://v2.api.noroff.dev/blog/posts/';

// Fetch
fetch('https://v2.api.noroff.dev/blog/posts/Oliver')
    .then(res => console.log(res))
    .catch(error => console.log(error)); */


    import * as listeners from "./handlers/index.mjs"
    import * as templates from "./templates/index.mjs";
    import * as postMethods from "./api/posts/index.mjs"


    const path = location.pathname;

    if (path === '/account/login.html') {
        listeners.setLoginFormListener()
    } else if (path === '/account/register.html') {
        listeners.setRegisterFormListener()
    } else if (path === "/post/create.html") {
        listeners.setCreatePostFormListener()
    } else if (path === "/post/edit.html") {
        listeners.setUpdatePostFormListener()
    };

    /*async function testTemplate() {
        const posts = await postMethods.getPosts();
        const container = document.querySelector("#post");
        templates.renderPostTemplates(posts, container);
    }

    testTemplate(); */

