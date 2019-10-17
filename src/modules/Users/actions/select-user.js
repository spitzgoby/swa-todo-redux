import {types} from './types';

export const selectUser = (user) => ({
    type: types.SELECT_USER,
    payload: {user}
});