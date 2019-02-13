import Immutable from "immutable";
import { APP } from "../ActionsTypes";

const DEFAULT_APP_STATE = {
  locale: 'zh'
};

export default (state, action) => {
  const currentState = state || Immutable.fromJS(DEFAULT_APP_STATE);
  switch (action.type) {
    case APP.INITIALIZE_APP_COMPLETED:
      console.log('Payload:', action.payload);
      return currentState.merge({
        
      });
    case APP.INITIALIZE_APP_FAILED:
      console.log('Errors:', action.error);
      return currentState.merge({
        
      });
    case APP.SWITCH_LANGUAGE:
      return currentState.merge({
        locale: action.lang
      });
    default:
      return currentState;
  }
  return currentState;
}
