import { API_POST_BASE } from "/FED1-PE1-gydalo/shared/constants.mjs";
import { authFetch } from "/FED1-PE1-gydalo/shared/authFetch.mjs";

// From https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s

const method = "delete";

export async function removePost(id) {
    if (!id){
        throw new Error("Delete requires a post ID");
    }
    
    const deletePostURL = `${API_POST_BASE}/${id}`;

    const response = await authFetch(deletePostURL, {
        method
    })

    
    alert("You have deleted the post");

    window.location.href = "/FED1-PE1-gydalo/index.html";


}


