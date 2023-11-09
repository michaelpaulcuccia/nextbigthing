"use strict";
import styled from "styled-components";

const Root = styled.div`
  margin: 8px 6px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid
    ${({ bordercolor }) => (bordercolor ? bordercolor : "black")};
  background-color: ${({ backgroundcolor }) =>
    backgroundcolor ? backgroundcolor : "black"};
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
