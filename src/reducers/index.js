import {combineReducers} from 'redux';
import todos from './todo';
import visibilityFilter from './visibilityFilters';

export default combineReducers({
    todos,
    visibilityFilter
})
