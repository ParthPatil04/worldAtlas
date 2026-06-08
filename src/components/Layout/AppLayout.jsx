import { Outlet } from "react-router-dom"
import Footers from "../UI/Footers"
import Headers from "../UI/Headers"

const AppLayout = () => {
  return (
    <>
    <Headers />
      <Outlet />
    <Footers />
    </>
  )
} 

export default AppLayout