import moment from 'moment';
import {types} from './types';
import uuid from 'uuid';

const createNewTodo = (todo) => {
  return {
    completed: false,
    description: todo.description,
    dueBy: moment(todo.dueBy),
    id: uuid()
  };
};

const initialState = {
  todos: [
    createNewTodo({
      description: 'Add "completeTodo" action',
      dueBy: moment().add(1, 'hour').startOf('hour')
    }),
    createNewTodo({
      description: 'Add "deleteTodo" action',
      dueBy: moment().add(1, 'hour').startOf('hour')
    }),
    createNewTodo({
      description: 'Add "clearCompletedTodos" action',
      dueBy: moment().add(1, 'hour').startOf('hour')
    }),
    createNewTodo({
      description: 'Create "getCompletedTodos" selector',
      dueBy: moment().add(1, 'hour').startOf('hour')
    }),
    createNewTodo({
      description: 'Create "getOverdueTodos" selector',
      dueBy: moment().add(1, 'hour').startOf('hour')
    }),
  ]
};

export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case types.ADD_TODO:
      newState = {
        ...state,
        todos: state.todos.concat([createNewTodo(action.payload.todo)])
      };
      break;

    default:
      newState = state;
  }

  return newState;
};

export const getTodos = (state) => state.todos;
export * from './actions';