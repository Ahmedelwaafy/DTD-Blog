
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Layout({ user, handleLogout }) {
  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <div id="top"></div>
      <Outlet />
     
      {/**  <Footer />*/}
    </>
  );
}

export default Layout;
