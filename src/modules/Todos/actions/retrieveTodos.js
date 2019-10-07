import axios from 'axios';
import {checkStatus} from '../../../utilities/check-status';
import {types} from './types';

const retrieveTodosInit = () => ({
    type: types.RETRIEVE_TODOS_INIT
});

const retrieveTodosSuccess = (data) => ({
    type: types.RETRIEVE_TODOS_SUCCESS,
    payload: {todos: data}
});

const retrieveTodosFailure = (error) => ({
    type: types.RETRIEVE_TODOS_FAILURE,
    payload: {error}
});

export const retrieveTodos = () => (dispatch) => {
    dispatch(retrieveTodosInit());

    return axios.get('http://localhost:3001/todos')
        .then(checkStatus)
        .then(response => dispatch(retrieveTodosSuccess(response.data)))
        .catch(error => dispatch(retrieveTodosFailure(error)));
};
