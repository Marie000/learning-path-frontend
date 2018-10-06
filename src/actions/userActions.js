import UserApi from '../api/mockUserApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import {browserHistory} from 'react-router';
import axios from 'axios';
import Auth from '../auth/Auth';
const auth = new Auth();
const api = 'http://localhost:9000';

function loadUserSuccess(user) {
  return {type: types.LOAD_USER_SUCCESS, user};
}

export function loadUser() {
  let userId = auth.getProfile().sub;
  return dispatch => {
    return axios.get(api + '/users/' + userId).then((user) => {
      let returnedUser = user.data;
      // these two lines can be removed when I can get the 'as: 'paths' ' working in the user API route
      returnedUser.paths = user.data.owner;
      returnedUser.owner = undefined;
      dispatch(loadUserSuccess(returnedUser));
    });
  }
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
      dispatch(addPathForUserSuccess(user.data));
    });
  }
}

export function removePathForUserSuccess(user) {
  return {type: types.REMOVE_PATH_FOR_USER_SUCCESS, user};
}

export function removePathForUser(pathId) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return UserApi.removePathForUser(pathId).then(user =>{
      dispatch(removePathForUserSuccess(user));
    });
  };
}
