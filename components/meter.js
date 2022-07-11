import ReactSpeedometer from "react-d3-speedometer";
import React from 'react'


export default function temp() {
  return (
    <div>
        <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"black"}
                     textColor={"black"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={333}
                     /> 
    </div>
  )
}
