import { API_HOST_URL } from "/FED1-PE1-gydalo/shared/constants.mjs";

// From https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s

const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerURL = API_HOST_URL + action;
    const body = JSON.stringify(profile);

   const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    });

    const result = await response.json();
    alert("You are now registered");
    console.log(result);

    window.location.href = "/FED1-PE1-gydalo/account/login.html";
}