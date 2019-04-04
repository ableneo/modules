---
to: packages/<%= h.changeCase.paramCase(name) %>/package.json
sh: yarn
---
{
  "name": "@ableneo/<%= h.changeCase.paramCase(name) %>",
  "version": "0.0.0",
  "description": "@ableneo/modules/<%= h.changeCase.paramCase(name) %>",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "author": "Marcel Mokoš <https://github.com/marcelmokos>",
  "license": "MIT",
  "scripts": {
    "test": "react-scripts test --no-watch",
    "test:changed": "yarn test --onlyChanged --passWithNoTests --silent",
    "test:watch": "react-scripts test",
    "test:update": "yarn test --updateSnapshot",
    "test:coverage": "yarn test:changed --coverage --verbose",
    "lint": "cd ../.. && yarn run lint",
    "lint:fix": "cd ../.. && yarn run lint:fix",
    "build": "webpack --mode=production",
    "watch": "webpack --watch --mode=development"
  },
  "dependencies": {},
  "devDependencies": {},
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

