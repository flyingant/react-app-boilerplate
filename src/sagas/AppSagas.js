import {put, call, takeEvery} from "redux-saga/effects";
import { APP } from "../ActionsTypes";
import {initializeAppCompleted, initializeAppFailed} from "../actions/AppActions";
import {loading, loadingCompleted} from "../actions/CommonActions";
import {echo} from "../api/app";

function* handleInitializeApp(action) {
  try {
    yield put(loading());
    let result = yield call(echo);
    yield put(initializeAppCompleted(result));
    yield put(loadingCompleted());
  } catch (e) {
    yield put(initializeAppFailed("Initialize failed!"));
    yield put(loadingCompleted());
  }
}

export default function* root() {
  yield takeEvery(APP.INITIALIZE_APP, handleInitializeApp);
}
