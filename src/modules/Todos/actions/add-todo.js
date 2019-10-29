import axios from 'axios';
import {types} from './types';
import uuid from 'uuid';

const addTodoInit = (id, todo) => ({
    type: types.ADD_TODO_INIT,
    payload: {
        todo: {
            ...todo,
            id
        }
    }
});

const addTodoSuccess = (tempId, data) => ({
    type: types.ADD_TODO_SUCCESS,
    payload: {
        todo: data,
        tempId
    }
});

const addTodoFailure = (error) => ({
    type: types.ADD_TODO_FAILURE,
    payload: {error}
});

export const addTodo = (todo) => (dispatch, getState) => {
    const tempId = uuid();

    dispatch(addTodoInit(tempId, todo));

    return axios.post('http://localhost:3001/todos', todo)
        .then(response => dispatch(addTodoSuccess(tempId, response.data)))
        .catch(error => dispatch(addTodoFailure(error)));
};
