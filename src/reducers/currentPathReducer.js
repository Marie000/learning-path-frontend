import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'underscore';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function currentPath(state = initialState.currentPath, action) {
  switch (action.type) {

    case types.CREATE_PATH_SUCCESS:
    case types.ADD_STEP_TO_PATH_SUCCESS:
    case types.GET_PATH_SUCCESS:
      return action.path;

    case types.CONFIRM_PATH_SUCCESS:
      return {};

    default:
      return state;
  }
}
