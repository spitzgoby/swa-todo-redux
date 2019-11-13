import {addTodo} from '../add-todo';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import {types} from '../types';

jest.mock('../add-todo');

describe('addTodo actions', () => {
    const initialState = {
        todos: []
    };
    const mockTodo = {
        completed: false,
        description: '',
        dueBy: '',
        id: 123456,
    };
    const mockResponse = {
        tempId: 123456,
        todo: {
            tempId: 123456,
            todo: mockTodo
        }
    };
    const mockRequest = {
        todo: mockTodo
    };
    let mockStore;

    beforeEach(() => {
        mockStore = configureMockStore([thunk])(initialState);
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should create ADD_TODO_SUCCESS when adding todos has been done', () => {
        const expectedActions = [{
            type: types.ADD_TODO_INIT,
            payload: mockRequest
        }, {
            type: types.ADD_TODO_SUCCESS,
            payload: {
                tempId: 123456,
                todo: mockResponse
            }
        }];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                response: mockResponse,
                status: 200
            })
        });

        return mockStore.dispatch(addTodo(mockTodo))
            .then(() => expect(mockStore.getActions()).toEqual(expectedActions));
    });
});