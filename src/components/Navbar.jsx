import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Navbar({ user, handleLogout }) {
  const navigate = useNavigate();
  const activeLink = ({ isActive }) => ({
    fontWeight: isActive ? "600" : "",
  });
  const [scroll, setScroll] = useState(false);
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [shownNotification, setShownNotification] = useState(false);
  const date = new Date();

  let day = date.getDate();
  let shortMonth = date.toLocaleString("en-us", { month: "short" });
  let year = date.getFullYear();
  let currentDate = `${day} ${shortMonth}, ${year}`;

  const dayIndex = new Date().getDay();
  const getDayName = (dayIndex) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex];
  };
  const dayName = getDayName(dayIndex);
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
            <img
              onClick={() => setShowMenu(!showMenu)}
              src="../assets/burger.svg"
              alt="burger"
            />
            {showMenu && (
              <div className="burger-menu">
                <button onClick={() => setShowMenu(false)}>
                  <img className="" src="../assets/night.svg" alt="profile" />
                  Night Mode
                </button>
                <button>
                  <img
                    className=""
                    src="../assets/notification.svg"
                    alt="notification"
                  />
                  Notifications
                </button>

                <hr />
                <button
                  onClick={() => {
                    navigate("/categories/UI_Design");
                    setShowMenu(false);
                  }}
                >
                  UI Design
                </button>
                <button
                  onClick={() => {
                    navigate("/categories/UX_Design");
                    setShowMenu(false);
                  }}
                >
                  UX Design
                </button>
                <button
                  onClick={() => {
                    navigate("/categories/web");
                    setShowMenu(false);
                  }}
                >
                  Web
                </button>
                <button
                  onClick={() => {
                    navigate("/categories/NFT");
                    setShowMenu(false);
                  }}
                >
                  NFT{" "}
                </button>
                <button
                  onClick={() => {
                    navigate("/categories/DevOps");
                    setShowMenu(false);
                  }}
                >
                  DevOps{" "}
                </button>
                <button
                  onClick={() => {
                    navigate("/categories/ChatGPT");
                    setShowMenu(false);
                  }}
                >
                  ChatGPT{" "}
                </button>
                <button
                  onClick={() => {
                    navigate("/categories/Deployment");
                    setShowMenu(false);
                  }}
                >
                  Deployment{" "}
                </button>
                <button
                  onClick={() => {
                    navigate("/categories/SEO");
                    setShowMenu(false);
                  }}
                >
                  SEO
                </button>

                <hr />
                {user && (
                  <>
                    <button onClick={handleLogout}>Sign out</button>
                    <span>{user?.email}</span>
                  </>
                )}
              </div>
            )}
            <img className="night" src="../assets/night.svg" alt="night" />

            {user && (
              <img
                onClick={() => setShownNotification(!shownNotification)}
                className="notification-relative"
                src="../assets/notification.svg"
                alt="notification"
              />
            )}
            {shownNotification && (
              <div className="notification">You have no new notifications!</div>
            )}
          </div>
          <h2 className="nav-container__header--logo">
            <Link className="link glitch " data-glitch="DTD" to="/">
              DTD
            </Link>
          </h2>
          <div className="nav-container__header--right">
            {user && (
              <>
                <div className="drop-down">
                  <img
                    onClick={() => setShowDropMenu(!showDropMenu)}
                    className="user"
                    src={user?.photoURL || "../assets/user.svg"}
                    alt="user"
                  />
                  <img
                    onClick={() => setShowDropMenu(!showDropMenu)}
                    className="down-arrow"
                    src="../assets/down-arrow.svg"
                    alt="down-arrow"
                  />
                  {showDropMenu && (
                    <div className="drop-down-menu">
                      <button>
                        <img
                          className=""
                          src="../assets/profile-blue.svg"
                          alt="profile"
                        />
                        Profile
                      </button>
                      <button>
                        <img
                          className=""
                          src="../assets/saves.svg"
                          alt="Saves"
                        />
                        Saves
                      </button>
                      <button>
                        <img
                          className=""
                          src="../assets/stories.svg"
                          alt="Stories"
                        />
                        Stories
                      </button>
                      <button>
                        <img
                          className=""
                          src="../assets/stats.svg"
                          alt="Stats"
                        />
                        Stats
                      </button>
                      <hr />
                      <button>Settings</button>
                      <button>Gift a membership</button>
                      <button>Manage publications</button>
                      <button>
                        Go Pro
                        <img className="" src="../assets/pro.svg" alt="pro" />
                      </button>
                      <hr />
                      <button onClick={handleLogout}>Sign out</button>
                      <span>{user?.email}</span>
                    </div>
                  )}
                </div>

                <button onClick={() => navigate("/write")} className="write">
                  <img src="../assets/write.svg" alt="write" />
                  Write
                </button>
              </>
            )}
            {!user && (
              <button onClick={() => navigate("/signin")} className="sign-in">
                <img src="../assets/profile.svg" alt="profile" />
                Sign In
              </button>
            )}
            <button
              onClick={() => navigate("/pricing")}
              style={{
                color: user ? "white" : "",
                backgroundColor: user ? "#405b70" : "",
              }}
              className="subscribe"
            >
              Subscribe
            </button>
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
              <p>{dayName}</p>
              <span>{currentDate}</span>
            </div>

            <ul>
              <li>
                <NavLink
                  className="link"
                  to="/categories/UI_Design"
                  style={activeLink}
                >
                  UI Design
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/UX_Design"
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
                  to="/categories/NFT"
                  style={activeLink}
                >
                  NFT{" "}
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/DevOps"
                  style={activeLink}
                >
                  DevOps{" "}
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li className="hot">
                <NavLink
                  className="link"
                  to="/categories/ChatGPT"
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
                  to="/categories/Deployment"
                  style={activeLink}
                >
                  Deployment{" "}
                </NavLink>
              </li>
              <img src="../assets/star.svg" alt="star" />
              <li>
                <NavLink
                  className="link"
                  to="/categories/SEO"
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
