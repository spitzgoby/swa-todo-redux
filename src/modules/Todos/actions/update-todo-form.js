import {types} from './types';

export const updateTodoForm = (form) => ({
    type: types.UPDATE_TODO_FORM,
    payload: form
})
