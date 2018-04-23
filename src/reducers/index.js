import { combineReducers } from 'redux';
import paths from './pathReducer';
import user from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  paths,
  user,
  ajaxCallsInProgress
});

export default rootReducer;
