const path = require("path");

module.exports = (srcFolderName = "src") => {
  return path.posix.join(process.cwd(), srcFolderName);
};
