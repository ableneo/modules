// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const getFolderNames = require("../getFolderNames");

const folders = getFolderNames(/* default = "src" */);

module.exports = [
  {
    type: "autocomplete",
    name: "folder",
    message: "Pick folder for the component:",
    limit: 10,
    choices: folders,
  },
  {
    type: "input",
    name: "componentName",
    message: "Name of the component:",
  },
];
