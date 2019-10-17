import axios from 'axios'
import {clearDeletingTodoError} from './clear-deleting-todo-error';
import {clearRecentlyDeletedTodo} from './clear-recently-deleted-todo';
import {types} from './types'

const deleteTodoInit = (id) => ({
    type: types.DELETE_TODO_INIT,
    payload: {id}
});

const deleteTodoSuccess = (id) => ({
    type: types.DELETE_TODO_SUCCESS,
    payload: {id}
});

const deleteTodosFailure = (error) => ({
    type: types.DELETE_TODO_FAILURE,
    payload: {error}
});

export const deleteTodo = (id) => (dispatch) => {
    dispatch(deleteTodoInit(id));

    return axios.delete(`http://localhost:3001/todos/${id}`)
        .then(response => {
            dispatch(deleteTodoSuccess(response.data))
            setTimeout(() => {
                dispatch(clearRecentlyDeletedTodo())
            }, 2500);
        })
        .catch(error => {
            dispatch(deleteTodosFailure(error))
            setTimeout(() => {
                dispatch(clearDeletingTodoError());
            }, 2500);
        });
};
