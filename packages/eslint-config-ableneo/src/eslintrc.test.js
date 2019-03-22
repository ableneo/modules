// @flow
import fs from "fs";

it("match eslintrc", () => {
  const text = fs.readFileSync("./src/output/eslintrc.json", "utf8");

  expect(text).toMatchSnapshot();
});

it("match for flow", () => {
  const text = fs.readFileSync("./src/output/test-markup.js", "utf8");

  expect(text).toMatchSnapshot();
});

it("match for typescipt", () => {
  const text = fs.readFileSync(
    "./src/output/test-markup-typescipt.tsx",
    "utf8",
  );

  expect(text).toMatchSnapshot();
});
