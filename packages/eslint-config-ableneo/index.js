const merge = require("merge");

module.exports = {
  extends: [
    "eslint-config-ableneo/core",
    "eslint-config-ableneo/flow",
    "eslint-config-ableneo/typescript",
    "eslint-config-ableneo/react",
  ],
  rules: merge(require("./rules/deprecated"), require("./rules/prettier")),
};
