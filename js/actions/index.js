

export const loadImages = (payload) => {
  return {
    type: 'IMAGES_FETCH_REQUESTED',
    page: payload.page,
    size: payload.size
  }
}

export function selectImage(image) {
  return {
    type: 'SELECT_IMAGE',
    image
  }
}

export const fetchShows = () => {
  return {
    type: 'SHOW_FETCH_REQUESTED'
  }
}

export const fetchPastShows = () => {
  return {
    type: 'PASTSHOW_FETCH_REQUESTED'
  }
}

export const getNextWord = () => {
  return { 
    type: 'NEXT_WORD'
  }
}

export const getLastWord = () => {
  return { 
    type: 'LAST_WORD'
  }
}

export const fetchWords = () => {
  return {
    type: 'WORDS_FETCH_REQUESTED'
  }
}


export const fetchProfile = () => {
  return {
    type: 'PROFILE_REQUESTED'
  }
}





