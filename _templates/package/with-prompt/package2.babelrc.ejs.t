---
to: packages/<%= h.changeCase.paramCase(name) %>/.babelrc
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
