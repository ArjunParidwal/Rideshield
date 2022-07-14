import React, { Component } from 'react'
import Link from 'next/link'

export default class menu extends Component {
  render() {
    return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid">
      <a class="navbar-brand" href="/">Ride Shield</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
               <i className="bi bi-house-fill"></i>
               <span className="ms-1  d-sm-inline">
                  <Link href="/">
                  <span className='al'>Home</span></Link>
               </span>
            </li>
            <li class="nav-item">
               <i className="bi bi-battery"></i>
               <span className="ms-1  d-sm-inline" >
                  <Link href="Battery_Overview">
                  <span className='al'>Battery Overview</span></Link>
               </span>
            </li>
            <li class="nav-item">
               <i className="bi bi-truck"></i>
               <span className="ms-1  d-sm-inline">
                  <Link href="Fleet_Overview">
                  <span className='al'>Fleet Overview</span></Link>
               </span>
            </li>
            <li class="nav-item">
               <i className="bi bi-battery-charging"></i>
               <span className="ms-1  d-sm-inline">
                  <Link href="/">
                  <span className='al'>Battery Details</span></Link>
               </span>
            </li>
            <li class="nav-item">
               <i className="bi bi-pie-chart-fill"></i>
               <span className="ms-1  d-sm-inline">
                  <Link href="/">
                  <span className='al'>Reports</span></Link>
               </span>
            </li>
         </ul>
      </div>
   </div>
</nav>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</>
    )
  }
}
