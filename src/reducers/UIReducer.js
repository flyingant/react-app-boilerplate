import Immutable from "immutable";
import {COMMON} from "../ActionsTypes";

const DEFAULT_UI_STATE = {
  loading: false
};

export default (state, action) => {
  const currentState = state || Immutable.fromJS(DEFAULT_UI_STATE);
  switch (action.type) {
    case COMMON.LOADING:
      return state.merge({'loading': true});
    case COMMON.LOADING_COMPLETED:
      return state.merge({'loading': false});
    default:
      return currentState;
  }
}
