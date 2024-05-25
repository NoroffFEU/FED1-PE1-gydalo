import { API_HOST_URL } from "../../../shared/constants.mjs";
import * as storage from "../../../account/storage.mjs"


// From https://www.youtube.com/watch?v=rLAGHFr8bvU
const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_HOST_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    });

    const jsonResponse = await response.json();
    const { accessToken, ...user } = jsonResponse.data; // Extract the accessToken from the nested data object

    storage.save("token", accessToken);
    storage.save("profile", user);

    alert("You are now logged in");

    window.location.href = "/index.html";
}

// So instead of accessing response.token for example, you can do a middle step like so: result = response.data which means token = result.token