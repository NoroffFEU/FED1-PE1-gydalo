import { doFetch } from "../doFetch.mjs";
import { REGISTER_URL } from "../shared/constants.mjs";

const registerForm = document.querySelector('#register-form');

// Martins stream 13.02.24
registerForm.addEventListener('submit', (event) => {
event.preventDefault();
const name = event.target[0].value;
const email = event.target[1].value;
const password = event.target[2].value;
registerUser(name, email, password);
});

async function registerUser(name, email, password) {
    console.log('Register user');
    await doFetch(REGISTER_URL, {
        method: 'POST',
        body: JSON.stringify({
            name,
            email, 
            password,
        }),
    });
};