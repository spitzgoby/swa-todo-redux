
import moment from 'moment';
import {types} from './types';
import uuid from 'uuid';

const DUE_BY_FORMAT = 'YYYY-MM-DDThh:mm';
const defaultDueBy = moment().add(1, 'hour').startOf('hour');

const createNewTodo = (todo) => {
  return {
    completed: false,
    description: todo.description,
    dueBy: moment(todo.dueBy).format(DUE_BY_FORMAT),
    id: uuid()
  };
};

const initialState = {
  todos: [
    createNewTodo({
      description: 'Add "completeTodo" action',
      dueBy: defaultDueBy
    }),
    createNewTodo({
      description: 'Add "deleteTodo" action',
      dueBy: defaultDueBy
    }),
    createNewTodo({
      description: 'Add "clearCompletedTodos" action',
      dueBy: defaultDueBy
    }),
    createNewTodo({
      description: 'Create "getCompletedTodos" selector',
      dueBy: defaultDueBy
    }),
    createNewTodo({
      description: 'Create "getOverdueTodos" selector',
      dueBy: defaultDueBy
    })
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

    default:
      newState = state;
  }

  return newState;
};

export const getTodos = (state) => state.todos;
