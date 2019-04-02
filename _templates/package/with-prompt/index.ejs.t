---
to: packages/<%= h.changeCase.paramCase(name) %>/src/index.ts
---
export default (name: string): string => `Hello ${name}`;
