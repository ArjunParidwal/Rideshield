import React from 'react'
import dynamic from 'next/dynamic'
const ReactSpeedometer = dynamic(import ("react-d3-speedometer"), {ssr: false})

const batteryoverview = () => {
    return (
        <>
        <div className="col-md-8 rightbar">
      <div className="col-md-6 c">
      <div className="container">
   <div className="row chart">
      <div className="col-sm-3 chart">
         One of three columns
         <label className="lablesover">(4%, 4/100)</label>
      </div>
      <div className="col-sm-3 chart">
         One of three columns
      </div>
      <div className="col-sm-3 chart">
         One of three columns
      </div>
      <div className="col-sm-3 chart">
         One of three columns
      </div>
      <div className="col-sm-3 chart">
         One of three columns
      </div>
      <div className="col-sm-3 chart">
         One of three columns
      </div>
   </div>
</div>
      </div>
      <div className="col-md-3 c">
      <div className="col-sm-12">
            <div className="col-sm-12 tableb">
            <div className='meterbox'>
                   <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={450}
                     />
                     <p className='speedh'>Driving Behavior</p>
            </div>
            </div>
            <div className="col-sm-12 tableb">
            <div className='meterbox'>
                   <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={450}
                     />
                     <p className='speedh'>Average Speed</p>
            </div>    
            </div>
            <div className="col-sm-12 tableb">
            <div className='meterbox'>
                   <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={450}
                     />
                     <p className='speedh'>Average Discharge (DOD)</p>
            </div>
            </div>
            <div className="col-sm-12 tableb">
            <div className='meterbox'>
                   <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={450}
                     />
                     <p className='speedh'>Average Charge</p>
            </div>
            </div>
            <div className="col-sm-12 tableb">
            <div className='meterbox'>
                   <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={450}
                     />
                     <p className='speedh'>Mileage</p>
            </div>
            </div>
            </div>
      </div>
      <div className="col-md-3 map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14025.513062112626!2d77.22901879999999!3d28.49826495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1657300133587!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
   </div>
        </>
        )
    }
 
    export default batteryoverview
    