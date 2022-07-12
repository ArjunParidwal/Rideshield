import React from 'react'
import Sidebar from '../components/sidebar'
import Dashboard from '../components/dashboard'

export default function Battery_Overview() {
  return (
    <>
    <div className="container-fluid">
        <div className="row b">
        <Sidebar/>
        <Dashboard />
        {/* <Meter /> */}
        </div>
    </div>
        </>
  )
}
