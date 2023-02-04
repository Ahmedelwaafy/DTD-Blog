import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  const activeLink = ({ isActive }) => ({
    fontWeight: isActive ? "600" : "",
  });
  const auth = false;
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
      <div className="nav-container">
        <header className="nav-container__header">
          <div className="nav-container__header--left">
            <img src="../assets/burger.svg" alt="burger" />
            <img className="night" src="../assets/night.svg" alt="night" />

            {auth && (
              <img src="../assets/notification.svg" alt="notification" />
            )}
          </div>
          <h2 className="nav-container__header--logo">
            <Link className="link glitch " data-glitch="DTD"  to="/">
              DTD
            </Link>
          </h2>
          <div className="nav-container__header--right">
            {auth && (
              <>
                <img className="user" src="../assets/user.svg" alt="user" />

                <button className="write">
                  <img src="../assets/write.svg" alt="write" />
                  Write
                </button>
              </>
            )}
            <button className="sign-in">
              <img src="../assets/profile.svg" alt="profile" />
              Sign In
            </button>
            <button className="subscribe">Subscribe</button>
          </div>
        </header>
      </div>
      <div
        style={{ backgroundColor: `${scroll ? "#ffe4c4" : ""}` }}
        className="stick"
      >
        <nav className="stick__navbar">
          <div className="left-nav">
            <div className="date">
              <p>Monday</p>
              <span>12 Apr, 2023</span>
            </div>
            <ul>
              <li>
                <NavLink
                  className="link"
                  to="/categories/uidesign"
                  style={activeLink}
                >
                  UI Design
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/uxdesign"
                  style={activeLink}
                >
                  UX Design
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/web"
                  style={activeLink}
                >
                  Web{" "}
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/nft"
                  style={activeLink}
                >
                  NFT{" "}
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/devops"
                  style={activeLink}
                >
                  DevOps{" "}
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li className="hot">
                <NavLink
                  className="link"
                  to="/categories/chatgpt"
                  style={activeLink}
                >
                  ChatGPT
                </NavLink>
                <p>HOT</p>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/deployment"
                  style={activeLink}
                >
                  Deployment{" "}
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/seo"
                  style={activeLink}
                >
                  SEO
                </NavLink>
              </li>
            </ul>
          </div>
          <button>
            <img src="../assets/search.svg" alt="search" />
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
