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
         <i className="bi bi-house-fill"></i><span className="ms-1  d-sm-inline">Home</span>
      </li>
      <li className="nav-item">
         <i className="bi bi-battery"></i><span className="ms-1  d-sm-inline"  href="#">Battery Overview</span>
      </li>
      <li className="nav-item">
         <i className="bi bi-truck"></i><span className="ms-1  d-sm-inline"  href="#">Fleet Overview</span>
      </li>
      <li className="nav-item">
         <i className="bi bi-battery-charging"></i><span className="ms-1  d-sm-inline"  href="#">Battery Details</span>
      </li>
      <li className="nav-item">
         <i className="bi bi-pie-chart-fill"></i><span className="ms-1  d-sm-inline"  href="#">Reports</span>
      </li>
   </ul>
</div>
    </>
  )
}

export default sidebar