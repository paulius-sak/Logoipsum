import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Links from "../../constants/Links"

const RootLayout = () => {
  return (
    <>
    <Navbar links={Links}/>
    <Outlet/>
    </>
  )
}

export default RootLayout