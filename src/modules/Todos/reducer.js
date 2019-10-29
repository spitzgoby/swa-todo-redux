
import {types} from './actions/types';

const initialState = {
  entities: {},
  error: '',
  recentlyDeletedTodo: false,
  searching: false,
  todos: []
};

export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case types.ADD_TODO_INIT:
      newState = {
        ...state,
        entities: {
            ...state.entities,
            [action.payload.todo.id]: action.payload.todo
        },
        todos: state.todos.concat([action.payload.todo.id])
      };
      break;

     case types.ADD_TODO_SUCCESS:
        newState = {
            ...state,
            entities: {
                ...state.entities,
                [action.payload.tempId]: undefined,
                [action.payload.todo.id]: action.payload.todo
            },
            todos: state.todos.map(todoId => {
                return action.payload.tempId === todoId ?
                    action.payload.todo.id :
                    todoId
            })
        };
        break;

    case types.CLEAR_COMPLETED_TODOS:
        newState = {
            ...state,
            entities: {
                ...state.entities,
                ...state.todos.reduce((accumulator, todoId) => {
                    const todo = state.entities[todoId];

                    accumulator[todoId] = todo.completed ? undefined : todo;

                    return accumulator;
                }, {})
            },
            todos: state.todos.filter(todoId => !state.entities[todoId].completed)
        };

        break;

     case types.COMPLETE_TODO:
        newState = {
            ...state,
            entities: {
                ...state.entities,
                [action.payload.id]: {
                    ...state.entities[action.payload.id],
                    completed: action.payload.completed
                }
            }
        };
        break;

    case types.CLEAR_RECENTLY_DELETED_TODO:
        newState = {
            ...state,
            recentlyDeletedTodo: false
        };
        break;

    case types.CLEAR_DELETING_TODO_ERROR:
        newState = {
            ...state,
            errorDeletingTodo: false
        };
        break;

    case types.DELETE_TODO_INIT:
        newState = {
            ...state,
            entities: {
                ...state.entities,
                [action.payload.id]: undefined
            },
            todos: state.todos.filter(todoId => todoId !== action.payload.id)
        };
        break;

    case types.DELETE_TODO_SUCCESS:
        newState = {
            ...state,
            recentlyDeletedTodo: true
        };
        break;

    case types.DELETE_TODO_FAILURE:
        newState = {
            ...state,
            errorDeletingTodo: true
        };
        break;

    case types.RETRIEVE_TODOS_INIT:
        newState = {
            ...state,
            searching: true
        };
        break;

    case types.RETRIEVE_TODOS_SUCCESS:
        newState = {
            ...state,
            entities: action.payload.entities,
            searching: false,
            todos: action.payload.todos
        };
        break;

    case types.RETRIEVE_TODOS_FAILURE:
        newState = {
            ...state,
            error: action.payload.error.message,
            searching: false
        };
        break;

    default:
      newState = state;
  }

  return newState;
};

export const getCompletedTodos = (state) => {
    return getTodos(state).filter(todoId => {
        return state.Todos.entities[todoId].completed
    });
}
export const getErrorDeletingTodo = (state) => state.Todos.errorDeletingTodo;
export const getRecentlyDeletedTodo = (state) => state.Todos.recentlyDeletedTodo;
export const getTodoById = (state, id) => state.Todos.entities[id];
export const getTodos = (state) => state.Todos.todos;
