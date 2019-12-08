import Immutable from 'immutable';
import { combineReducers } from 'redux';

import UIReducer from './UIReducer';
import AppReducer from './AppReducer';

const combineImmutableReducers = (reducers) => {
  return (state, action) => Immutable.fromJS(reducers(Immutable.Map.isMap(state) ? state.toObject() : state, action));
};

// combine all your reducers here
const reducers = combineReducers({
  app: AppReducer,
  ui: UIReducer,
});

export default combineImmutableReducers(reducers);
