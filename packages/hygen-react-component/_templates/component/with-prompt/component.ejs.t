---
to: src/<%= h.changeCase.paramCase(folder) %>/<%= h.changeCase.pascalCase(componentName) %>.tsx
---
<%
 ComponentName = h.changeCase.pascalCase(componentName);
%>
import React from "react";
import styled from "@emotion/styled";

const defaultProps = {
  Wrapper: styled("div")`
    display: flex;
    width: 100%;
  `,
  Group: styled("div")`
    display: flex;
  `,
};

type Props = Readonly<typeof defaultProps & {}>;

type Children = (props: Props) => JSX.Element;
export const <%= ComponentName %> = ({children, ...props}: {children: Children} & Props) =>
  children(props);

<%= ComponentName %>.defaultProps = {
  ...defaultProps,
  children: ({Wrapper, Group}: Props) => (
    <Wrapper>
      <Group>A</Group>
      <Group>B</Group>
      <Group>C</Group>
    </Wrapper>
  ),
};

export default <%= ComponentName %>;
