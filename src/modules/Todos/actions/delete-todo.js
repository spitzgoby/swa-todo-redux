import {types} from './types'

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    payload: {id}
});
