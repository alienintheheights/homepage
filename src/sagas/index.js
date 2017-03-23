import { call, put, takeEvery } from 'redux-saga/effects'
import { requestShows } from '../api'

// worker Saga: will be fired on SHOW_FETCH_REQUESTED actions
function* fetchShows(action) {
    try {
        const showdb = yield call(requestShows)
        yield put({ type: "SHOW_FETCH_SUCCEEDED", shows: showdb });
    } catch (e) {
        yield put({ type: "SHOW_FETCH_FAILED", message: e.message });
    }
}

/*
  Starts fetchUser on each dispatched `SHOW_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("SHOW_FETCH_REQUESTED", fetchShows);
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