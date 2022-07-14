import Sidebar from "../components/sidebar"
import Dashboard from "../components/dashboard"
import Menu from "../components/menu"
import Script from 'next/script';



export default function Home() {
  return (
    <div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" async ></script>
<div className="container-fluid">
    <div className="row b">
      <Menu />
    <Sidebar/>
    <Dashboard />
    </div>
</div>
</div>
  )
}
