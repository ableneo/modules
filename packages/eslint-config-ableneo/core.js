const merge = require("merge");

module.exports = {
  extends: [
    "eslint-config-ableneo/base",
    // https://eslint.org/docs/rules/
    "eslint:recommended",
    // https://www.npmjs.com/package/eslint-plugin-jest
    "plugin:jest/recommended",
    // https://github.com/prettier/eslint-plugin-prettier
    "plugin:prettier/recommended",
  ],
  plugins: [
    // https://www.npmjs.com/package/eslint-plugin-jest
    "jest",
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier",
    "import",
  ],
  rules: merge(
    require("./rules/best-practices"),
    require("./rules/imports"),
    require("./rules/prettier"),
  ),
};
