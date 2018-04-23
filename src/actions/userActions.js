import UserApi from '../api/mockUserApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import {browserHistory} from 'react-router';
import Auth from '../auth/Auth';
const auth = new Auth();

export function loadUser() {
  let user = auth.getProfile();
  console.log(user)
  return {type: types.LOAD_USER_SUCCESS, user: {user_name: user.nickname}};
}

export function login() {
  return dispatch => {
    dispatch(auth.login()).then(()=> {
      dispatch(loadUser());
    })
  }}

export function addPathForUserSuccess(user) {
  browserHistory.push('/learning');
  return {type: types.ADD_PATH_FOR_USER_SUCCESS, user};
}

export function addPathForUser(path) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return UserApi.addPathForUser(path).then(user => {
      dispatch(addPathForUserSuccess(user));
    })
  }
}

export function removePathForUserSuccess(user) {
  return {type: types.REMOVE_PATH_FOR_USER_SUCCESS, user};
}

export function removePathForUser(pathId) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return UserApi.removePathForUser(pathId).then(user =>{
      console.log('action', user)
      dispatch(removePathForUserSuccess(user));
    });
  };
}
