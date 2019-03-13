---
to: packages/<%= h.changeCase.paramCase(name) %>/.babelrc
sh: cd <%= cwd %>/packages/<%= h.changeCase.paramCase(name) %> && yarn add -D @babel/core @babel/preset-env babel-jest
---
{
  "presets": [
    ["@babel/preset-env",
      {
        "targets": "> 0.25%, not dead"
      }
    ]
  ],
  "plugins": [],
  "env": {
    "test": {
      "presets": [
        [
          "@babel/env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ],
      "compact": false
    }
  }
}
