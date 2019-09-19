import {types} from './types';

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: {todo}
});

export const completeTodo = (id, completed) => ({
    type: types.COMPLETE_TODO,
    payload: {id, completed}
});
