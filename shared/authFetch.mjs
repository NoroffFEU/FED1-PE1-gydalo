import { load } from "/FED1-PE1-gydalo/account/storage.mjs";


export function headers() {
    const token = load("token");
  
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  
  export async function authFetch(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: headers()
    })
  }

  