import Immutable from 'immutable';
import { APP } from '../actions/ActionTypes';

const DEFAULT_APP_STATE = {
  loggedIn: false,
  message: '',
};

export default (state, action) => {
  const currentState = state || Immutable.fromJS(DEFAULT_APP_STATE);
  switch (action.type) {
    case APP.INITIALIZE_COMPLETED:
      return currentState.merge({ message: action.payload });
    default:
      return currentState;
  }
};
