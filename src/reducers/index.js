import { combineReducers } from 'redux';
import paths from './pathReducer';
import user from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import currentPath from './currentPathReducer';

const rootReducer = combineReducers({
  paths,
  user,
  ajaxCallsInProgress,
  currentPath
});

export default rootReducer;
