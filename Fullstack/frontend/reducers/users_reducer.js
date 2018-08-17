import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    // debugger
      return merge({}, state, { [action.user.id]: action.user });
    case LOGOUT_CURRENT_USER:
      let newState = merge({}, state);
      delete newState[action.user.id]
      return newState;
    default:
    // debugger
      return state;
  }
};

export default usersReducer;
