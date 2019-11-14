import configureStore from 'redux-mock-store';
import {selectUser} from '../actions/select-user';
import {types} from '../actions/types';

const mockStore = configureStore();

describe('update user selection', () => {
    it('should create SELECT_USER when action selectUser is called', () => {
        const user = 'parent';
        const expectedActions = [
            {
                payload: {
                    user
                },
                type: types.SELECT_USER
            }
        ];
        const store = mockStore({});

        store.dispatch(selectUser(user));
        const actions = store.getActions();

        expect(actions[0]).toEqual(expectedActions[0]);
    });
});