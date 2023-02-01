import Navbar from "./Navbar"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"
function Layout() {
  return (
    <>
      <Navbar />
      <div id="top"></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout