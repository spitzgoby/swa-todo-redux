import {types} from './types';

export const completeTodo = (id, completed) => ({
    type: types.COMPLETE_TODO,
    payload: {id, completed}
});
