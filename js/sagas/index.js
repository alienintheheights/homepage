import { call, put, takeEvery } from 'redux-saga/effects'
import { requestCurrentShows, requestPastShows } from '../api/gigs'
import { requestWords } from '../api/words'
import { fetchImages } from '../api/flickr'
import { requestProfile } from '../api/wordpress'

// worker Saga: will be fired on PROFILE_REQUESTED actions
function* fetchProfile(action) {
    try {
        const profiledata = yield call(requestProfile, action)
        yield put({ type: "PROFILE_REQUESTED_SUCCEEDED", profile: profiledata });
    } catch (e) {
        yield put({ type: "PROFILE_REQUESTED_FAILED", message: e.message });
    }
}

// worker Saga: will be fired on SHOW_FETCH_REQUESTED actions
function* fetchShows(action) {
    try {
        action.listFutures = true
        const showdb = yield call(requestCurrentShows, action)
        yield put({ type: "SHOW_FETCH_SUCCEEDED", shows: showdb });
    } catch (e) {
        yield put({ type: "SHOW_FETCH_FAILED", message: e.message });
    }
}

function* fetchPastShows(action) {
    try {
        action.listFutures = false
        const showdb = yield call(requestPastShows, action)
        yield put({ type: "PASTSHOW_FETCH_SUCCEEDED", shows: showdb });
    } catch (e) {
        yield put({ type: "SHOW_FETCH_FAILED", message: e.message });
    }
}

// worker Saga: will be fired on WORDS_FETCH_REQUESTED actions
function* fetchWords(action) {
    try {
        const worddb = yield call(requestWords, action)
        yield put({ type: "WORDS_FETCH_SUCCEEDED", words: worddb });
    } catch (e) {
        yield put({ type: "WORDS_FETCH_FAILED", message: e.message });
    }
}

export function* loadImages(action) {
  try {
    const images = yield call(fetchImages, action);
    yield put({type: 'IMAGES_RECEIVED', images});
    yield put({type: 'SELECT_IMAGE', image: images[0]})
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_FAILURE', error})
  }
}

/*
  Starts fetchUser on each dispatched `SHOW_FETCH_REQUESTED` etc action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("SHOW_FETCH_REQUESTED", fetchShows);
    yield takeEvery("PASTSHOW_FETCH_REQUESTED", fetchPastShows);
    yield takeEvery("WORDS_FETCH_REQUESTED", fetchWords);
    yield takeEvery("IMAGES_FETCH_REQUESTED", loadImages);
    yield takeEvery("PROFILE_REQUESTED", fetchProfile);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "SHOW_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.

function* mySaga() {
  yield takeLatest("SHOW_FETCH_REQUESTED", fetchUser);
}
*/

export default mySaga;