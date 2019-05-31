const merge = require("merge");

module.exports = {
  extends: [
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    "plugin:@typescript-eslint/recommended",
  ],
  rules: merge(require("./rules/typescript"), require("./rules/prettier")),
};
