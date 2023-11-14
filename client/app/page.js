"use client";

import Box from "./components/Box";
import * as Colors from "./constants/colors";
import runner from './assets/icons/runner.svg';

export default function Home() {
  return (
    <>
      <Box 
        border="white" 
        color="white" 
        background={Colors.BLEND_ONE} 
        activityType="Walking"
        image={runner}
        date='11/14/23'
        time='0600'
        stat1="50.5"
        stat2="100"
        stat3='0.03'
        statData1="distance"
        statData2="avg. heart rate"
        statData3="elevation"
      />
    </>
  );
}
