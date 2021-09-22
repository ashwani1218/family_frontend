
import {  createStore,combineReducers } from 'redux';
import MemberReducer from '../reducer/MemberReducer';
import MembersReducer from '../reducer/MembersReducer';

export default  createStore(
    combineReducers({
        member: MemberReducer,
        members: MembersReducer
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


