
import { register } from "/FED1-PE1-gydalo/scripts/api/auth/register.mjs";

// From https://www.youtube.com/watch?v=rLAGHFr8bvU&t=2306s

export function setRegisterFormListener () {
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
        
            register(profile)
        });
    }
}