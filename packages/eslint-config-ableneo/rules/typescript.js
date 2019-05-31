module.exports = {
  // Build and other not compiled files should have option to use require
  // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-var-requires.md
  "@typescript-eslint/no-var-requires": "off",
  // Requring to provide accessibility in React seem unnecessary
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
  "@typescript-eslint/explicit-member-accessibility": "off",
  // It complains a lot when working with react destructuring
  // Disallow unused variables
  "@typescript-eslint/no-unused-vars": "off",
  // Sometimes is better to leave typescript to infer type
  // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/explicit-function-return-type.md
  "@typescript-eslint/explicit-function-return-type": "off",
  // Order of types and other declarations can be used before define
  // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-use-before-define.md
  "@typescript-eslint/no-use-before-define": [
    "off",
    {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
    },
  ],
  // There is no other way for nested objects
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-object-literal-type-assertion.md
  "@typescript-eslint/no-object-literal-type-assertion": "off",
  // Typescript with components composition is complicated to type without any
  // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-explicit-any.md
  "@typescript-eslint/no-explicit-any": "off",
};
