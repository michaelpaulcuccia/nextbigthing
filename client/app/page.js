"use client";
import React, { useContext } from 'react';
//import ActivityForm from "./components/ActivityForm";
import ActivityContext from "./context/ActivitiesContext";
import Box from './components/Box';

import walking from './assets/icons/walking.svg';
import breathwork from './assets/icons/breathwork.svg';
import hiking from './assets/icons/hiking.svg';

export default function Home() {

  let activityData;
  const { contextActivity } = useContext(ActivityContext);
  activityData = contextActivity;

  let arrWithLatestActivity;
  function getLatestWorkout (arg) {

    //create an empty array for unsorted time
    let unsortedDatesArr = [];
    
    //put all times into an array
    arg.forEach((item) => {
      let obj = {}
      obj.dateAuto = item.dateAuto;
      unsortedDatesArr.push(obj);
    });

    //sort time array
    const sortedDatesArr = unsortedDatesArr.sort((a, b) => new Date(b) - new Date(a));

    //get last item of sorted Array (most recent time)
    const latestItemArr = sortedDatesArr.pop();
    //make item a string
    const lastestItem = latestItemArr.dateAuto;

    //console.log(lastestItem)

    //filter activityData using time
    return arrWithLatestActivity = arg.filter((item) => item.dateAuto === lastestItem);

  }
  
  if (activityData.length) {
    getLatestWorkout(activityData);
  }


  console.log(arrWithLatestActivity) 
  
  return (
    <>
      <h2 style={{color: "white"}}>Your Latest Activity</h2>
      {
        arrWithLatestActivity &&
        arrWithLatestActivity.map((item, i) => (
          <Box 
            key={i}
            activityType={item.activityType}
            image={
            item.activityType === 'Walking' ? walking :
            item.activityType === 'Hiking' ? hiking :
            item.activityType === 'Breathwork' ? breathwork :
            null
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
    </>
  );
}
