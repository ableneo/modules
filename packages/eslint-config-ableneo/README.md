# eslint-config-ableneo

[![npm version](https://img.shields.io/npm/v/eslint-config-ableneo.svg?style=flat)](https://www.npmjs.com/package/eslint-config-ableneo) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://travis-ci.org/ableneo/eslint-config-ableneo.svg?branch=master)](https://travis-ci.org/ableneo/eslint-config-ableneo) [![dependency](https://david-dm.org/ableneo/eslint-config-ableneo/status.svg)](https://david-dm.org/ableneo/eslint-config-ableneo) [![devDep](https://david-dm.org/ableneo/eslint-config-ableneo/dev-status.svg)](https://david-dm.org/ableneo/eslint-config-ableneo?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/ableneo/eslint-config-ableneo/badge.svg)](https://snyk.io/test/github/ableneo/eslint-config-ableneo)

This package provides Airbnb's [.eslintrc.yml](https://github.com/ableneo/eslint-config-ableneo/blob/master/.eslintrc.yml) with prettier as an extensible shared config.

- If you do not want to install and setup eslint with all configs and plugins.
- Install and extend eslint-config-ableneo it works as [create-react-app](https://github.com/facebookincubator/create-react-app) but for eslint, linting with prettier.

Origin of this config is in https://github.com/marcelmokos/eslint-config-with-prettier.

# Usage

## 1. install config

```bash
yarn add --dev eslint-config-ableneo
```

or

```bash
npm install --dev eslint-config-ableneo
```

If using npm 5+, use this shortcut
```bash
npx install-peerdeps --dev eslint-config-ableneo
```

## 2. extend config

- .eslintrc.yml

```yaml
extends:
  - eslint-config-ableneo
```

- .eslintrc.js

```js
module.exports = {
  extends: ["eslint-config-ableneo"],
};
```

- .eslintrc.json

```json
{
  "extends": ["eslint-config-ableneo"]
}
```

# You can expect

- linting using eslint
- extended Airbnb config
- pretty printing using [prettier](https://www.npmjs.com/package/prettier) on `eslint --fix`
- bash script for additional setup

Tools:

- [prettier](https://www.npmjs.com/package/prettier)

Configs:

- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)

Plugins:

- [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

### adding support to [eslint-plugin-dollar-sign](https://www.npmjs.com/package/eslint-plugin-dollar-sign)

- helpful for ES6 code that uses jQuery

```yaml
extends:
  - eslint-config-ableneo
plugins:
  # https://github.com/erikdesjardins/eslint-plugin-dollar-sign
  - dollar-sign
rules:
  # Require dollar sign for some variables that holds jQuery objects
  dollar-sign/dollar-sign:
    - error
    - ignoreProperties
```

- .eslintrc.js

```js
module.exports = {
  extends: ["eslint-config-ableneo"],
  plugins: ["dollar-sign"],
  rules: {
    "dollar-sign/dollar-sign": ["error", "ignoreProperties"],
  },
};
```

- .eslintrc.json

```json
{
  "extends": ["eslint-config-ableneo"],
  "plugins": ["dollar-sign"],
  "rules": {
    "dollar-sign/dollar-sign": ["error", "ignoreProperties"]
  }
}
```
