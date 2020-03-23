import {runFixture} from "../utils";

describe("react", () => {
  describe("sort comp", () => {
    it("should have no errors or warnings", () => {
      const report = runFixture("react/sort-comp-no-errors");

      expect(report.errorCount).toBe(0);
      expect(report.warningCount).toBe(0);
      report.results.forEach((res) => {
        expect(res.messages).toEqual([]);
      });
    });

    describe("defaultProps", () => {
      it("should have no errors or warnings [tsx]", () => {
        const report = runFixture("react/no-error-default-props-tsx", {
          fix: true,
        });
        const result = report.results[0];

        expect(result.output).toMatchInlineSnapshot(`undefined`);
        expect(result.messages).toEqual([]);
        expect(report.errorCount).toBe(0);
        expect(report.warningCount).toBe(0);
      });

      it("should have no errors or warnings [jsx]", () => {
        const report = runFixture("react/no-error-default-props", {fix: true});
        const result = report.results[0];

        expect(result.output).toMatchInlineSnapshot(`undefined`);
        expect(result.messages).toEqual([]);
        expect(report.errorCount).toBe(0);
        expect(report.warningCount).toBe(0);
      });
    });
  });
});
