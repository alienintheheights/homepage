
/**
 * The Application state.
 */

import * as c from '../constants'

const appState = (state = {
    words        : [],
    images       : [],
    shows        : [],
    showsFetched : false,
    profile      : null
}, action) => {

    switch (action.type) {

    case c.IMAGES_RECEIVED:
        return { ...state, images: action.images }

    case c.SELECT_IMAGE:
        return { ...state, selectedImage: action.image }

    case c.LOAD_IMAGES_FAILURE:
        return state

    case c.PROFILE_REQUESTED_SUCCEEDED:
        return { ...state, profile: action.profile }

    case c.SHOW_FETCH_SUCCEEDED:
        return { ...state, shows: action.shows, showsFetched: true }

    case c.PASTSHOW_FETCH_SUCCEEDED:
        return { ...state, shows: action.shows, showsFetched: true }

    case c.WORDS_FETCH_SUCCEEDED:
        return { ...state, words: action.words, wod: action.words[0] }

    default:
        return state
    }
}

export default appState