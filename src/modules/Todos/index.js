import {types} from './types'

const initialState = {
  todos: []
};


export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case types.ADD_TODO:
      newState = {
        ...state,
        todos: state.todos.concat([action.payload])
      };
      break;

    default:
      newState = state;
  }

  return newState;
};