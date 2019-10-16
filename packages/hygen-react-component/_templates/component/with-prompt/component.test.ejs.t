---
to: src/<%= h.changeCase.paramCase(folder) %>/<%= h.changeCase.pascalCase(componentName) %>.test.tsx
---
<%
 ComponentName = h.changeCase.pascalCase(componentName);
%>
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import <%= ComponentName %> from "./<%= ComponentName %>";

describe("<%= ComponentName %>", () => {
  it("should render", () => {
    const props = {};
    const $ = render(<<%= ComponentName %> {...props} />);

    expect($.container).toBeInTheDocument();
  });
});
