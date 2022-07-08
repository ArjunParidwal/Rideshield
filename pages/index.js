
export default function Home() {
  return (
    <>
<div className="container-fluid">
    <div className="row b">
    <div className="col-md-4 siderbar">
    <ul className="nav flex-column">
    <li className="nav-item">
  <h4>Ride Shield</h4>
  </li>
  <li className="nav-item">
  <a href="google.com"><i className="bi bi-house-fill"></i><span className="ms-1 d-none d-sm-inline">Home</span></a>
  </li>
  <li className="nav-item">
  <i className="bi bi-battery"></i><span className="ms-1 d-none d-sm-inline"  href="#">Battery Overview</span>
  </li>
  <li className="nav-item">
  <i className="bi bi-truck"></i><span className="ms-1 d-none d-sm-inline"  href="#">Fleet Overview</span>
  </li>
  <li className="nav-item">
  <i className="bi bi-battery-charging"></i><span className="ms-1 d-none d-sm-inline"  href="#">Battery Details</span>
  </li>
  <li className="nav-item">
  <i className="bi bi-pie-chart-fill"></i><span className="ms-1 d-none d-sm-inline"  href="#">Reports</span>
  </li>
</ul>
    </div>
    <div className="col-md-6 rightbar">
      2
    </div>
    </div>
</div>
    </>
  )
}
