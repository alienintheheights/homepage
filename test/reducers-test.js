import * as types from '../src/constants'
import appState from '../src/reducers'

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
