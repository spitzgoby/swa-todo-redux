import reducer, * as fromUser from '../reducer';
import {types} from '../actions/types';

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            user: ''
        });
    });

    it('should return the existing state if it does not recognize an action', () => {
        const mockAction = {
            type: 'fake-action-type'
        };
        const mockCurrentState = {
            user: {id: 'test'}
        };

        expect(reducer(mockCurrentState, mockAction)).toEqual(mockCurrentState);
    });

    it('should select the user', () => {
        expect(reducer({}, {
            type: types.SELECT_USER,
            payload: {
                user: 'parent'
            }
        })).toEqual(
            { user: 'parent'}
        );
    });

    it('should get the current user data', () => {
        const mockState = {
            User: {
                user: {
                    id: 'test'
                }
            }
        };

        expect(fromUser.getUser(mockState)).toEqual(mockState.User.user);
    });
});
