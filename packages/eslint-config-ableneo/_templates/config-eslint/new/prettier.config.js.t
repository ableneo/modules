---
to: prettier.config.js
sh: cd <%= cwd %> && yarn add -D @ableneo/prettier-config prettier
---
module.exports = require("@upsace/prettier-config")
