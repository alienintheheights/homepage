
/**
 * The Application state.
 * @param {*} state 
 * @param {*} action 
 */
const appState = (state = {
  words: [],
  images: [],
  shows: [],
  showsFetched: false,
  profile: null
}, action) => {
  
  switch (action.type) {

    case 'IMAGES_RECEIVED':
      return {...state, images: action.images};

    case 'SELECT_IMAGE':
      return {...state, selectedImage: action.image};

    case 'LOAD_IMAGES_FAILURE':
      return state;

    case 'PROFILE_REQUESTED_SUCCEEDED':
      return { ...state, profile: action.profile }

    case 'SHOW_FETCH_SUCCEEDED':
      return { ...state, shows: action.shows, showsFetched: true }

    case 'PASTSHOW_FETCH_SUCCEEDED':
      return { ...state, shows: action.shows, showsFetched: true }

    case 'WORDS_FETCH_SUCCEEDED':
      return { ...state, words: action.words,  wod: action.words[0] }

    default:
      return state
  }
}

export default appState