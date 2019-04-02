// commitlint.config.js
module.exports = {
  extends: [
    "@commitlint/config-conventional", // scoped packages are not prefixed
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "feature",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
