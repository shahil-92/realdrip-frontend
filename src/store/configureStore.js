import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReducerContainer from './reducer';
import SagaContainer from './saga';

const sagaMiddleware = createSagaMiddleware();
// Wraping all reducer and sagas in a container called store
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const store = createStore(
  ReducerContainer,
  applyMiddleware(sagaMiddleware, ...middlewares)
);

sagaMiddleware.run(SagaContainer);

export default store;
