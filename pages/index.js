import Sidebar from "../components/sidebar"
import Dashboard from "../components/dashboard"
// import Meter from "../components/meter"

export default function Home() {
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
