


    import * as listeners from "handlers/index.mjs"
    import * as templates from "templates/index.mjs";
    import * as postMethods from "api/posts/index.mjs"
    import { getPosts } from "api/posts/index.mjs";


    const path = location.pathname;

    if (path === 'account/login.html') {
        listeners.setLoginFormListener()
    } else if (path === 'account/register.html') {
        listeners.setRegisterFormListener()
    } else if (path === "post/create.html") {
        listeners.setCreatePostFormListener()
    } else if (path === "post/edit.html") {
        listeners.setUpdatePostFormListener()
    };

    getPosts();

    //renderPosts();

    
    async function homePageTemplate() {
            try {
                const posts = await postMethods.getPosts();
                const container = document.querySelector("#postsHomePage");
                if (container) {
                    templates.renderPosts(posts, container);
                } else {
                    if (window.location.pathname === "index.html")
                    console.error("Container with ID 'postsHomePage' not found.");
                }
            } catch (error) {
                console.error("Error fetching or rendering posts:", error);
            }
        }

       homePageTemplate(); 

// Dont know what this is
        /*
        const posts = await postMethods.getPosts();
        const container = document.querySelector("#postsHomePage");
        templates.renderPostTemplates(posts, container); */
    

   // homePageTemplate(); 

/*
    function extractIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    async function blogPageTemplate() {
        const postId = extractIdFromUrl();
    
        if (!postId) {
            console.error("No post ID found in URL");
            return;
        }
    
        try {
            const post = await postMethods.getPost(postId);
            const container = document.querySelector("#post");
            templates.renderPostsTemplate(post, container);
        } catch (error) {
            console.error("Failed to fetch and render post:", error);
        }
    }
    
    blogPageTemplate(); */


    export function extractIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }
    


    function load(key) {
        return localStorage.getItem(key); 
    }
    
    function isLoggedIn() {
        const token = load("token"); 
        return !!token;
    }

    function renderRemoveButton() {
        if (window.location.pathname === "post/index.html" && isLoggedIn()) {
            const container = document.querySelector("#deleteButton");
            const id = extractIdFromUrl(); 
    
            if (container, id) { 
                const button = document.createElement("button");
                button.innerText = "Delete Post";
                button.addEventListener("click", () => {
                    postMethods.removePost(id);
                });
    
                container.appendChild(button);
            } else {
                if (!container) {
                    console.error("No container found with the selector #deleteButton");
                }
                if (!id) {
                    console.error("No post ID found in URL");
                }
            }
        }
    }
    
renderRemoveButton(); 
    
    function renderEditButton() {
        if (window.location.pathname === "post/index.html" && isLoggedIn()) {
            const container = document.querySelector("#editButton");
            const id = extractIdFromUrl(); 
    
            if (container, id) { 
                const button = document.createElement("button");
                button.innerText = "Edit Post";
                button.addEventListener("click", () => {
                    window.location.href = `post/edit.html?id=${id}`;
                });
                container.appendChild(button);
            }
        }
    }
    
renderEditButton(); 

function renderCreateButton() {
    if (isLoggedIn()) {
        const container = document.querySelector("#createButton");

        if (container) { 
            const button = document.createElement("button");
            button.innerText = "Create new Post";
            button.addEventListener("click", () => {
                window.location.href = `post/create.html`;
            });
            
            container.appendChild(button);
        }
    }
}

renderCreateButton();




function logOut() {
    if (isLoggedIn()) {
        const container = document.querySelector("#logOutButton");

    if (container) {
        const button = document.createElement("button");
        button.innerText = "Logout";
        button.addEventListener("click", () => {
            localStorage.clear();

            alert("You are now logged out");
            window.location.href = "index.html";
        });

        container.appendChild(button);
    }
}
}


logOut();



function loginButtonNotLoggedIn() {
    if (isLoggedIn()) {
    } else {
        const container = document.querySelector("#notLoggedIn");

        if (container) { 
            const buttonLogin = document.createElement("button");
            buttonLogin.innerText = "Login";
            buttonLogin.addEventListener("click", () => {
                window.location.href = `account/login.html`;

            });
            container.appendChild(buttonLogin);
        }
        
}
}

loginButtonNotLoggedIn();

function registerButtonNotLoggedIn() {
    if (isLoggedIn()) {
    } else {
        const container = document.querySelector("#notLoggedIn");

        if (container) { 
            const buttonRegister = document.createElement("button");
            buttonRegister.innerText = "Register";
            buttonRegister.addEventListener("click", () => {
                window.location.href = `account/register.html`;

            });
            container.appendChild(buttonRegister);
        }
        
}
}

registerButtonNotLoggedIn();


//     localStorage.clear();


// TEST //
/*
async function blogPageTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container);
}

blogPageTemplate(); */





/*
     async function testTemplate() {
        const posts = await postMethods.getPosts();
        const container = document.querySelector("#post");
        templates.renderPostTemplates(post, container);
    }

    testTemplate(); 
  
*/