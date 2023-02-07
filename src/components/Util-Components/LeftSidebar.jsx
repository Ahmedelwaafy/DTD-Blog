import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LeftSidebar() {
  const navigate = useNavigate();
  const [write, setWrite] = useState(true)
  return (
    <aside className="RightSidebar">
      {/**unlimited access*/}
      <div className="RightSidebar__unlimited">
        <div className="RightSidebar__unlimited--content">
          <h2>Get unlimited access to everything on DTD</h2>
          <p>Plans starting at less than $1/week.</p>
          <button onClick={() => navigate("/pricing")}>
            Become a member <img src="../assets/star2.svg " alt="star" />
          </button>
        </div>
        <img
          className="RightSidebar__unlimited--img"
          src="/assets/premium.svg"
          alt="premium"
        />
      </div>
      <hr />
      {/**ADS*/}
      <div className="RightSidebar__ads">
        <h3 className="RightSidebar__ads--title">
          <img src="../assets/dot.svg" alt="dot" /> ADS
        </h3>
        <div className="RightSidebar__ads--content">
          <h2>250X250</h2>
          <p>SQUARE ADS</p>
          <p className="place">Place your ADS on DTD and reach more people.</p>
          <img src="../assets/ads.svg" alt="ads" />
          <button className="link"> Contact Sales</button>
        </div>
      </div>
      <hr />
      {/**Hot Tags*/}
      <div className="RightSidebar__tags">
        <h3 className="RightSidebar__ads--title">
          <img src="../assets/dot.svg" alt="dot" /> HOT TAGS
        </h3>
        <div className="RightSidebar__tags--content">
          <button>#React</button>
          <button>#Layoffs</button>
          <button>#TypeScript </button>
          <button>#GitHub </button>
          <button>#CICD</button>
          <button>#Tailwind</button>
          <button>#ORM</button>
          <button>#Prisma </button>
          <button>#Next.js</button>
          <button>#JavaScript</button>
          <button>#Remote </button>
          <button>#Roadmap </button>
        </div>
      </div>
      <hr />
      {/**Instagram*/}
      <div className="RightSidebar__Instagram">
        <h3 className="RightSidebar__Instagram--title">
          <img src="../assets/dot-rose.svg" alt="dot" /> INSTAGRAM
        </h3>
        <div className="RightSidebar__Instagram--content">
          <img src="../assets/instagram/insta1.jpg" alt="insta" />
          <img src="../assets/instagram/insta2.jpg" alt="insta" />
          <img src="../assets/instagram/insta3.jpg" alt="insta" />
          <img src="../assets/instagram/insta4.jpg" alt="insta" />
          <img src="../assets/instagram/insta5.jpg" alt="insta" />
          <img src="../assets/instagram/insta6.jpg" alt="insta" />
        </div>
      </div>
      <hr />
      {/**Write*/}
      {write && (
        <div className="RightSidebar__write">
          <div className="RightSidebar__write--close">
            <h3 className="title">
              <img src="../assets/dot-purple.svg" alt="dot" /> WRITE ON DTD
            </h3>
            <img
              onClick={() => setWrite(false)}
              src="../assets/close.svg"
              alt="close"
            />
          </div>
          <div className="RightSidebar__write--content">
            <button>New blogger FAQ</button>
            <button>Pro blogging advices</button>
            <button>Maximize your readership</button>
            <button className="start">Start Writing</button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default LeftSidebar;
