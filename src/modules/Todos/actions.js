import {types} from './types';

export const addTodo = (payload) => ({
  type: types.ADD_TODO,
  payload
});