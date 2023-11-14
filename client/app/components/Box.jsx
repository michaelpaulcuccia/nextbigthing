"use client";
import styled from "styled-components";
import Image from "next/image";
import * as breakpoints from '../constants/breakpoints';

const Root = styled.div`
  width: 30rem;
  height: 15rem;
  border-radius: 15rem 15rem 0 0;
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "black"};
  border: ${(props) => props.border || "black"};
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;

  * {
    margin: 0 auto;
  }

  h2, p {
    letter-spacing: 1.5px;

    @media (min-width: ${breakpoints.MOBILE}) {
      letter-spacing: 0;
    }
  }

  h2 {
    padding-top: 3px;
  }

  table {
    padding-top: 28px;
    width: 24rem;
    text-align: center;
  }

`;


export default function Box({
  className,
  border,
  background,
  color,
  activityType,
  image,
  date,
  time,
  stat1,
  stat2,
  stat3,
  statData1,
  statData2,
  statData3
}) {
  return (
    <Root
      className={className}
      border={border}
      background={background}
      color={color}
    >
      <Overlay>
          <Image src={image} width={25} height={25} alt=""/>
          <h2>{activityType}</h2>
          <p>{date}, {time}</p>
          <table>
            <tr>
              <th>{statData1}</th>
              <th>{statData2}</th>
              <th>{statData3}</th>
            </tr>
            <tbody>
              <td>{stat1}</td>
              <td>{stat2}</td>
              <td>{stat3}</td>
            </tbody>
          </table>
      </Overlay>
    </Root>
  );
}
