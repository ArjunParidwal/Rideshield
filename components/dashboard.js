import React from 'react'

const dashboard = () => {
  return (
   <>
   <div className="col-md-8 rightbar">
   <div className="col-md-6 c">
      <center><h4>Overview</h4></center>
      <div className="row dt">
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td><img src='../images/battery_id.png' className='icons'/></td>
                     <td>
                        <p>Battery ID<br/>#45672D</p>
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
                        <p>Battery Configuration<br/>#45672D</p>
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
                        <p>BMS Version<br/>#45672D</p>
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
                        <p>Chemistry<br/>#45672D</p>
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
                        <p>Battery Status<br/>#45672D</p>
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
                        <p>(Discharging)<br/>20%</p>
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
                        <p>Faults (OCV, UV, etc)<br/>#45672D</p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="col-sm-6">
            <table>
               <tbody>
                  <tr>
                     <td></td>
                     <td>
                        <p>Network Issue<br/><img src='../images/error.png' className='icons' />456</p>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
   <div className="col-md-6 map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14025.513062112626!2d77.22901879999999!3d28.49826495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1657300133587!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</div>
   </>
  )
}

export default dashboard