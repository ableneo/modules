---
to: packages/<%= name.toLowerCase() %>/src/index.test.js
---
import indexFn from "./";

it("indexFn", () => {
  expect(indexFn()).toBe(null);
})


