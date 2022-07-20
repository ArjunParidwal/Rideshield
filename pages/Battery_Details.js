import React, { Component } from 'react'
import Sidebar from '../components/sidebar'
import Menu from "../components/menu"
import Batterydetails from '../components/batterydetails'

export class Battery_Details extends Component {
  render() {
    return (
      <div>
      <div className="container-fluid">
        <div className="row b">
        <Menu />
        <Sidebar/>
       <Batterydetails />
        </div>
    </div>
    </div>
    )
  }
}

export default Battery_Details
