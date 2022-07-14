import React from 'react'
import Sidebar from '../components/sidebar'
import Fleetoverview from '../components/fleetoverview'
import Menu from "../components/menu"

const Fleet_Overview = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row b">
          <Menu />
        <Sidebar/>
        <Fleetoverview />
        </div>
    </div>
        </>
  )
}

export default Fleet_Overview