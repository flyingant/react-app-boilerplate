import { APP } from "../ActionsTypes";

export function switchLanguage(lang) {
  return {
    type: APP.SWITCH_LANGUAGE,
    lang: lang
  };
}

export function initializeApp(payload) {
  return {
    type: APP.INITIALIZE_APP,
    payload: payload
  };
}

export function initializeAppCompleted(payload) {
  return {
    type: APP.INITIALIZE_APP_COMPLETED,
    payload: payload
  };
}

export function initializeAppFailed(error) {
  return {
    type: APP.INITIALIZE_APP_FAILED,
    error: error
  }
}

export default {
  switchLanguage,
  initializeApp,
  initializeAppCompleted,
  initializeAppFailed
}