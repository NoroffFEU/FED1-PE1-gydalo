import { API_POST_BASE } from "../../../shared/constants.mjs";
import { authFetch } from "../../../shared/authFetch.mjs";


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

    window.location.href = "index.html";


}


