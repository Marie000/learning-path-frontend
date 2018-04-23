import PathApi from '../api/mockPathApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPathsSuccess(paths) {
  return {type: types.LOAD_PATHS_SUCCESS, paths};
}

export function loadPaths() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PathApi.getAllPaths().then(paths => {
      dispatch(loadPathsSuccess(paths));
    }).catch(error => {
      throw(error);
    });
  };
}

function createPathSuccess(path) {
  return {type: types.CREATE_PATH_SUCCESS, path};
}

export function createPath(path) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PathApi.createPath(path).then(path => {
      dispatch(createPathSuccess(path));
    }).catch(error => {
      throw(error);
    });
  };
}

function updatePathSuccess(path) {
  return {type: types.UPDATE_PATH_SUCCESS, path};
}

export function updatePath(path) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PathApi.updatePath(path).then(path => {
      dispatch(updatePathSuccess(path));
    }).catch(error => {
      throw(error);
    })
  }
}
