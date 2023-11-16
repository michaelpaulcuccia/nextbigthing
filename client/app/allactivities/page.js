"use client";

import { useContext } from "react";
import ActivityContext from "../context/ActivitiesContext";
import walking from '../assets/icons/walking.svg';
import breathwork from '../assets/icons/breathwork.svg';
import hiking from '../assets/icons/hiking.svg';
import Box from "../components/Box";

export default function page() {
    
    let activityData;
    const { contextActivity } = useContext(ActivityContext);
    activityData = contextActivity;

    //this page is not being refreshed on redirect

  return (
    <>
        {
            activityData.length &&
            activityData.map((item, i) => (
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
  )
}
