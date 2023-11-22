"use client";
import React, { useContext } from "react";
import ActivityContext from "./context/ActivitiesContext";
import Box from "./components/Box";
import Dash from "./components/Dash";

import walking from "./assets/icons/walking.svg";
import breathwork from "./assets/icons/breathwork.svg";
import hiking from "./assets/icons/hiking.svg";

export default function Home() {
  let activityData;
  const { contextActivity } = useContext(ActivityContext);
  activityData = contextActivity;

  let arrWithLatestActivity;
  function getLatestWorkout(arg) {
    //create an empty array for unsorted time
    let unsortedDatesArr = [];

    //put all times into an array
    arg.forEach((item) => {
      let obj = {};
      obj.dateAuto = item.dateAuto;
      unsortedDatesArr.push(obj);
    });

    //sort time array
    const sortedDatesArr = unsortedDatesArr.sort(
      (a, b) => new Date(b) - new Date(a)
    );

    //get last item of sorted Array (most recent time)
    const latestItemArr = sortedDatesArr.pop();
    //make item a string
    const lastestItem = latestItemArr.dateAuto;

    //filter activityData using time
    return (arrWithLatestActivity = arg.filter(
      (item) => item.dateAuto === lastestItem
    ));
  }

  if (activityData.length) {
    getLatestWorkout(activityData);
  }

  return (
    <>
      <Dash
        topOne="Bresaola biltong turkey brisket jerky pork chop. Pork chop tenderloin chicken pork loin sausage alcatra chuck flank."
        topTwo={
          arrWithLatestActivity &&
          arrWithLatestActivity.map((item, i) => (
            <Box
              key={i}
              activityType={item.activityType}
              image={
                item.activityType === "Walking"
                  ? walking
                  : item.activityType === "Hiking"
                  ? hiking
                  : item.activityType === "Breathwork"
                  ? breathwork
                  : null
              }
              date={item.date}
              time={item.time}
              stat1Title={item.stat1Title}
              stat1={item.stat1}
              stat2Title={item.stat2Title}
              stat2={item.stat2}
              stat3Title={item.stat3Title}
              stat3={item.stat3}
            />
          ))
        }
        bottonOne="Sausage beef ribs short loin t-bone tongue leberkas, venison bacon meatball spare ribs chislic kevin shankle chicken shank. Pork loin cow bresaola picanha bacon, pork chop shoulder hamburger chicken short ribs."
        bottomTwo="Boudin kevin chislic capicola, kielbasa flank meatloaf cow short loin corned beef jerky pig. Tenderloin pig corned beef ham strip steak t-bone meatloaf drumstick rump spare ribs. Andouille short ribs flank prosciutto frankfurter jowl meatloaf. Bresaola tenderloin prosciutto biltong ground round. Beef ribs kevin sausage pork swine fatback tri-tip frankfurter shankle t-bone drumstick."
        bottomThree="Bacon ipsum dolor amet beef ribs landjaeger cupim jowl brisket andouille rump tongue picanha bacon. Pork fatback burgdoggen prosciutto pancetta flank. Frankfurter biltong fatback drumstick bresaola corned beef. Pastrami beef pork loin t-bone capicola jerky ground round kielbasa tail cow pork chop chuck porchetta ham. Strip steak pork chop pork beef, sirloin pork belly ham hock shoulder andouille tenderloin pork loin chicken pastrami flank jowl."
      />
    </>
  );
}
