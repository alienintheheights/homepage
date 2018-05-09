import 'whatwg-fetch'
const fullURL = '/data/vocabdb.json'
import { shuffle } from '../util'

export const requestWords = (payload) => {
    const returnState = Object.assign({}, payload) // copy
    // builds using promises
    return fetch(fullURL)
        .then((response) => {
            return response.json()
        }).then((response) => {
            shuffle(response)
            return response
        }).catch((error) => {
            console.log('Request error: ' + error)
            returnState.error = error.toString()
            return returnState
        })
}