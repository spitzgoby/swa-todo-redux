import {combineReducers} from 'redux';
import todosReducer from './Todos'

export default combineReducers({
  Todos: todosReducer
});