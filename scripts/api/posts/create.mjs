import { API_POST_BASE } from "/FED1-PE1-gydalo/shared/constants.mjs";
import { authFetch } from "/FED1-PE1-gydalo/shared/authFetch.mjs";


const method = "post";

export async function createPost(postData) {
    const createPostURL = API_POST_BASE;

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })
    
    if (response.ok) {
        alert("Post created successfully!");
        window.location.href = "/FED1-PE1-gydalo/index.html";
    } else {
        alert("Failed to create the post");
    }
    return await response.json();


}

// why isnt it updating


    
