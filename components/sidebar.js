import React from 'react'
import Link from 'next/link'

const sidebar = () => {
  return (
    <>
    <div className="col-md-4 siderbar">
   <ul className="nav flex-column">
      <li className="nav-item">
         <h4>Ride Shield</h4>
      </li>
      <li className="nav-item">
        <i className="bi bi-house-fill"></i><span className="ms-1  d-sm-inline"><Link href="/"><span className='al'>Home</span></Link></span>
      </li>
      <li className="nav-item">
         <i className="bi bi-battery"></i><span className="ms-1  d-sm-inline" ><Link href="Battery_Overview"><span className='al'>Battery Overview</span></Link></span>
      </li>
      <li className="nav-item">
         <i className="bi bi-truck"></i><span className="ms-1  d-sm-inline"><Link href="Fleet_Overview"><span className='al'>Fleet Overview</span></Link></span> 
      </li>
      <li className="nav-item">
         <i className="bi bi-battery-charging"></i><span className="ms-1  d-sm-inline"><Link href="Battery_Details"><span className='al'>Battery Details</span></Link></span>
      </li>
      <li className="nav-item">
         <i className="bi bi-pie-chart-fill"></i><span className="ms-1  d-sm-inline"><Link href="Reports"><span className='al'>Reports</span></Link></span>
      </li>
   </ul>
</div>
    </>
  )
}

export default sidebar