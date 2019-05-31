import React from "react";

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
