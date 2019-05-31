const merge = require("merge");

module.exports = {
  extends: [
    // https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app
    "react-app",
    // https://github.com/yannickcr/eslint-plugin-react
    "plugin:react/recommended",
  ],
  rules: merge(
    require("./rules/best-practices"),
    require("./rules/imports"),
    require("./rules/react"),
    require("./rules/prettier"),
  ),
};
