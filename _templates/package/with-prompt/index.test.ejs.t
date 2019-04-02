---
to: packages/<%= h.changeCase.paramCase(name) %>/src/index.test.ts
---
import indexFn from "./index";

it("indexFn", () => {
  expect(indexFn("world")).toBe("Hello world");
});
