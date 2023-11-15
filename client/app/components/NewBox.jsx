import React from 'react';
import Image from "next/image";
import styled from 'styled-components';
import * as breakpoint from '../constants/breakpoints';

import hiking from '../assets/icons/hiking.svg';

const Root = styled.div`
    background: #161626;
    border-radius: 20px;
    padding: 16px 12px 18px 12px;
    display: flex;
    flex-direction: column;
    
    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        width: 550px;
        padding: 24px 32px;
    }

`;

const ActivityContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;

    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        flex-direction: row;
        align-items: center;
    }
`;


const ActivityTitle = styled.p`
    align-self: flex-start;
    color: #79797F;

    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        font-size: 42px;
        font-weight: 300;
        letter-spacing: 1.5px;
        margin-left: 3px;
    }
`;

const DateTimeContainer = styled.div`
    margin-right: auto;
    color: #79797F;

    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        margin-left: auto;
    }
`;

const TableContainer = styled.div`
    padding-top: 12px;

    //DESKTOP
    @media (min-width: ${breakpoint.MOBILE}) {
        padding-top: 24px;
    }

    table {
        text-align: center;
        width: 100%;
        font-size: 12px;
        //color: #2F80ED;
        color: #fff;
        border-radius: 6px;

        @media (min-width: ${breakpoint.MOBILE}) {
            font-size: 16px;
        }
        
    }

    th {
        padding: 3px 0;
        font-weight: 300;
        
    }

    td {
        padding: 1.5px 0;
        font-weight: 100;
    }
`;

export default function NewBox() {
  return (
    <Root>
        <ActivityContainer>
            <Image src={hiking} width={32} height={32} alt=""/>
            <ActivityTitle>Hiking</ActivityTitle>
            <DateTimeContainer>11/15/2023, 1027hrs.</DateTimeContainer>
        </ActivityContainer>
        <TableContainer>
            <table>
                <tbody>
                <tr>
                    <th>HEAD</th>
                    <th>HEAD</th>
                    <th>HEAD</th>
                </tr>
                <tr>
                    <td>DATA</td>
                    <td>DATA</td>
                    <td>DATA</td>
                </tr>
                </tbody>
            </table>
        </TableContainer>
    </Root>
  )
}
