import {types} from './actions/types';

const initialState = {
    user: ''
};

export default (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case types.SELECT_USER:
            newState = {
                ...state,
                user: action.payload.user
            };
            break;
        default:
            newState = state;
    }

    return newState;
};

export const getUser = (state) => state.User.user;
