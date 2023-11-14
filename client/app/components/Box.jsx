"use client";
import styled from "styled-components";
import Image from "next/image";
import * as breakpoints from '../constants/breakpoints';

const Root = styled.div`
  width: 20rem;
  height: 12rem;
  border-radius: 12rem 12rem 0 0;
  color: white;
  background: ${(props) => props.background || "black"};
  position: relative;
  margin: 8px;

  //DESKTOP
  @media (min-width: ${breakpoints.MOBILE}) {
    width: 30rem;
    height: 15rem;
    border-radius: 15rem 15rem 0 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;

  //DESKTOP
  @media (min-width: ${breakpoints.MOBILE}) {
    top: 22%;
  }

  * {
    margin: 0 auto;
  }

  h2, p {
    letter-spacing: .75px;

    //DESKTOP
    @media (min-width: ${breakpoints.MOBILE}) {
      letter-spacing: 1.5;
    }
  }

  h2 {
    padding-top: 3px;
  }

  table {
    padding-top: 16px;
    width: 19rem;
    text-align: center;
    font-size: 12px;

    //DESKTOP
      @media (min-width: ${breakpoints.MOBILE}) {
      padding-top: 28px;
      width: 24rem;
      font-size: 16px;
    }
  }

`;


export default function Box({
  className,
  background,
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
      background={background}
    >
      <Overlay>
          <Image src={image} width={25} height={25} alt=""/>
          <h2>{activityType}</h2>
          <p>{date}, {time}</p>
          <table>
            <tbody>
              <tr>
                <th>{statData1}</th>
                <th>{statData2}</th>
                <th>{statData3}</th>
              </tr>
              <tr>
                <td>{stat1}</td>
                <td>{stat2}</td>
                <td>{stat3}</td>
              </tr>
            </tbody>
          </table>
      </Overlay>
    </Root>
  );
}
