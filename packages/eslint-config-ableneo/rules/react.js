module.exports = {
  // do not force jsx use js
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  "react/jsx-filename-extension": "off",
  // Outdated rule
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
  "react/display-name": "off",
  // Types > PropTypes
  // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/explicit-function-return-type.md
  "react/prop-types": "off",
  // Require stateless functions when not using lifecycle methods, setState or ref
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  "react/prefer-stateless-function": "warn",
  // no longer defined
  "jsx-a11y/href-no-hash": "off",
};
