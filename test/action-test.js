import * as actions from '../src/actions/index.js'
import * as types from '../src/constants'

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
        type: 'SELECT_IMAGE'
      }
      expect(actions.selectImage()).toEqual(expectedAction)
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
    it('should fetch next word', () => {
      const expectedAction = {
        type: 'NEXT_WORD'
      }
      expect(actions.getNextWord()).toEqual(expectedAction)
    }), it('should fetch last word', () => {
      const expectedAction = {
        type: 'LAST_WORD'
      }
      expect(actions.getLastWord()).toEqual(expectedAction)
    })
})
