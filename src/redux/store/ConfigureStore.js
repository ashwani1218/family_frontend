/* eslint-disable import/no-anonymous-default-export */
import {  createStore } from 'redux';
import MemberReducer from '../reducer/MemberReducer';
// import createSagaMiddleware from 'redux-saga'

// const sagaMiddleware = createSagaMiddleware()

export default () => {
    const store = createStore(
        MemberReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
//,applyMiddleware(sagaMiddleware)