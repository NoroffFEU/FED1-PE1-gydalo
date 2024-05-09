import { doFetch } from "../doFetch.mjs";
import { LOGIN_URL } from "../shared/constants.mjs";

const loginForm = document.querySelector('#login-form');

// Martins stream 13.02.24
loginForm.addEventListener('submit', (event) => {
event.preventDefault();
const name = event.target[0].value;
const email = event.target[1].value;
const password = event.target[2].value;
loginUser(name, email, password);
});

async function loginUser(name, email, password) {
    console.log('Login user');
    await doFetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify({
            name,
            email, 
            password,
        }),
    });
};