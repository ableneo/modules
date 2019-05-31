import {runFixture} from "../utils";

describe("react", () => {
  describe("sort comp", () => {
    it("should have no errors or warnings", () => {
      const report = runFixture("react/sort-comp-no-errors");

      expect(report.errorCount).toBe(0);
      expect(report.warningCount).toBe(0);
      report.results.forEach(res => {
        expect(res.messages).toEqual([]);
      });
    });

    describe("defaultProps", () => {
      it("should have no errors or warnings [tsx]", () => {
        const report = runFixture("react/no-error-default-props-tsx", {
          fix: true,
        });
        const result = report.results[0];

        expect(result.output).toMatchInlineSnapshot(`
          "import React from \\"react\\";
          
          const defaultPropsTsx = {
            fn: value => value,
            voidFn: value => {},
            A: () => <div>a</div>,
            B: () => <div>b</div>,
            C: () => <div>c</div>,
            children: ({fn, voidFn, A, B, C, ...otherProps}) => (
              <>
                <A onClick={fn} />
                <B />
                <C />
              </>
            ),
          };
          
          export const Component: React.FC<typeof defaultPropsTsx> = ({
            children,
            ...props
          }: typeof defaultPropsTsx) => {
            return children(props as any);
          };
          
          Component.defaultProps = defaultPropsTsx;
          "
        `);
        expect(result.messages).toEqual([]);
        expect(report.errorCount).toBe(0);
        expect(report.warningCount).toBe(0);
      });

      it("should have no errors or warnings [jsx]", () => {
        const report = runFixture("react/no-error-default-props", {fix: true});
        const result = report.results[0];

        expect(result.output).toMatchInlineSnapshot(`
          "import React from \\"react\\";
          
          const defaultProps = {
            fn: value => value,
            voidFn: value => {},
            A: () => <div>a</div>,
            B: () => <div>b</div>,
            C: () => <div>c</div>,
            children: ({fn, voidFn, A, B, C, ...otherProps}) => (
              <>
                <A onClick={fn} />
                <B />
                <C />
              </>
            ),
          };
          
          export const Component = ({children, ...props}) => {
            return children(props);
          };
          
          Component.defaultProps = defaultProps;
          "
        `);
        expect(result.messages).toEqual([]);
        expect(report.errorCount).toBe(0);
        expect(report.warningCount).toBe(0);
      });
    });
  });
});
