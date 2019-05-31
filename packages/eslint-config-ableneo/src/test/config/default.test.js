import {runFixture} from "../utils";

describe("default config", () => {
  describe("no-errors", () => {
    it("should have no errors or warnings", () => {
      const report = runFixture("default/no-errors");

      expect(report.errorCount).toBe(0);
      expect(report.warningCount).toBe(0);
      report.results.forEach(res => {
        expect(res.messages).toEqual([]);
      });
    });
  });

  describe("class-assign-error", () => {
    it("should have an error and no warnings", () => {
      const report = runFixture("default/class-assign-error");

      expect(report.errorCount).toBe(1);
      expect(report.warningCount).toBe(0);

      const outputs = [
        [
          {
            column: 1,
            endColumn: 4,
            endLine: 7,
            line: 7,
            message: "'Foo' is a class.",
            messageId: "class",
            nodeType: "Identifier",
            ruleId: "no-class-assign",
            severity: 2,
          },
        ],
      ];

      report.results.forEach((res, index) => {
        expect(res.messages).toEqual(outputs[index]);
      });
    });
  });

  describe("unused-rest-vars", () => {
    it("should be allowed", () => {
      const report = runFixture("default/unused-rest-vars");

      expect(report.errorCount).toBe(0);
      expect(report.warningCount).toBe(0);
      report.results.forEach(res => {
        expect(res.messages).toEqual([]);
      });
    });
  });
});
