/* eslint-disable import/no-anonymous-default-export */
import { createStore } from 'redux';
import MemberReducer from '../reducer/MemberReducer';

export default createStore(
    MemberReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
