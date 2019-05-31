import fs from "fs";

it("match eslintrc", () => {
  const text = JSON.parse(
    fs.readFileSync("./src/output/eslintrc.json", "utf8"),
  );

  text.parser = text.parser.replace(/\S*node_modules/, "./node_modules");

  expect(text).toMatchSnapshot();
});
