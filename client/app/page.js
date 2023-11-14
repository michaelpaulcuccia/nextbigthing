"use client";

import Box from "./components/Box";
import * as Colors from "./constants/colors";

export default function Home() {
  return (
    <>
      <Box border="white" color="white" background={Colors.BLEND_ONE}>
        hello world 1
      </Box>
      <Box border="white" color="white" background={Colors.BLEND_TWO}>
        hello world 2
      </Box>
      <Box border="white" color="white" background={Colors.BLEND_THREE}>
        hello world 3
      </Box>
    </>
  );
}
