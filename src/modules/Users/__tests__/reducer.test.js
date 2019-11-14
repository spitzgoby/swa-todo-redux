import reducer from '../reducer';
import {types} from '../actions/types';

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            user: ''
        });
    });

    it('should select the user', () => {
        expect(reducer([], {
            type: types.SELECT_USER,
            payload: {
                user: 'parent'
            }
        })).toEqual(
            { user: 'parent'}
        );
    });
});