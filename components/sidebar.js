import React from 'react'

const sidebar = () => {
  return (
    <>
    <div className="col-md-4 siderbar">
   <ul className="nav flex-column">
      <li className="nav-item">
         <h4>Ride Shield</h4>
      </li>
      <li className="nav-item">
         <i className="bi bi-house-fill"></i><span className="ms-1  d-sm-inline"><a href='/' className='al'>Home</a></span>
      </li>
      <li className="nav-item">
         <i className="bi bi-battery"></i><span className="ms-1  d-sm-inline" ><a href='Battery_Overview' className='al'>Battery Overview</a></span>
      </li>
      <li className="nav-item">
         <i className="bi bi-truck"></i><span className="ms-1  d-sm-inline"><a href='Fleet_Overview' className='al'>Fleet Overview</a></span>
      </li>
      <li className="nav-item">
         <i className="bi bi-battery-charging"></i><span className="ms-1  d-sm-inline"><a href='Battery_Details' className='al'>Battery Details</a></span>
      </li>
      <li className="nav-item">
         <i className="bi bi-pie-chart-fill"></i><span className="ms-1  d-sm-inline"><a href='Reports' className='al'>Reports</a></span>
      </li>
   </ul>
</div>
    </>
  )
}

export default sidebar