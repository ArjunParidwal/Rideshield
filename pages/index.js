import Sidebar from "../components/sidebar"
import Dashboard from "../components/dashboard"
import Menu from "../components/menu"



export default function Home() {
  return (
    <>
<div className="container-fluid">
    <div className="row b">
      <Menu />
    <Sidebar/>
    <Dashboard />
    </div>
</div>
    </>
  )
}
