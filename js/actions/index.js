
import * as c from '../constants'

export const loadImages = (payload) => {
  return {
    type: c.IMAGES_FETCH_REQUESTED,
    page: payload.page,
    size: payload.size
  }
}

export function selectImage(image) {
  return {
    type: c.SELECT_IMAGE,
    image
  }
}

export const fetchShows = () => {
  return {
    type: c.SHOW_FETCH_REQUESTED
  }
}

export const fetchPastShows = () => {
  return {
    type: c.PASTSHOW_FETCH_REQUESTED
  }
}

export const fetchWords = () => {
  return {
    type: c.WORDS_FETCH_REQUESTED
  }
}

export const fetchProfile = () => {
  return {
    type: c.PROFILE_REQUESTED
  }
}





