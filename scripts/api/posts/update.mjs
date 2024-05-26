import { API_POST_BASE } from "/FED1-PE1-gydalo/shared/constants.mjs";
import { authFetch } from "/FED1-PE1-gydalo/shared/authFetch.mjs";

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
        window.location.href = "/FED1-PE1-gydalo/index.html";
    } else {
        alert("Failed to update the post");
    }

    return await response.json();
}

