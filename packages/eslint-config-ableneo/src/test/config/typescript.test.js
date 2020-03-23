import {runFixture} from "../utils";

describe("typescript", () => {
  describe("multiple exports", () => {
    it("should have no errors or warnings", () => {
      const report = runFixture("typescript/multiple-exports");

      expect(report.errorCount).toBe(0);
      expect(report.warningCount).toBe(0);
      report.results.forEach((res) => {
        expect(res.messages).toEqual([]);
      });
    });
  });
});
