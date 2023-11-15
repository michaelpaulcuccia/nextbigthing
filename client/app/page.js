"use client";

import runner from './assets/icons/runner.svg';
import breathwork from './assets/icons/breathwork.svg';
import hiking from './assets/icons/hiking.svg';
// import ActivityForm from "./components/ActivityForm";
import Box from "./components/Box";


export default function Home() {
  return (
    <>
      {/* <ActivityForm /> */}
      <Box 
        activityType="Walking"
        image={runner}
        date='11/14/23'
        time='0600'
        stat1="0.46 mi"
        stat2="11'54.3"
        stat3='2.3 mph'
        statData1="distance"
        statData2="time"
        statData3="speed"
      />
      <Box 
        activityType="Breathwork"
        image={breathwork}
        date='11/14/23'
        time='1100'
        stat1="3"
        stat2="1:30"
        stat3='1:50'
        statData1="rounds"
        statData2="avg retention"
        statData3="max retention"
      />
      <Box 
        activityType="Hiking"
        image={hiking}
        date='11/14/23'
        time='1300'
        stat1="2.01 mi"
        stat2="40'32.5"
        stat3='2.8 mph'
        statData1="distance"
        statData2="time"
        statData3="speed"
      />
    </>
  );
}
