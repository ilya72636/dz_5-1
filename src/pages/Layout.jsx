import { Outlet } from "react-router-dom"

import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <div>
        <header><NavBar /></header>
        <main><Outlet /></main>
        <footer>Footer</footer>
    </div>
  )
}
export default Layout