import { API_HOST_URL } from "/FED1-PE1-gydalo/shared/constants.mjs";
import * as storage from "/FED1-PE1-gydalo/account/storage.mjs"


// From https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_HOST_URL + action;
    const body = JSON.stringify(profile);
    try {
        const response = await fetch(loginURL, {
            headers: {
                "Content-Type": "application/json"
            },
            method,
            body
        });

        if (!response.ok) {
            throw new Error("Username or password is incorrect");
        }

    const jsonResponse = await response.json();
    const { accessToken, ...user } = jsonResponse.data; 

    storage.save("token", accessToken);
    storage.save("profile", user);

    alert("You are now logged in");

    window.location.href = "/FED1-PE1-gydalo/index.html";
} catch (error) {
    alert("Wrong username or password");
}

}