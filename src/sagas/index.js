import {fork} from "redux-saga/effects";
import AppSagas from "./AppSagas";
import UISagas from "./UISagas";

export default function* rootSagas() {
  yield fork(AppSagas);
  yield fork(UISagas);
}