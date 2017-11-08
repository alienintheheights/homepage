import * as types from '../js/constants'
import appState from '../js/reducers'

const initState = {
  words: [],
  images: [],
  shows: [],
  showsFetched: false,
  profile: null
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
    })

    
})
