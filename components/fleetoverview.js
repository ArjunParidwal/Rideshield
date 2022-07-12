   import React from 'react'
   import dynamic from 'next/dynamic'
   const ReactSpeedometer = dynamic(import ("react-d3-speedometer"), {ssr: false})

   const fleetoverview = () => {
   return (
      <>
      <div className="col-md-8 rightbar">
      <div className="col-md-6 c">
         <center><h4 className='Overview'>Overview</h4></center>
         <div className='overdtl'>
         <div className="row overdt">
         <center><h4>Battery Fault Status</h4></center>
            <div className="col-sm-12">
            <div className="col-sm-12 table">Overcurrent Cut Off</div>
            <div className="col-sm-12 table">Overvoltage Cut Off</div>
            <div className="col-sm-12 table">Low SOC</div>
            <div className="col-sm-12 table">Geofence Breach</div>
            <div className="col-sm-12 table">Overspeeding</div>
            <div className="col-sm-12 table">Low SOH</div>
            <div className="col-sm-12 table">Undervoltage cutoff</div>
            </div>
         </div>
         </div>

         {/* Speed Meter Start*/}
         <div className='overdtl'>
         <div className="row overdt">
         <center><h4>Battery Use Status</h4></center>
            <div className="col-sm-12">
            <div className="col-sm-12 table">Idle</div>
            <div className="col-sm-12 table">In Soft Fault</div>
            <div className="col-sm-12 table">In Hard Fault</div>
            <div className="col-sm-12 table">Charging</div>
            <div className="col-sm-12 table">Unallocated</div>
            <div className="col-sm-12 table">Discharging</div>
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

   export default fleetoverview

