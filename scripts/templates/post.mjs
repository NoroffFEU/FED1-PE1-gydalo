//import { API_POST_BASE } from "../../shared/constants.mjs";

import { getPosts } from "../api/posts/read.mjs";
import { extractIdFromUrl } from "../script.mjs"; 

import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs"


export function postTemplate(postData) {
    const title = document.createElement("h3");
    title.innerText = postData.title;

    const heading = document.createElement("div");
    heading.classList.add("post-heading");
    heading.append(title);

    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("media-container");
    const media = document.createElement("img");
    media.setAttribute("src", postData.media.url);
    media.alt = `Image from ${postData.title}`;

    media.addEventListener("click", () => {
        const targetUrl = `/post/index.html?id=${postData.id}`;
        console.log(`Navigating to: ${targetUrl}`);
        window.location.href = targetUrl;
    });

    mediaContainer.appendChild(media);

    const body = document.createElement("p");
    body.innerText = postData.body;

    const post = document.createElement("div");
    post.classList.add("post");
    post.append(heading, mediaContainer, body);
    return post;
}


export function renderPostsTemplate(posts){
    const postsHomePage = document.querySelector("#postsHomePage");
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


async function blogPageTemplate() {
    const postId = extractIdFromUrl();

    if (!postId) {
        console.error("No post ID found in URL");
        return;
    }

    try {
        const post = await postMethods.getPost(postId);
        const container = document.querySelector("#post");
        if (container) {
            templates.renderSinglePostTemplate(post, container);
        } else {
            console.error("No container found with the selector #post");
        }
    } catch (error) {
        console.error("Failed to fetch and render post:", error);
    }
}

blogPageTemplate();
