import { createStore, combineReducers } from 'redux';
import filmReducer from './film-reducers';

let reducers = combineReducers({
    filmPage: filmReducer
});

const store = createStore(reducers);

export default store;