import Sidebar from "../components/sidebar"
import Dashboard from "../components/dashboard"

export default function Home() {
  return (
    <>
<div className="container-fluid">
    <div className="row b">
    <Sidebar/>
    <Dashboard />
    </div>
</div>
    </>
  )
}
