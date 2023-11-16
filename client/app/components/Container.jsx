"use client";

import React from 'react';
import styled from 'styled-components';
import * as breakpoint from '../constants/breakpoints';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 12px;
  margin-left: auto;
  margin-right: auto;

   //DESKTOP
   @media (min-width: ${breakpoint.MOBILE}) {
      max-width: 1200px;
    }
`;

export default function Container({children}) {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}
