import { LOGIN_URL } from "../shared/constants.mjs";

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