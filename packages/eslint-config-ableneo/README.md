---
menu: eslint-config-ableneo
name: Readme
---

# eslint-config-ableneo

[![npm version](https://img.shields.io/npm/v/eslint-config-ableneo.svg?style=flat)](https://www.npmjs.com/package/eslint-config-ableneo)
![node](https://img.shields.io/node/v/eslint-config-ableneo.svg)
[![Build Status](https://travis-ci.org/ableneo/tools.svg?branch=master)](https://travis-ci.org/ableneo/tools/packages/eslint-config-ableneo)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) 
[![NPM downloads](https://img.shields.io/npm/dt/eslint-config-ableneo.svg)](https://www.npmjs.com/package/eslint-config-ableneo)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
![GitHub](https://img.shields.io/github/license/ableneo/tools.svg)

This package extends [eslint-config-react-app](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js) with prettier.

[![support typescript](https://img.shields.io/badge/support-typescript-blue.svg)](https://www.typescriptlang.org/)
[![support typescript](https://img.shields.io/badge/support-flow-yellow.svg)](https://flow.org)
[![support typescript](https://img.shields.io/badge/uses-prettier-ff69b4.svg)](https://flow.org)
- One config for vanilla javascript, [flow](https://flow.org/), and [TypeScript](https://www.typescriptlang.org/)
- Use this config if you do not want to setup eslint with all configs and plugins.
- Install and extend eslint-config-ableneo it works as [create-react-app react-scripts](https://github.com/facebookincubator/create-react-app) but for eslint, linting with prettier.

Origin of this config is in https://github.com/marcelmokos/eslint-config-with-prettier. 
![npm](https://img.shields.io/npm/dt/eslint-config-with-prettier.svg)

# You can expect

- linting using eslint
- extended [eslint-config-react-app](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js)
- pretty printing using [prettier](https://www.npmjs.com/package/prettier) on `eslint --fix`
- bash script for additional setup

Tools:

- [prettier](https://www.npmjs.com/package/prettier)

Configs:

- [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) 
- [plugin:react/recommended](https://github.com/yannickcr/eslint-plugin-react)
- [plugin:flowtype/recommended](https://github.com/gajus/eslint-plugin-flowtype)
- [plugin:jest/recommended](https://www.npmjs.com/package/eslint-plugin-jest)
- [plugin:@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-config-prettier/flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [eslint-config-prettier/@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-config-prettier/react](https://github.com/yannickcr/eslint-plugin-react)

Plugins:

- [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)


# Usage

## 1. install config

```bash
yarn add --dev eslint-config-ableneo react-scripts
```

or

```bash
npm install --save-dev eslint-config-ableneo react-scripts
```

If using npm 5+, use this shortcut for installing peerDependencies
```bash
npx install-peerdeps --dev eslint-config-ableneo
```

To allow **typescript** add following devDependencies
```bash
yarn add --dev typescript @typescript-eslint/eslint-plugin@1.x @typescript-eslint/parser@1.x
```
or
```bash
npm install --save-dev typescript @typescript-eslint/eslint-plugin@1.x @typescript-eslint/parser@1.x
```

## 2. extend config
To extend config use one of the following methods. Recommended is to use `.yaml`.

- `package.json`
```json
{
  "eslintConfig": {
    "extends": "eslint-config-ableneo"
  }
}
```
- `.eslintrc.yml`
```yaml
extends:
  - eslint-config-ableneo
```

- `.eslintrc.js`

```js
module.exports = {
  extends: ["eslint-config-ableneo"],
};
```

- `.eslintrc.json`

```json
{
  "extends": ["eslint-config-ableneo"]
}
```

## 3. lint code
- add to package.json
```json
{
  "scripts": {
    "lint": "eslint . --cache --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "yarn lint --fix"
  }
}
```
- run bash script
```bash
yarn run lint
yarn run lint:fix
```
or
```bash
npm run test
npm run lint:fix
```

## adding or overriding rules
#### support for another plugin like [eslint-plugin-dollar-sign](https://www.npmjs.com/package/eslint-plugin-dollar-sign)
- helpful for ES6 code that uses jQuery

- `package.json`
```json
{
  "eslintConfig": {
    "extends": "eslint-config-ableneo",
    "plugins": ["dollar-sign"],
    "rules": {
      "dollar-sign/dollar-sign": ["error", "ignoreProperties"]
    }
  }
}
```

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

- `.eslintrc.js`

```js
module.exports = {
  extends: ["eslint-config-ableneo"],
  plugins: ["dollar-sign"],
  rules: {
    "dollar-sign/dollar-sign": ["error", "ignoreProperties"],
  },
};
```

- `.eslintrc.json`

```json
{
  "extends": ["eslint-config-ableneo"],
  "plugins": ["dollar-sign"],
  "rules": {
    "dollar-sign/dollar-sign": ["error", "ignoreProperties"]
  }
}
```
