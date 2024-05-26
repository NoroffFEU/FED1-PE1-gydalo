import { API_POST_BASE } from "../../shared/constants.mjs";
import { authFetch } from "../../shared/authFetch.mjs";

const method = "put";

export async function updatePost(postData) {
    if (!postData.id){
        throw new Error("Update requires a post ID");
    }
    const updatePostURL = `${API_POST_BASE}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body:JSON.stringify(postData)
    })

    if (response.ok) {
        alert("Post updated successfully!");
        window.location.href = "../../../index.html";
    } else {
        alert("Failed to update the post");
    }

    return await response.json();
}


