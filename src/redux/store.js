import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga'; 

//saga
import rootSaga from './rootSaga';

//root reducer
import rootReducer from './rootReducer';

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
