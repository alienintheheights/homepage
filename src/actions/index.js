
export const getNextIndex = () => {
  return {
    type: 'NEXT_IMAGE'
  }
}

export const shuffleImages = () => {
  return {
    type: 'SHUFFLE_IMAGES'
  }
}

export const displayModal = (imageId) => {
  return {
    type: 'DISPLAY_MODAL',
    imageId: imageId
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}

export const fetchShows = () => {
  return {
    type: 'SHOW_FETCH_REQUESTED'
  }
}

