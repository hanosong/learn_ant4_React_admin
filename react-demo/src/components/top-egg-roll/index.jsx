import React, { memo } from 'react'
import Marquee from "react-fast-marquee";
import Eri from './eri'
const TopEggRoll = memo(() => {
  return (
    <Marquee
        speed={60}
        style={{
          height: "165px",
          overflow: "hidden"
        }}
      >
        <Eri/>
      </Marquee>
  )
})

export default TopEggRoll