import { put, call, takeEvery } from 'redux-saga/effects';
import { APP } from '../actions/ActionTypes';
import { initializeCompleted } from '../actions/AppActions';
import { busy, busyCompleted } from '../actions/UIActions';
import { echo } from '../apis/app';

function* handleInitialize() {
  try {
    yield put(busy());
    const result = yield call(echo);
    yield put(initializeCompleted(result));
    yield put(busyCompleted());
  } catch (e) {
    yield put(busyCompleted());
  }
}

export default function* root() {
  yield takeEvery(APP.INITIALIZE, handleInitialize);
}
