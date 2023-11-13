"use strict";
import styled from "styled-components";

const Root = styled.div`
  margin: 8px 6px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid
    ${({ bordercolor }) => (bordercolor ? bordercolor : "black")};
  background: ${({ backgroundcolor }) =>
    backgroundcolor ? backgroundcolor : "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);"};
  color: ${({ color }) => (color ? color : "black")};
`;

export default function Box({
  children,
  className,
  bordercolor,
  backgroundcolor,
  color,
}) {
  return (
    <Root
      className={className}
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
      color={color}
    >
      {children}
    </Root>
  );
}
