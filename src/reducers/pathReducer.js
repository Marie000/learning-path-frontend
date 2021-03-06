import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'underscore';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function paths(state = initialState.paths, action) {
  switch (action.type) {
    case types.LOAD_PATHS_SUCCESS:
      return action.paths;

    case types.CREATE_PATH_SUCCESS:
      return [...state, action.path];

    case types.UPDATE_PATH_SUCCESS:
    case types.ADD_STEP_TO_PATH_SUCCESS:
    case types.CONFIRM_PATH_SUCCESS:
    case types.UPDATE_STEP_SUCCESS:
    {
      let index = _.findIndex(state, (pathfound) => pathfound.id === action.path.id);
      return [...state.slice(0, index),
        action.path,
        ...state.slice(index + 1)];
    }

    default:
      return state;
  }
}
