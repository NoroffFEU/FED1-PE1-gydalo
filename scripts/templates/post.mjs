//import { API_POST_BASE } from "../../shared/constants.mjs";

import { getPosts } from "/FED1-PE1-gydalo/scripts/api/posts/read.mjs";
import { extractIdFromUrl } from "/FED1-PE1-gydalo/scripts/script.mjs"; 
import * as templates from "/FED1-PE1-gydalo/scripts/templates/index.mjs";
import * as postMethods from "/FED1-PE1-gydalo/scripts/api/posts/index.mjs"



export function postTemplate(postData) {
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("media-container");

    const media = document.createElement("img");
    media.setAttribute("src", postData.media.url);
    media.alt = `Image from ${postData.title}`;

if (window.location.pathname === "/FED1-PE1-gydalo/index.html") {
    const titleOverlay = document.createElement("div");
    titleOverlay.classList.add("title-overlay");
    titleOverlay.innerText = postData.title;
   
    mediaContainer.appendChild(titleOverlay);
}

    mediaContainer.addEventListener("click", () => {
        const targetUrl = `/FED1-PE1-gydalo/post/index.html?id=${postData.id}`;
        console.log(`Navigating to: ${targetUrl}`);
        window.location.href = targetUrl;
    });

    mediaContainer.appendChild(media);



    const title = document.createElement("h2");
    title.innerText = postData.title;

    const heading = document.createElement("div");
    heading.classList.add("post-heading");
    heading.append(title);

    const body = document.createElement("p");
    body.innerText = postData.body;

    const created = document.createElement("p");
    created.innerText = `Created: ${postData.created}`;

    const updated = document.createElement("p");
    updated.innerText = `Last updated: ${postData.updated}`;

    const author = document.createElement("p");
    author.innerText = `Author: ${postData.author.name}`;

    if (window.location.pathname === "/FED1-PE1-gydalo/index.html") {
        body.style.display = "none";
        title.style.display = "none";
        author.style.display = "none";
        created.style.display = "none";
        updated.style.display = "none";
    }

    const post = document.createElement("div");
    post.classList.add("post");
    post.append(mediaContainer, heading, author, created, updated, body);


    return post;
}


export function renderPostsTemplate(posts){
    const postsHomePage = document.querySelector("#postsHomePage");
    postsHomePage.innerHTML = '';
    posts.forEach(post => {
       
       postsHomePage.appendChild(postTemplate(post)); 
    });
}

export async function renderPosts() {
      const postList = await getPosts();
      const posts = postList.data;
      renderPostsTemplate(posts);
}


export function renderSinglePostTemplate(post, container) {
    const postElement = postTemplate(post);
    container.innerHTML = ''; 
    container.appendChild(postElement);
}

async function sortAndRenderPosts(order) {
    const postList = await getPosts();
    const posts = postList.data;

    posts.sort((a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);
        return order === 'newest' ? dateB - dateA : dateA - dateB;
    });

    renderPostsTemplate(posts);
}

if (window.location.pathname === "/FED1-PE1-gydalo/index.html") {
    document.querySelector("#newest-button").addEventListener("click", () => {
        sortAndRenderPosts('newest');
    });

    document.querySelector("#oldest-button").addEventListener("click", () => {
        sortAndRenderPosts('oldest');
    });

    sortAndRenderPosts('newest');
}


async function blogPageTemplate() {
    const postId = extractIdFromUrl();

    if (!postId) {
        if (window.location.pathname === "/FED1-PE1-gydalo/post/index.html")
        console.error("No post ID found in URL");
        return;
    }

    try {
        const post = await postMethods.getPost(postId);
        const container = document.querySelector("#post");
        if (container) {
            renderSinglePostTemplate(post, container);
        } else {
            if (window.location.pathname === "/FED1-PE1-gydalo/post/index.html")
            console.error("No container found with the selector #post");
        }
    } catch (error) {
        console.error("Failed to fetch and render post:", error);
    }
}

if (window.location.pathname === "/FED1-PE1-gydalo/post/index.html") {
blogPageTemplate();
}



