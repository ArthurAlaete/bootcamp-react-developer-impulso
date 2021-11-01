import { combineReducers } from 'redux';

import todo from './todo';

// Combiner Reducers pega 'sub stores' e juntar numa store completa
export default combineReducers({
    todo
});