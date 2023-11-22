import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background: blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TopOne = styled.div`
  padding-right: 16px;
  width: 49%;
`;

const TopDivide = styled.div`
  width: 4px;
  border-radius: 8px;
  background: gray;
`;

const TopTwo = styled.div`
  padding-left: 16px;
  width: 49%;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

const BottomOne = styled.div`
  width: 33%;
`;

const BottomTwo = styled.div`
  width: 33%;
`;

const BottomThree = styled.div`
  width: 33%;
`;

export default function Dash({
  topOne,
  topTwo,
  bottonOne,
  bottomTwo,
  bottomThree,
}) {
  return (
    <Root>
      <TopContainer>
        <TopOne>{topOne}</TopOne>
        <TopDivide />
        <TopTwo>{topTwo}</TopTwo>
      </TopContainer>
      <BottomContainer>
        <BottomOne>{bottonOne}</BottomOne>
        <BottomTwo>{bottomTwo}</BottomTwo>
        <BottomThree>{bottomThree}</BottomThree>
      </BottomContainer>
    </Root>
  );
}
