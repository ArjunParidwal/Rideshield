import Sidebar from "../components/sidebar"
import Dashboard from "../components/dashboard"
import Menu from "../components/menu"
import Script from 'next/script'



export default function Home() {
  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" async />
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
