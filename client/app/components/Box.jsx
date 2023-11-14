"use strict";
import styled, { keyframes } from "styled-components";

const myAnim = keyframes`
  0% {
		  opacity: 0;
		  transform: translateX(250px);
	  }

	  100% {
		  opacity: 1;
		  transform: translateX(0);
	}
`;

const Root = styled.div`
  margin: 8px 6px;
  padding: 8px;
  border-radius: 8px;
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "black"};
  border: ${(props) => props.border || "black"};
  animation: ${myAnim} 1s ease-in-out 0s 1 normal forwards;
`;

export default function Box({
  children,
  className,
  border,
  background,
  color,
}) {
  return (
    <Root
      className={className}
      border={border}
      background={background}
      color={color}
    >
      {children}
    </Root>
  );
}
