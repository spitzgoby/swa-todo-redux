import {types} from './types';

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: {todo}
});