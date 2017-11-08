import * as actions from '../js/actions/index.js'
import * as types from '../js/constants'

describe('actions', () => {
  it('should fetch images', () => {
    const payload = {
      page: 1,
      size: 5
    }
    const expectedAction = {
      type: 'IMAGES_FETCH_REQUESTED',
      page: payload.page,
      size: payload.size
    }
    expect(actions.loadImages(payload)).toEqual(expectedAction)
  }),
    it('should load next image', () => {
      const expectedAction = {
        type: 'SELECT_IMAGE',
        image: {}
      }
      expect(actions.selectImage({})).toEqual(expectedAction)
    }),
    it('should fetch shows', () => {
      const expectedAction = {
        type: 'SHOW_FETCH_REQUESTED'
      }
      expect(actions.fetchShows()).toEqual(expectedAction)
    }),
    it('should fetch past shows', () => {
      const expectedAction = {
        type: 'PASTSHOW_FETCH_REQUESTED'
      }
      expect(actions.fetchPastShows()).toEqual(expectedAction)
    }),
    it('should fetch word database', () => {
      const expectedAction = {
        type: 'WORDS_FETCH_REQUESTED'
      }
      expect(actions.fetchWords()).toEqual(expectedAction)
    }),
    it('should fetch profile', () => {
      const expectedAction = {
        type: 'PROFILE_REQUESTED'
      }
      expect(actions.fetchProfile()).toEqual(expectedAction)
    })
})
