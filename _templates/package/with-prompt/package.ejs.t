---
to: packages/<%= h.changeCase.paramCase(name) %>/package.json
sh: cd <%= cwd %> && yarn
---
{
  "name": "@ableneo/<%= h.changeCase.paramCase(name) %>",
  "version": "0.0.0",
  "description": "@ableneo/modules/<%= h.changeCase.paramCase(name) %>",
  "main": "dist/index.ts",
  "types": "dist/index.d.ts",
  "author": "Marcel Mokoš <https://github.com/marcelmokos>",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "test": "react-scripts test --watchAll=false",
    "test:changed": "yarn test --onlyChanged --passWithNoTests --silent",
    "test:watch": "react-scripts test",
    "test:update": "yarn test --updateSnapshot",
    "test:coverage": "yarn test --coverage --verbose --passWithNoTests --silent",
    "lint": "cd ../.. && yarn run lint",
    "lint:fix": "cd ../.. && yarn run lint:fix",
    "build": "webpack --mode=production",
    "watch": "webpack --watch --mode=development"
  },
  "dependencies": {},
  "devDependencies": {
    "@emotion/core": ">=10.0.0",
    "@emotion/styled": ">=10.0.0",
    "emotion": ">=10.0.0",
    "react": ">=16.8.0",
    "webpack-cli": "^3.3.0",
    "webpack-node-externals": "^1.7.2"
  },
  "peerDependencies": {
    "@emotion/core": ">=10.0.0",
    "@emotion/styled": ">=10.0.0",
    "emotion": ">=10.0.0",
    "react": ">=16.8.0"
  },
  "engines": {
    "node": ">=8.10"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ableneo/modules/tree/master/packages/<%= h.changeCase.paramCase(name) %>"
  },
  "eslintConfig": {
    "extends": "eslint-config-ableneo"
  }
}

