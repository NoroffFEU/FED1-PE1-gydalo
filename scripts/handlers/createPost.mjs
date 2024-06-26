
import { createPost } from "/FED1-PE1-gydalo/scripts/api/posts/index.mjs";


export function setCreatePostFormListener () {
    const form = document.querySelector("#createPost");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData.entries());


            if (!formValues.mediaURL) {
                alert("Image URL is required");
                return;
            }
            //
        
            const mediaAsObject = setMediaObject(formValues.mediaURL, formValues.mediaALT);

            const postData = {
                title: formValues.title,
                media: mediaAsObject,
                body: formValues.body, 
            }

            createPost(postData)
                .then(response => {
                    console.log("Post created successfully:", response);
                })
                .catch(error => {
                    console.error("Error creating post:", error);
                });
        });
    }
}

export function stringToArray(inputString) {
    return inputString.trim().split(",").map(item => item.trim());
  }
  
  export function setMediaObject(stringUrl, stringAlt) {
   const media = {
      url: stringUrl,
      alt: stringAlt
    }
    return media; 
  }