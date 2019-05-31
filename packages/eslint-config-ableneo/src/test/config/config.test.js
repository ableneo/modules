import {CLIEngine} from "eslint";
import path from "path";

describe("config", () => {
  it("full eslintrc.json", () => {
    const fixturePath = path.resolve(__dirname, "fixtures", "utils.js");
    const cliEngine = new CLIEngine({});

    expect({
      ...cliEngine.getConfigForFile(fixturePath),
      parser: "[parser]",
    }).toMatchSnapshot();
  });
});
