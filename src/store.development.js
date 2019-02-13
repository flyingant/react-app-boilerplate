import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./reducers/";
import rootSagas from "./sagas/";

const reducers = combineReducers({
  root: rootReducers
});

const logger = createLogger({
  stateTransformer(state) {
    return state.root.toJS();
  }
});

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(thunk, logger, sagaMiddleware)
);

export default function configuredStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);
  sagaMiddleware.run(rootSagas);
  return store;
}