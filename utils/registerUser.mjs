import { REGISTER_URL } from "../shared/constants.mjs";

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