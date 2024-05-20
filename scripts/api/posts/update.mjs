import { API_SOCIAL_URL } from "../../../shared/constants.mjs";
import { authFetch } from "../../../shared/authFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
    if (!postData.id){
        throw new Error("Update requires a post ID");
    }
    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body:JSON.stringify(postData)
    })

    return await response.json();
}


