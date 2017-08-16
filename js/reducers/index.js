
/**
 * The Application state.
 * @param {*} state 
 * @param {*} action 
 */
const appState = (state = {
  words: [],
  wordIndex: 0,
  wod: {},
  images: [],
  shows: [],
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
      return { ...state, shows: action.shows }

    case 'PASTSHOW_FETCH_SUCCEEDED':
      return { ...state, shows: action.shows }

    case 'NEXT_WORD':
      const nextIndex = (state.wordIndex < state.words.length - 1) ? state.wordIndex + 1 : 0
      return { ...state, wod: state.words[nextIndex], wordIndex: nextIndex }

    case 'LAST_WORD':
      const lastIndex = (state.wordIndex > 0 ) ? (state.wordIndex - 1) : (state.words.length - 1)
      return { ...state, wod: state.words[lastIndex], wordIndex: lastIndex }

    case 'WORDS_FETCH_SUCCEEDED':
      return { ...state, words: action.words,  wod: action.words[0] }

    default:
      return state
  }
}

export default appState