import delay from './delay';
import _ from 'underscore';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const steps = [
  {
    id: "001",
    pathId: "001",
    title: "The Letter A",
    description: "The first letter of the alphabet, introduced in song.",
    type: "video",
    url: "https://www.youtube.com/watch?v=beT_KcblaBI",
    optional: false,
    prerequisites: [],
    timeEstimate: 4,
    checklist: ["sing the song", "write the letter a", "find a word with the letter a"]
  },
  {
    id: "002",
    pathId: "001",
    title: "The Letter B",
    description: "The second letter of the alphabet, introduced in song.",
    type: "video",
    url: "https://www.youtube.com/watch?v=QZXvFQdebK8",
    optional: false,
    prerequisites: ["001"],
    timeEstimate: 4,
    checklist: ["sing the song", "write the letter b", "find a word with the letter b"]
  },
  {
    id: "003",
    pathId: "001",
    title: "The Letter B - advanced",
    description: "Wikipedia article about the letter B",
    type: "wiki",
    url: "https://en.wikipedia.org/wiki/B",
    optional: true,
    prerequisites: ["002"],
    timeEstimate: 4,
    checklist: ["the history of the letter b", "uses of the letter b in popular culture"]
  },
  {
    id: "004",
    pathId: "001",
    title: "The Letter C",
    description: "The second letter of the alphabet, introduced in song.",
    type: "video",
    url: "https://www.youtube.com/watch?v=ieo0LPYdUfQ",
    optional: false,
    prerequisites: ["002"],
    timeEstimate: 4,
    checklist: ["sing the song", "write the letter b", "find a word with the letter b"]
  },
  {
    id: "005",
    pathId: "002",
    title: "Learn 1",
    description: "The number 1, by Sesame Street",
    type: "video",
    url: "https://www.youtube.com/watch?v=E45ZZKPXX80",
    optional: false,
    prerequisites: [],
    timeEstimate: 4,
    checklist: ["sing the song", "write the number 1", "count to 1"]
  },
  {
    id: "006",
    pathId: "002",
    title: "Learn 2",
    description: "The number 2, by Sesame Street",
    type: "video",
    url: "https://www.youtube.com/watch?v=E-kMsBMh6Ng",
    optional: false,
    prerequisites: [],
    timeEstimate: 3,
    checklist: ["sing the song", "write the number 2", "count to 2"]
  },
  {
    id: "007",
    pathId: "002",
    title: "Learn 3",
    description: "The number 3 in song!",
    type: "book",
    url: "https://www.youtube.com/watch?v=W-SeOeSo7gY",
    optional: false,
    prerequisites: [],
    timeEstimate: 3,
    checklist: ["sing the song", "write the number 3", "count to 3"]
  },
  {
    id: "008",
    pathId: "002",
    title: "Practice counting",
    description: "Practice counting to three and down to one",
    type: "project",
    url: "",
    optional: false,
    prerequisites: [],
    timeEstimate: 3,
    checklist: ["write the numbers from 1 to 3", "write the numbers from 3 to 1"]
  },
  {
    id: "003",
    title: "Basic HTML and CSS",
    description: "An introduction to building static web pages with HTML and CSS",
    prerequisite: "None",
    open: true,
    tags: ["web development", "computer science"],
    user: null,
    stepsId: []
  },
  {
    id: "004",
    title: "Javascript",
    description: "An introduction to javascript",
    prerequisite: "Some knowledge of HTML. No programming background required",
    open: false,
    tags: ["web development", "computer science"],
    user: null,
    stepsId: []
  },
  {
    id: "005",
    title: "Basic Computer Science",
    description: "An introduction to the concepts of computer science for self-taught programmers",
    prerequisite: "Some programming experience",
    open: true,
    tags: ["computer science"],
    user: null,
    stepsId: []
  }
];

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }

// //This would be performed on the server in a real app. Just stubbing in.
// const generateId = (step) => {
//   return replaceAll(step.title, ' ', '-');
// };

class StepApi {
  static getStep(stepId) {
    return _.findWhere(steps, {id: stepId});
  }

  static createStep(step) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        steps.push(step);
        resolve(Object.assign({}, step));
      }, delay);
    });
  }

  static deletePath(stepId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPathToDelete = steps.findIndex(step => {
          step.stepId == stepId;
        });
        steps.splice(indexOfPathToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default StepApi;
