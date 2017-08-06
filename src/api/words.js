import 'whatwg-fetch'

const nodeEnv = process.env.NODE_ENV;
const fullURL = (nodeEnv === "production") ? "/api/words.php" : "http://localhost/api/words.php";

import { shuffle } from "../util"

export const requestWords = (payload) => {
    const returnState = Object.assign({}, payload) // copy
    // builds using promises
    return fetch(fullURL)
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            return response
        }).catch(function (error) {
            console.log("Request error: " + error);
            returnState.error = error.toString()
            return returnState;
        });
}
