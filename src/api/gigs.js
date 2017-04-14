
import momentTz from 'moment-timezone'
import { timeZone } from '../constants'

const fullURL = "/data/gigdb.json"

const filterShows = (response, getFutures) => {
    const nowIs = momentTz().tz(timeZone)
    const filteredShows = response.filter(function (value, index) {
        const isFutureDate = nowIs <= momentTz(value.date).tz(timeZone)
        return ((getFutures && isFutureDate) || (!getFutures && !isFutureDate)) ? value : null
    })
    return (getFutures) ? filteredShows : filteredShows.reverse()
}

const requestShows = (payload) => {
    const returnState = Object.assign({}, payload) // copy
    // builds using promises
    return fetch(fullURL)
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            return filterShows(response, payload.listFutures)
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