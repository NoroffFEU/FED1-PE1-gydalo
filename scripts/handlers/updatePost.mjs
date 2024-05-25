
import { getPost, updatePost } from "../api/posts/index.mjs";
import { setMediaObject } from "./createPost.mjs";


export async function setUpdatePostFormListener () {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (!id) {
        console.error("No post ID found in URL");
        return;
    }

    if (form) {
        const button = form.querySelector("button");
        if (button) button.disabled = true;

        try {
            const post = await getPost(id);

            if (post) {
                form.title.value = post.title || "";
                form.body.value = post.body || "";
                form.mediaURL.value = post.media.url || "";
                form.mediaALT.value = post.media.alt || "";

                if (button) button.disabled = false;

                form.addEventListener("submit", async (event) => {
                    event.preventDefault();
                    const form = event.target;
                    const formData = new FormData(form);
                    const formValues = Object.fromEntries(formData.entries());

             
                    if (!formValues.mediaURL) {
                        alert("Image URL is required");
                        return;
                    }

                    const postData = {
                        id: id, 
                        title: formValues.title,
                        media: mediaAsObject,
                        body: formValues.body,
                    };

                    console.log("Post Data:", postData);

                    try {
                        const response = await updatePost(postData);
                        console.log("Post updated successfully:", response);
                    } catch (error) {
                        console.error("Error updating post:", error);
                    }
                });
            } else {
                console.error("Post not found");
            }
        } catch (error) {
            console.error("Failed to fetch post:", error);
        }
    } else {
        console.error("Form with the selector #updatePost not found");
    }
}

export function mediaAsObject (stringUrl, stringAlt) {
    const media = {
        url: stringUrl,
        alt: stringAlt
    };
    return media;
}

setUpdatePostFormListener();