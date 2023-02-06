import React from "react";
import { useNavigate } from "react-router-dom";
import SidebarPost from "./SidebarPost";
import Authors from "./Authors";

function LeftSidebar() {
  const navigate = useNavigate();

  const posts = [
    {
      img: "../assets/hero-posts/1.jpg",
      author: "Will Brett",
      time: "November 3, 2022",
      category: "web",
      title: "11 Stages To Become A JavaScript Full-Stack Engineer",
      description:
        "web of the questions asked are about how to quickly improve their skills, how to become a Full Stack Developer, or how to choose a career direction.",
      tags: "javascript",
      long: "4min read",
    },
    {
      img: "../assets/hero-posts/2.jpg",
      author: "Nick Meyer",
      time: "December 8, 2022",
      category: "web",
      title:
        "8 design system management tools for startups & organizations, 2023",
      description:
        "Design systems create consistency, scalability, and efficiency across complex products and distributed teams. They’re also a drain on resources and a struggle to keep synced in dynamic organizations. These tools can help.",
      tags: "management",
      long: "10min read",
    },
    {
      img: "../assets/hero-posts/3.jpg",
      author: "Nirbhay luthra",
      time: "Jan 31, 2023",
      category: "web",
      title: "How I Made My App 2.4x Faster Switching to Svelte",
      description:
        "This article is not to say that Angular can’t be fast. That’s not true. It’s that Svelte Kit makes it intuitive to be fast.",
      tags: "Svelte",
      long: "6min read",
    },
  ];
  return (
    <div className="LeftSidebar">
      {/**Most Read*/}
      <div className="LeftSidebar__most">
        <div className="LeftSidebar__most--title">
          <h2>MOST READ</h2>
          <button>
            See all <img src="../assets/right-arrow.svg" alt="right-arrow" />
          </button>
        </div>

        <div className="LeftSidebar__most--content">
          <SidebarPost
            post={posts[0]}
            position={"Fron-End Developer"}
            imgno={"1"}
          />
          <SidebarPost
            post={posts[1]}
            position={"Full-Stack Developer"}
            imgno={"2"}
          />
          <SidebarPost post={posts[2]} position={"UI Designer"} imgno={"3"} />
        </div>
      </div>

      {/**Web Category*/}
      <div className="LeftSidebar__web">
        <div className="LeftSidebar__web--title">
          <h2>WEB</h2>
          <button>
            See all <img src="../assets/right-arrow.svg" alt="right-arrow" />
          </button>
        </div>

        <div className="LeftSidebar__web--content">
          <SidebarPost
            post={posts[0]}
            position={"Fron-End Developer"}
            imgno={"1"}
          />
          <SidebarPost
            post={posts[1]}
            position={"Full-Stack Developer"}
            imgno={"2"}
          />
          <SidebarPost post={posts[2]} position={"UI Designer"} imgno={"3"} />
        </div>
        <button className="LeftSidebar__web--button">
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
            post={posts[0]}
            position={"Fron-End Developer"}
            imgno={"1"}
          />
          <Authors
            post={posts[1]}
            position={"Full-Stack Developer"}
            imgno={"2"}
          />
          <Authors post={posts[2]} position={"UI Designer"} imgno={"3"} />
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

            <button
            className="submit-btn" type="submit">
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

export default LeftSidebar;
