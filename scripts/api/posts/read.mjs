import { API_SOCIAL_URL } from "../../../shared/constants.mjs";
import { authFetch } from "../../../shared/authFetch.mjs";

const action = "/posts";

export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(updatePostURL)

    return await response.json();
}

export async function getPost(id) {
    if (!id){
        throw new Error("Get post requires a post ID");
    }

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await authFetch(getPostURL)

    return await response.json();
}


