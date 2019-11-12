import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import {retrieveTodos} from '../retrieve-todos';
import thunk from 'redux-thunk';
import {types} from '../types';

describe('retrieveTodos()', () => {
    const mockInitialState = {};
    let mockStore;
    const mockTodos = [{
        completed: true,
        description: 'Test',
        id: 1
    }];

    beforeEach(() => {
        mockStore = configureMockStore([thunk])(mockInitialState);
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should dispatch a success action when todos are retrieved', () => {
        const expectedActions = [{
            type: types.RETRIEVE_TODOS_INIT
        }, {
            type: types.RETRIEVE_TODOS_SUCCESS,
            payload: {
                entities: {
                    1: mockTodos[0]
                }, 
                    todos: [1]
                }
        }];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                response: mockTodos,
                status: 200
            })
        });
        // TODO: fix failing test
        return mockStore.dispatch(retrieveTodos())
            .then(() => {
                expect(mockStore.getActions()).toEqual(expectedActions)
            });
    });

    it('should dispatch a failure action when the request fails', () => {
        const expectedActions = [{
            type: types.RETRIEVE_TODOS_INIT
        }, {
            type: types.RETRIEVE_TODOS_FAILURE,
            payload: {error: new Error('Request failed with status code 400')}
        }];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 400
            });
        });

        return mockStore.dispatch(retrieveTodos())
            .then(() => expect(mockStore.getActions()).toEqual(expectedActions));
    });
});
