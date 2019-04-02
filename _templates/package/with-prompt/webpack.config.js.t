---
to: packages/<%= h.changeCase.paramCase(name) %>/webpack.config.js
---
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".webpack.js", ".json"],
  },
  // Source maps support ("inline-source-map" also works)
  devtool: "source-map",
  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

      // All output ".js" and "jsx" files will have any sourcemaps re-processed by "source-map-loader".
      {enforce: "pre", test: /\.jsx?$/, loader: "source-map-loader"},
    ],
  },
};
