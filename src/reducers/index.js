
import { NUMBER_OF_IMAGES, NUMBER_OF_IMAGES_TO_DISPLAY } from '../constants'
import { buildImageArray } from '../util'

const imageMgr = (state = {
  imageArray: [],
  currentImages: [],
  currentIndex: 0,
  shows: [],
  modalImageId: null,
  isModalHidden: true
  
}, action) => {

  switch (action.type) {

    case 'NEXT_IMAGE':
      var updateCurrentImages = state.currentImages.slice(0)
      var newIndex = (state.currentIndex === state.imageArray.length) ? 0 : state.currentIndex

      var selectedIdx = Math.floor(Math.random() * NUMBER_OF_IMAGES_TO_DISPLAY)
      updateCurrentImages[selectedIdx] = state.imageArray[newIndex]
      
      return {...state, currentImages: updateCurrentImages, currentIndex: newIndex + 1 }

    case 'SHUFFLE_IMAGES': //TODO this does two things. Maybe split it up?
      var imgArray = buildImageArray(NUMBER_OF_IMAGES)
      // build and load display array
      var curArray = []
      for (var i = 0; i < NUMBER_OF_IMAGES_TO_DISPLAY; i++) {
        curArray[i] = imgArray[i]
      }

      return {...state, imageArray: imgArray, currentImages:  curArray, currentIndex: NUMBER_OF_IMAGES_TO_DISPLAY + 1}

   case 'SHOW_FETCH_SUCCEEDED':
      return {...state, shows: action.shows}

    case 'DISPLAY_MODAL':
      return {...state, isModalHidden: false, modalImageId: action.imageId }
    
    case 'CLOSE_MODAL':
      return {...state, isModalHidden: true }

    default:
      return state
  }
}

export default imageMgr