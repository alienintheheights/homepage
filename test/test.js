import * as actions from '../src/actions/index.js'
import * as types from '../src/constants'
import appState from '../src/reducers'

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


const initState = {
  words: [],
  wordIndex: 0,
  wod: {},
  images: [],
  shows: []
}
const fauxWords = [{ "entry": "fake1" }, { "entry": "fake2" }]

describe('reducers', () => {
    it('should return the initial state', () => {
      expect(
       appState(undefined, {})
      ).toEqual(initState)
    }),

    it('should fetch the words', () => {
      const fetchwordaction = {
        type: 'WORDS_FETCH_SUCCEEDED',
        words: fauxWords
      }
      expect(
        appState(undefined, fetchwordaction)
      ).toEqual({
        ...initState,
        words: fauxWords,
        wod: fauxWords[0]
      })
    }),

    it('should return the next word', () => {
      const nextwordaction = {
        type: 'NEXT_WORD'
      }
      const nextwordstate = {
        words: fauxWords,
        wordIndex: 0,
        wod: fauxWords[0]
      }
      expect(
        appState(nextwordstate, nextwordaction)
      ).toEqual({
        ...nextwordstate,
        wordIndex: 1,
        wod: fauxWords[1]
      })
    }),

    it('should return the last word', () => {
      const nextwordaction = {
        type: 'LAST_WORD'
      }
      const nextwordstate = {
        words: fauxWords,
        wordIndex: 1,
        wod: fauxWords[1]
      }
      expect(
        appState(nextwordstate, nextwordaction)
      ).toEqual({
        ...nextwordstate,
        wordIndex: 0,
        wod: fauxWords[0]
      })
    })
})
