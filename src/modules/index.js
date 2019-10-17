import { combineReducers } from 'redux'
import todosReducer from 'modules/Todos'
import userReducer from 'modules/Users'

export * from 'modules/Todos';

const rootReducer = combineReducers({
    Todos: todosReducer,
    User: userReducer
});

export default rootReducer;
