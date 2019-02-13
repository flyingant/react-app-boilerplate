import { COMMON } from "../ActionsTypes";

export function loading() {
  return {
    type: COMMON.LOADING
  };
}

export function loadingCompleted() {
  return {
    type: COMMON.LOADING_COMPLETED
  };
}

export default {
  loading,
  loadingCompleted
}
