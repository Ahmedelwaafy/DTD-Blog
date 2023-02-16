import { useNavigate } from "react-router-dom";
import SidebarPosts from "./SidebarPosts";
import Authors from "./Authors";

function RightSidebar() {
  const navigate = useNavigate();

  const authors = [
    {
      author: "Will Brett",
    },
    {
      author: "Nick Meyer",
    },
    {
      author: "Nirbhay luthra",
    },
  ];
  return (
    <div className="LeftSidebar">
      {/**TRENDING*/}
      <div className="LeftSidebar__trending">
        <SidebarPosts name={"TRENDING"} property={"trending"} value={true} />
      </div>

      {/**Web Category*/}
      <div className="LeftSidebar__web">
        <SidebarPosts name={"WEB"} property={"category"} value={"web"} />
        <button
          className="LeftSidebar__web--button"
          onClick={() => navigate("/categories")}
        >
          {" "}
          See All Categories{" "}
        </button>
      </div>

      {/**Best Authors*/}
      <div className="LeftSidebar__authors">
        <div className="LeftSidebar__authors--title">
          <h2>BEST AUTHORS</h2>
          <button>
            See all <img src="../assets/right-arrow.svg" alt="right-arrow" />
          </button>
        </div>

        <div className="LeftSidebar__authors--content">
          <Authors
            post={authors[0]}
            position={"Fron-End Developer"}
            imgno={"1"}
          />
          <Authors
            post={authors[1]}
            position={"Full-Stack Developer"}
            imgno={"2"}
          />
          <Authors post={authors[2]} position={"UI Designer"} imgno={"3"} />
        </div>
      </div>
      {/**Quick Survey*/}
      <div className="LeftSidebar__survey">
        <div className="LeftSidebar__survey--title">
          <h2>QUICK SURVEY</h2>
          <button>
            See results{" "}
            <img src="../assets/right-arrow.svg" alt="right-arrow" />
          </button>
        </div>

        <div className="LeftSidebar__survey--content">
          <h3>How was your experience on DTD?</h3>
          <form action="">
            <div>
              <input
                type="radio"
                id="cbx1"
                className="cbx"
                name="survey"
                style={{ display: "none" }}
              />
              <label htmlFor="cbx1" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
                Awesome, I'm satisfied!
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="cbx2"
                className="cbx"
                name="survey"
                style={{ display: "none" }}
              />
              <label htmlFor="cbx2" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
                Normal
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="cbx3"
                className="cbx"
                name="survey"
                style={{ display: "none" }}
              />
              <label htmlFor="cbx3" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
                Bad! Need mor improvement
              </label>
            </div>

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
          <p>
            12,523 <span>Readers joined</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
