module.exports = {
  root: true,
  extends: ['eslint-config-ableneo'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
