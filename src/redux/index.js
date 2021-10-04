import { createStore as create, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger'

import rootReducer from './reducers';
import rootSaga from './sagas';

// export const createStore = () => {
//   const store = create(rootReducer);

//   return { store }
// }

export const createStore = () => {
  const middleware = [logger];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const store = create(rootReducer, applyMiddleware(...middleware));

  sagaMiddleware.run(rootSaga);

  return { store };
};
