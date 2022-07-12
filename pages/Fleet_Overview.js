import React from 'react'
import Sidebar from '../components/sidebar'
import Fleetoverview from '../components/fleetoverview'

const Fleet_Overview = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row b">
        <Sidebar/>
        <Fleetoverview />
        </div>
    </div>
        </>
  )
}

export default Fleet_Overview