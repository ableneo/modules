module.exports = {
  // Prefer new line before return
  // http://eslint.org/docs/rules/padding-line-between-statements
  "padding-line-between-statements": [
    "error",
    {blankLine: "always", prev: "*", next: "return"},
    {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
    {
      blankLine: "any",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"],
    },
  ],

  // ## Best practices ###
  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  // airbnb default: "error"
  yoda: [
    "error",
    "never",
    {
      exceptRange: true,
    },
  ],
  // add culry braces all the time
  // https://eslint.org/docs/rules/curly
  // airbnb default: [error, multi-line]
  curly: ["error", "all"],
  // empty catch should not give lint error
  // https://eslint.org/docs/rules/no-empty#disallow-empty-block-statements-no-empty
  "no-empty": ["error", {allowEmptyCatch: true}],
  // allow irregular whitespace outside of strings and comments
  // Solves inline snapshots complains, leave this to prettier
  // https://eslint.org/docs/rules/no-irregular-whitespace
  "no-irregular-whitespace": "off",

  // Debugging is allowed but not allowed to commit
  "no-console": "warn",
  "no-debugger": "warn",
};
