import React from 'react'
import Sidebar from '../components/sidebar'
import Batteryoverview from '../components/batteryoverview'
import Menu from "../components/menu"

export default function Battery_Overview() {
  return (
    <>
    <div className="container-fluid">
        <div className="row b">
        <Menu />
        <Sidebar/>
        <Batteryoverview />
        </div>
    </div>
  </>
  )
}
