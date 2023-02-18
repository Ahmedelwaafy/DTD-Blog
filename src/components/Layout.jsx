import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Layout({ user, handleLogout }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setScroll(true);
      } else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div id="top"></div>
      <Navbar user={user} handleLogout={handleLogout} />
      <Outlet style={{minHeight: "100vh"}}/>
      {scroll && (
        <a href="#top" className="BackToTop">
          <img src="../assets/top.svg" alt="top" />
        </a>
      )}

      <Footer />
    </>
  );
}

export default Layout;
