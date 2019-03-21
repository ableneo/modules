// generated file from .eslintrc.yml
module.exports =
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "react-app",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "plugins": [
    "jest",
    "prettier"
  ],
  "env": {
    "jasmine": true,
    "jest": true,
    "jest/globals": true,
    "shared-node-browser": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "bracketSpacing": false
      }
    ],
    "newline-before-return": "error",
    "yoda": [
      "error",
      "never",
      {
        "exceptRange": true
      }
    ],
    "curly": [
      "error",
      "all"
    ],
    "import/prefer-default-export": "off",
    "no-console": "warn",
    "no-debugger": "warn",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "warn",
    "jsx-a11y/href-no-hash": "off",
    "no-irregular-whitespace": [
      "off"
    ]
  }
}
