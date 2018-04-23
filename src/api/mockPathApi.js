import delay from './delay';
import mockStepApi from './mockStepApi';
import _ from 'underscore';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const paths = [
  {
    id: "001",
    title: "Learn ABC",
    description: "This is a path for kids to learn the letters A, B and C.",
    prerequisites: "For ages 4 and up",
    open: true,
    tags: ["kids"],
    user: null,
    stepsId: ["001", "002", "003", "004"]
  },
  {
    id: "002",
    title: "Learn 123",
    description: "This is a path for kids to learn the numbers 1, 2 and 3",
    prerequisites: "For ages 4 and up",
    open: true,
    tags: ["kids"],
    user: null,
    stepsId: ["005", "006", "007", "008"]
  },
  {
    id: "003",
    title: "Basic HTML and CSS",
    description: "An introduction to building static web pages with HTML and CSS",
    prerequisites: "None",
    open: true,
    tags: ["web development", "computer science"],
    user: null,
    stepsId: []
  },
  {
    id: "004",
    title: "Javascript",
    description: "An introduction to javascript",
    prerequisites: "Some knowledge of HTML. No programming background required",
    open: false,
    tags: ["web development", "computer science"],
    user: null,
    stepsId: []
  },
  {
    id: "005",
    title: "Basic Computer Science",
    description: "An introduction to the concepts of computer science for self-taught programmers",
    prerequisites: "Some programming experience",
    open: true,
    tags: ["computer science"],
    user: null,
    stepsId: []
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (path) => {
  return replaceAll(path.title, ' ', '-');
};

class PathApi {
  static populateSteps(path) {
    path.steps = [];
    path.stepsId.forEach(id => {
      path.steps.push(mockStepApi.getStep(id));
    });
  }

  static getAllPaths() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let newPaths = [];
        paths.forEach((path) => {
          newPaths.push(this.populateSteps(path))
        });
        resolve(Object.assign([], paths));
      }, delay);
    });
  }

  static createPath(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       paths.push(path);
        resolve(Object.assign({}, path));
      }, delay);
    });
  }

  static updatePath(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let index = _.findIndex(paths, (pathfound) => pathfound.id === path.id);
        paths[index] = path;
        resolve(Object.assign({}, path));
      }, delay);
    });
  }

  static deletePath(pathId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPathToDelete = paths.findIndex(path => {
          path.pathId == pathId;
        });
        paths.splice(indexOfPathToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PathApi;
