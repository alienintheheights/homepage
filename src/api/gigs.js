
import 'whatwg-fetch'

const nodeEnv = process.env.NODE_ENV;
const urlTemplate = (nodeEnv === "production") ? "/api/shows?dir=#DIR#" : "http://localhost/api/shows?dir=#DIR#";

const requestShows = (payload) => {
    const returnState = Object.assign({}, payload) // copy
    const sortDir = (payload.listFutures) ? "asc" : "desc"
    const fullURL = urlTemplate.replace("#DIR#", sortDir)
    // builds using promises
    return fetch(fullURL)
        .then(function (response) {
            return response.json()
        }).catch(function (error) {
            console.log("Request error: " + error);
            returnState.error = error.toString()
            return returnState
        });
}

export const requestCurrentShows = (payload) => {
    return requestShows(payload)
}

export const requestPastShows = (payload) => {
    return requestShows(payload)
}