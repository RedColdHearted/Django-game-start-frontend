import { combineReducers, configuryReducer } from 'redux';
import auth from './auth';

const reducer = combineReducers({
    auth
});

const store = configuryReducer({
    reducer: reducer
})

export default store;