import React from "react";

const defaultPropsTsx = {
  fn: (value) => value,
  voidFn: (value) => {},
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
