---
to: packages/<%= h.changeCase.paramCase(name) %>/src/index.test.js
---
import indexFn from ".";

it("indexFn", () => {
  expect(indexFn()).toBe(null);
});


