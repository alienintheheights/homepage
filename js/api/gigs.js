
import momentTz from 'moment-timezone'
import { timeZone } from '../constants'
import 'whatwg-fetch'

import { getSortOrder } from '../util'
const fullURL = "/data/gigdb.json"


const filterShows = (response, listFutures) => {
    const nowIs = momentTz().tz(timeZone)
    response.sort(getSortOrder("show_date_start"));
    const filteredShows = response.filter(function (value, index) {
        const isFutureDate = nowIs <= momentTz(value.show_date_start).tz(timeZone)
        return ((listFutures && isFutureDate) || (!listFutures && !isFutureDate)) ? value : null
    })
    return (listFutures) ? filteredShows : filteredShows.reverse()
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
