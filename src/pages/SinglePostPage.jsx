import { useNavigate } from "react-router-dom";
import SidebarPost from "../components/Util-Components/SidebarPost";
import { useState, useEffect } from "react";

function SinglePostPage() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 370) {
        setScroll(true);
      } else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigate = useNavigate();

  const posts = [
    {
      img: "../assets/hero-posts/1.jpg",
      author: "Will Brett",
      time: "November 3, 2022",
      category: "web",
      title: "11 Stages To Become A JavaScript Full-Stack Engineer",
      description:
        "Most of the questions asked are about how to quickly improve their skills, how to become a Full Stack Developer, or how to choose a career direction.Most of the questions asked are about how to quickly improve their skills, how to become a Full Stack Developer, or how to choose a career direction.Most of the questions asked are about how to quickly improve their skills, how to become a Full Stack Developer, or how to choose a career direction.",
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
  const { img, author, time, category, title, description, tags, long } =
    posts[0];

  return (
    <section className="container">
      <div className="container__post">
        <div className="container__post--relative">
          <img src={img} alt={title} />
          <div className="absolute">
            <div className="absolute__first-row">
              <p>
                Published in <span>{time}</span>
              </p>
              <div className="absolute__first-row--tags">
                <button onClick={() => navigate(`/tags/{${tags}}`)}>
                  {tags}
                </button>
              </div>
            </div>
            <h1 className="absolute__title">{title}</h1>
            <div className="absolute__last-row">
              <div className="absolute__last-row--author-image-container">
                <img src="../assets/authors/1.jpg" alt="" />
                <div>
                  <h4>{author}</h4>
                  <button>Follow</button>
                </div>
              </div>
              <h6>{long}</h6>
            </div>
          </div>
        </div>

        <div className="description">
          <div className="buttons">
            <abbr title="Share on facebook">
              <img src="../assets/facebook2.svg" alt="facebook" />
            </abbr>

            <abbr title="Share on linkedin">
              <img src="../assets/linkedin.svg" alt="linkedin" />
            </abbr>
            <abbr title="Share on twitter">
              <img src="../assets/twitter.svg" alt="twitter" />
            </abbr>
          </div>
          <p>{description}</p>
          <div className="buttons">
            <abbr title="edit">
              <img src="../assets/edit.svg" alt="edit" />
            </abbr>
            <abbr title="Delete">
              <img src="../assets/delete.svg" alt="delete" />
            </abbr>
          </div>
        </div>
        {scroll && (
          <div className="sticky">
            <button>
              <abbr title="Like">
                <img src="../assets/heart.svg" alt="heart" />
              </abbr>
            </button>
            <button>
              <abbr title="Comment">
                <img src="../assets/comments.svg" alt="comments" />
              </abbr>
            </button>
            <button>
              <abbr title="Save">
                <img src="../assets/save.svg" alt="save" />
              </abbr>
            </button>
            <button>
              <abbr title="Sponsor">
                <img src="../assets/sponsor.svg" alt="sponsor" />
              </abbr>
            </button>
          </div>
        )}
      </div>

      <div className="container__aside">
        {/** Category*/}
        <div className="LeftSidebar__web">
          <div className="LeftSidebar__web--title">
            <h2>{category.toUpperCase()}</h2>
            {/**<button>
              See all <img src="../assets/right-arrow.svg" alt="right-arrow" />
            </button> */}
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

            <SidebarPost post={posts[2]} position={"UI Designer"} imgno={"3"} />
          </div>
          <button className="LeftSidebar__web--button">
            {" "}
            See More for {category.toUpperCase()}
          </button>
        </div>
      </div>
    </section>
  );
}

export default SinglePostPage;
