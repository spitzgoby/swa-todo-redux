import axios from 'axios';
import {types} from './types';

const retrieveTodosInit = () => ({
    type: types.RETRIEVE_TODOS_INIT
});

const retrieveTodosSuccess = (data) => {
    const payload = data.reduce((accumulator, todo) => {
        accumulator.entities[todo.id] = todo;
        accumulator.todos.push(todo.id);

        return accumulator;
    }, {
        entities: {},
        todos: []
    });

    return {
        type: types.RETRIEVE_TODOS_SUCCESS,
        payload
    };
};

const retrieveTodosFailure = (error) => ({
    type: types.RETRIEVE_TODOS_FAILURE,
    payload: {error}
});

export const retrieveTodos = () => (dispatch) => {
    dispatch(retrieveTodosInit());

    return axios.get('http://localhost:3001/todos')
        .then(response => dispatch(retrieveTodosSuccess(response.data)))
        .catch(error => dispatch(retrieveTodosFailure(error)));
};
