import React from 'react'
import Menu from '../components/menu'
import Sidebar from '../components/sidebar'
import Report from '../components/report'

const Reports = () => {
  return (
    <div>
    <div className="container-fluid">
      <div className="row b">
      <Menu />
      <Sidebar/>
     <Report />
      </div>
  </div>
  </div>
  )
}

export default Reports
