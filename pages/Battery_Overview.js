import React from 'react'
import Sidebar from '../components/sidebar'
import Batteryoverview from '../components/batteryoverview'

export default function Battery_Overview() {
  return (
    <>
    <div className="container-fluid">
        <div className="row b">
        <Sidebar/>
        <Batteryoverview />
        </div>
    </div>
  </>
  )
}
