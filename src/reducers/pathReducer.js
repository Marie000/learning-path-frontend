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

    case types.UPDATE_PATH_SUCCESS: {
      let index = _.findIndex(paths, (pathfound) => pathfound.id === action.path.id);
      return Object.assign([...state, {index: action.path}]);
    }

    default:
      return state;
  }
}
