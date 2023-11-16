import React from 'react';
import Image from "next/image";
import styled from 'styled-components';
import * as breakpoint from '../constants/breakpoints';

const Root = styled.div`
    background: #161626;
    border-radius: 20px;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    width: 320px;
    margin: 16px 8px;    
    
    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        width: 475px;
        padding: 24px 16px;
        margin: 24px 8px;
    }

`;

const ActivityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #79797F;

    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        flex-direction: row;
        align-items: center;
    }
`;


const ActivityTitle = styled.p`
    margin-left: 0;
    font-size: 24px;

    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        font-size: 42px;
        font-weight: 300;
        letter-spacing: 1.5px;
        margin-left: 5px;
    }
`;

const DateTimeContainer = styled.div`
    margin-left: 0;
    font-size: 14px;

    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        margin-left: auto;
        font-size: 18px;
    }
`;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #79797F;
    padding-top: 16px;

    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        padding-top: 24px;
        flex-direction: row;
        justify-content: space-evenly;
    }

`;

export default function Box({
    activityType,
    image,
    date,
    time,
    stat1,
    stat2,
    stat3,
    stat1Title,
    stat2Title,
    stat3Title
}) {
  return (
    <Root>
        <ActivityContainer>
            <Image src={image} width={32} height={32} alt=""/>
            <ActivityTitle>{activityType}</ActivityTitle>
            <DateTimeContainer>{date}, {time}</DateTimeContainer>
        </ActivityContainer>
        <DataContainer>
                <div>{stat1Title} : {stat1}</div>
                <div>{stat2Title} : {stat2}</div>
                <div>{stat3Title}: {stat3}</div>
        </DataContainer>
    </Root>
  )
}
