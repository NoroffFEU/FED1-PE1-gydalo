/*From Martins stream 13.02.24, link: https://noroff.sharepoint.com/sites/FEDOnline/_layouts/15/stream.aspx?id=%2Fsites%2FFEDOnline%2FShared%20Documents%2F2%2E4%20JavaScript%202%2FRecordings%2FJS2%20%20Collaboration%20%20JAN23F%2D20240213%5F142435%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E050afe72%2Df883%2D4aef%2D8156%2D19eb3ea524d7

import { REGISTER_URL } from "../shared/constants.mjs";


export async function registerUser(name, email, password) {
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
*/