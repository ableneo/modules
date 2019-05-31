const merge = require("merge");

module.exports = merge(
  {
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: false,
        trailingComma: "all",
      },
    ],
  },
  require("eslint-config-prettier").rules,
  require("eslint-config-prettier/flowtype").rules,
  require("eslint-config-prettier/@typescript-eslint").rules,
  require("eslint-config-prettier/react").rules,
);
