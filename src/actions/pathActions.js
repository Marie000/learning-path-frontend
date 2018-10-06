import PathApi from '../api/mockPathApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import axios from 'axios';
import Auth from '../auth/Auth';
const auth = new Auth();

const api = 'http://localhost:9000'

export function loadPathsSuccess(paths) {
  return {type: types.LOAD_PATHS_SUCCESS, paths};
}

export function loadPaths() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.get(api + '/paths').then(result => {
      // use only confirmed paths
      let paths = result.data.filter((path) => path.confirmed);
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
  path.author = auth.getProfile().sub;
  if (!path.public) {
    path.owner = auth.getProfile().sub;
  }
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.post(api + '/paths', path).then(path => {
      dispatch(createPathSuccess(path.data));
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
    return axios.patch(api + '/paths/' + path.id, path).then(path => {
      dispatch(updatePathSuccess(path));
    }).catch(error => {
      throw(error);
    });
  };
}

function addStepToPathSuccess(path) {
  return {type: types.ADD_STEP_TO_PATH_SUCCESS, path};
}

export function addStepToPath(path, step) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.post(api + '/paths/' + path.id + '/steps', step).then(path => {
      dispatch(addStepToPathSuccess(path.data));
    }).catch(error => {
      throw(error);
    });
  };
}

function confirmPathSuccess(path) {
  return {type: types.CONFIRM_PATH_SUCCESS, path};
}

export function confirmPath(path) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.patch(api + '/paths/' + path.id, {confirmed: true})
    .then((path) => {
      return axios.get(api + '/paths/' + path.data.id);
    })
    .then(receivedPath => {
      dispatch(confirmPathSuccess(receivedPath.data));
    })
    .catch(error => {
      throw(error);
    });
  };
}

function getPathSuccess(path) {
  return {type: types.GET_PATH_SUCCESS, path};
}

export function getPath(id) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.get(api + '/paths/' + id).then((path) => {
      dispatch(getPathSuccess(path.data));
    })
  }
}

function updateStepSuccess(path) {
  return {type: types.UPDATE_STEP_SUCCESS, path};
}

export function updateStep(step) {
  return dispatch => {
    return axios.patch(api + '/steps/' + step.id, step).then(step => {
      dispatch(updateStepSuccess(step));
    }).catch(error => {
      throw(error);
    });
  }
}
