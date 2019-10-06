import getFolderNames from "../_templates/component/getFolderNames";

const path = require("path");

it("should return folders", () => {
  console.log(path.posix.join(__dirname));

  expect(
    getFolderNames("", {getPath: () => path.posix.join(__dirname)}),
  ).toEqual(["atoms", "molecules", "organisms"]);
});
