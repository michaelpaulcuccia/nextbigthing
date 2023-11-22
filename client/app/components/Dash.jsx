import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background: blue;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div``;

const BottomContainer = styled.div``;

export default function Dash({ children }) {
  return (
    <Root>
      <TopContainer>{children}</TopContainer>
      <BottomContainer></BottomContainer>
    </Root>
  );
}
