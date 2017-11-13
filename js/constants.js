/**
 * Constants
 */
export const NUMBER_OF_IMAGES = 44
export const NUMBER_OF_IMAGES_TO_DISPLAY = 3
export const IMAGES_PER_PAGE = 6
export const timeZone = 'America/Chicago'

/**
 * Actions/Reducers
 */
export const IMAGES_RECEIVED = 'IMAGES_RECEIVED'
export const SELECT_IMAGE = 'SELECT_IMAGE'
export const IMAGES_FETCH_REQUESTED = 'IMAGES_FETCH_REQUESTED'
export const LOAD_IMAGES_FAILURE = 'LOAD_IMAGES_FAILURE'
export const PROFILE_REQUESTED = 'PROFILE_REQUESTED'
export const PROFILE_REQUESTED_SUCCEEDED = 'PROFILE_REQUESTED_SUCCEEDED'
export const PROFILE_REQUESTED_FAILED = 'PROFILE_REQUESTED_FAILED'
export const SHOW_FETCH_SUCCEEDED = 'SHOW_FETCH_SUCCEEDED'
export const SHOW_FETCH_REQUESTED = 'SHOW_FETCH_REQUESTED'
export const SHOW_FETCH_FAILED = 'SHOW_FETCH_FAILED'
export const PASTSHOW_FETCH_REQUESTED = 'PASTSHOW_FETCH_REQUESTED'
export const PASTSHOW_FETCH_SUCCEEDED = 'PASTSHOW_FETCH_SUCCEEDED'
export const PASTSHOW_FETCH_FAILED = 'PASTSHOW_FETCH_FAILED'
export const WORDS_FETCH_REQUESTED = 'WORDS_FETCH_REQUESTED'
export const WORDS_FETCH_SUCCEEDED = 'WORDS_FETCH_SUCCEEDED'
export const WORDS_FETCH_FAILED = 'WORDS_FETCH_FAILED'

/**
 * Word Types
 * 
1 — general
2 — brand names (Elal, Amoco, etc.)
3 — geography
4 — religion/mythology terms
5 — non-English words (French, Spanish, Latin, German etc)
6 — names of specific individuals
7 — scientific terms
8 — Indigenous peoples (all the native american tribes, e.g.)
9 — historical
10 — music related
11 — nature terms
12 — Literature/Fiction
13 — Sports
 *
 */
export const WORD_TYPES = [
   "All",
   "General",
   "Brands",
   "Geography",
   "Religion/Mythology",
   "Foreign",
   "Notable People",
   "Science",
   "Indigenous",
   "Historical",
   "Music",
   "Nature",
   "Literature/Film"
]