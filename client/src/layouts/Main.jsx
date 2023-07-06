
import { Outlet } from "react-router-dom"
import Navbar from "../components/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-28">
      <Outlet/>
      </div>
    </div>
  )
}

export default Main
