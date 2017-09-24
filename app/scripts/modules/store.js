import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

export default function createFinalStore() {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )(createStore)
  return createStoreWithMiddleware(rootReducer)
}
