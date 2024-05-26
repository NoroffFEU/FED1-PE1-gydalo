import { API_POST_BASE } from "/shared/constants.mjs";
import { authFetch } from "/shared/authFetch.mjs";


export async function getPosts() {
    const updatePostURL = `${API_POST_BASE}`;

    try {
        const response = await authFetch(updatePostURL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}


export async function getPost(id) {
    if (!id){
        throw new Error("Get post requires a post ID");
    }

    const getPostURL = `${API_POST_BASE}/${id}`;

    const response = await authFetch(getPostURL, {
        
    })

    const result = await response.json();
    const post = result.data;
    return post;
}

