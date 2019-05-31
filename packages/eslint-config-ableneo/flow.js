const merge = require("merge");

module.exports = {
  extends: [
    // https://github.com/gajus/eslint-plugin-flowtype
    "plugin:flowtype/recommended",
  ],
  rules: merge(require("./rules/flow"), require("./rules/prettier")),
};
