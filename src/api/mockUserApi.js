import delay from './delay';
import _ from 'underscore';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const user = {
  id: "001",
  username: "marie",
  paths: []
}

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }

// //This would be performed on the server in a real app. Just stubbing in.
// const generateId = (step) => {
//   return replaceAll(step.title, ' ', '-');
// };

class UserApi {
  static getUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(user);
      }, delay);
    });
  }

  static addPathForUser(path) {
    return new Promise((resolve, reject) => {
      if (!_.contains(user.paths, path)) {
        setTimeout(() => {
          user.paths.push(path)
          resolve(Object.assign({}, user, {paths: [...user.paths, path]}))
        }, delay);
      } else {
        resolve(user);
      }

    });
  }

  static removePathForUser(pathId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let index = _.findIndex(user.paths, {id: pathId});
        user.paths.splice(index, 1);
        resolve(user);
      }, delay);
    });
  }
}

export default UserApi;
