const fs = require("fs");
const getPath = require("./getPath");

module.exports = (srcFolderName = "src", options = {getPath}) => {
  const srcPath = options.getPath(srcFolderName);

  return fs
    .readdirSync(srcPath)
    .filter(appFolderName => !appFolderName.includes("."))
    .filter(appFolderName => !appFolderName.includes("build"));
};
