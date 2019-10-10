
import moment from 'moment';
import {types} from './actions/types';

const DUE_BY_FORMAT = 'YYYY-MM-DDThh:mm';

const createNewTodo = (todo) => {
  return {
    completed: false,
    description: todo.description,
    dueBy: todo.dueBy ? moment(todo.dueBy).format(DUE_BY_FORMAT) : undefined,
    id: todo.id
  };
};

const initialState = {
  error: '',
  searching: false,
  todos: []
};

export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case types.ADD_TODO_INIT:
      newState = {
        ...state,
        todos: state.todos.concat([createNewTodo(action.payload.todo)])
      };
      break;

     case types.ADD_TODO_SUCCESS:
        newState = {
            ...state,
            todos: state.todos.map(todo => {
                let newTodo = {...todo};

                if (todo.id === action.payload.tempId) {
                    newTodo.id = action.payload.id
                }

                return newTodo;
            })
        }
        break;

     case types.COMPLETE_TODO:
        newState = {
            ...state,
            todos: state.todos.map(todo => {
                let newTodo = {...todo};

                if (todo.id === action.payload.id) {
                    newTodo.completed = action.payload.completed;
                }

                return newTodo;
            })
        };
        break;

    case types.DELETE_TODO:
        newState = {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload.id)
        }
        break;

    case types.RETRIEVE_TODOS_INIT:
        newState = {
            ...state,
            searching: true
        }
        break;

    case types.RETRIEVE_TODOS_SUCCESS:
        newState = {
            ...state,
            searching: false,
            todos: action.payload.todos
        }
        break;

    case types.RETRIEVE_TODOS_FAILURE:
        newState = {
            ...state,
            error: action.payload.error.message,
            searching: false
        }
        break;

    default:
      newState = state;
  }

  return newState;
};

export const getTodos = (state) => state.todos;
export const getCompletedTodos = (state) => getTodos(state).filter(todo => todo.completed);
