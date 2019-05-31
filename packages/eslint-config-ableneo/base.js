module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
    // https://www.npmjs.com/package/eslint-plugin-jest#usage
    "jest/globals": true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"],
      },
    },
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },
};
