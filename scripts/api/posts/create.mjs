import { API_SOCIAL_URL } from "../../../shared/constants.mjs";
import { authFetch } from "../../../shared/authFetch.mjs";


const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();

}



/*
    
import * as posts from "./api/posts/index.mjs";

posts.createPost();

posts.readPosts();

posts.readPosts(); */
