import { combineReducers } from 'redux'
import userReducer from 'modules/Users'
import todosReducer from 'modules/Todos'

export * from 'modules/Todos';

const rootReducer = combineReducers({
    userReducer,
    todosReducer
});

export default rootReducer;