import moment from 'moment';
import {types} from './types';
import uuid from 'uuid';

const createNewTodo = (payload) => {
  return {
    completed: false,
    description: payload.description,
    dueBy: moment(payload.dueBy),
    id: uuid()
  };
};

const initialState = {
  todos: [{
    completed: false,
    description: 'Finish todo app',
    dueBy: moment().add(1, 'hour').startOf('hour'),
    id: uuid()
  }]
};

export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case types.ADD_TODO:
      newState = {
        ...state,
        todos: state.todos.concat([createNewTodo(action.payload)])
      };
      break;

    default:
      newState = state;
  }

  return newState;
};

export const getTodos = (state) => state.todos;
export * from './actions';