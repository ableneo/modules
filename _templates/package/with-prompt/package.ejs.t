---
to: packages/<%= h.changeCase.paramCase(name) %>/package.json
---
{
  "name": "@ableneo/<%= h.changeCase.paramCase(name) %>",
  "version": "0.0.0",
  "description": "@ableneo/tools/<%= h.changeCase.paramCase(name) %>",
  "main": "dist/index.js",
  "module": "dist/index.es.js",
  "author": "Marcel Mokoš <https://github.com/marcelmokos>",
  "license": "MIT",
  "scripts": {
    "test": "jest",
    "test:changed": "yarn test --onlyChanged --passWithNoTests --silent",
    "test:watch": "yarn test --watch",
    "test:update": "yarn test --update",
    "test:coverage": "yarn test:changed --coverage --verbose",
    "build": "rollup -f cjs -i src/index.js -o dist/index.js && lerna exec && rollup -f esm -i src/index.js -o dist/index.es.js"
  },
  "devDependencies": {
    "babel-jest": "^24.5.0",
    "jest": "^24.5.0"
  },
  "engines": {
    "node": ">=8"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ableneo/tools/tree/master/packages/<%= h.changeCase.paramCase(name) %>"
  }
}

