import React from 'react'
import dynamic from 'next/dynamic'
const ReactSpeedometer = dynamic(import ("react-d3-speedometer"), {ssr: false})

const dashboard = () => {
  return (
   <>
   <div className="col-md-8 rightbar">
   <div className="col-md-6 c">
      <center><h4 className='Overview'>Overview</h4></center>
      <div className='dtl'>
      <div className="row dt">
         <div className="col-sm-6 rdt">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/battery_id.png' className='icons'/></td>
                     <td>
                        <p className='dashheading'>Battery ID<br/><p className='dashdata'>#45672D</p></p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/Battery_Configuration.png' className='icons' /></td>
                     <td>
                        <p>Battery Configuration<br/><p className='dashdata'>#45672D</p></p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      <div className="row dt">
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/batter_collection.png' className='icons' /></td>
                     <td>
                        <p>BMS Version<br/><p className='dashdata'>GHDSH6S</p></p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/Chemistry.png' className='icons' /></td>
                     <td>
                        <p>Chemistry<br/><p className='dashdata'>#845672D</p></p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      <div className="row dt">
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/battery-level.png' className='icons' /></td>
                     <td>
                        <p>Battery Status<br/><p className='dashdata'>80% ( Charging )</p></p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/low-battery.png' className='icons' /></td>
                     <td>
                        <p>Battery Low Status<br/><p className='dashdata'>20% ( Discharging )</p></p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      <div className="row dt">
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/error_2.png' className='icons'/></td>
                     <td>
                        <p>Faults (OCV, UV, etc)<br/><p className='dashdata'>Over Heating</p></p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/error.png' className='icons'/></td>
                     <td>
                        <p>Network Issue<br/><b style={{color:'#edb85c'}}>DNS Problems</b></p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      </div>

      {/* Speed Meter Start*/}
<div className='dtl'>
<div className="row dtm">
   <div className="col-sm-6 d-flex justify-content-center pd">
      <table>
         <tbody>
            <tr>
               <td>
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
                     <p className='speedh'>SOC</p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>

   <div className="col-sm-6 d-flex justify-content-center pd">
      <table>
         <tbody>
            <tr>
               <td>
                  <div className='meterbox'>
                   <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={700}
                     />
                  <p className='speedh'>Battery Voltage</p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</div>
      <div className="row dtm">
   <div className="col-sm-6 d-flex justify-content-center pd">
      <table>
         <tbody>
            <tr>
               <td>
                  <div className='meterbox'>
                   <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={800}
                     />
                     <p className='speedh'>Battery Temperature</p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <div className="col-sm-6 d-flex justify-content-center pd">
      <table>
         <tbody>
            <tr>
               <td>
                  <div className='meterbox'>
                  <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={400}
                     />
                  <p className='speedh'>Cell Voltage</p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
      </div>

      <div className="row dtm">
   <div className="col-sm-6 d-flex justify-content-center pd">
      <table>
         <tbody>
            <tr>
               <td>
                  <div className='meterbox'>
                  <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={200}
                     />
                     <p className='speedh'>SOH</p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <div className="col-sm-6 d-flex justify-content-center pd">
      <table>
         <tbody>
            <tr>
               <td>
                  <div className='meterbox'>
                  <ReactSpeedometer
                     width={200}
                     height={150}
                     labelFontSize={"11px"}
                     needleColor={"white"}
                     textColor={"white"}
                     customSegmentStops={[0, 500, 700, 800, 900, 1000]}
                     segmentColors={["#b86c73", "#c78670", "#e6cc87", "#a7bf89", "#b598af"]}
                     value={500}
                     />
                  <p className='speedh'>Cycle Count</p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   </div>
   </div>
      {/* Speed Meter end */}
   </div>
   <div className="col-md-6 map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14025.513062112626!2d77.22901879999999!3d28.49826495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1657300133587!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</div>
   </>
  )
}

export default dashboard

