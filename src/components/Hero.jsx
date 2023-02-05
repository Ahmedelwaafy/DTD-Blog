import { Player } from "@lottiefiles/react-lottie-player";
import HeroPost from "./Util-Components/HeroPost";
function Hero() {
  const posts = [
    {
      img: "../assets/hero-posts/1.jpg",
      author: "Will Brett",
      time: "November 3, 2022",
      category: "web",
      title: "11 Stages To Become A JavaScript Full-Stack Engineer",
      description:
        "Most of the questions asked are about how to quickly improve their skills, how to become a Full Stack Developer, or how to choose a career direction.",
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
    <section className="hero">
      <div className="hero__left">
        <div className="hero__left--headings">
          <h1 className="planet">
            DTD is The Best Blog on{" "}
            <span>
              The{" "}
              <Player
                src="https://assets7.lottiefiles.com/packages/lf20_wfCcXUfBfe.json"
                style={{ height: "70px", width: "70px" }}
                loop
                autoplay
              />
            </span>
          </h1>

          <h2>
            For All{" "}
            <span>
              ThingsWeb Development from <span className="dtd">D</span>esign{" "}
              <span className="dtd">T</span>o <span className="dtd">D</span>
              eployment
            </span>
          </h2>
          <h2>
            <span>For All </span>Levels, Seasoned and Newbies Developers
          </h2>
        </div>
        <div className="hero__left--post">
          <HeroPost post={posts[0]} pop />{" "}
        </div>
      </div>
      <div className="hero__right">
        <HeroPost post={posts[1]} />
        <HeroPost post={posts[2]} />
      </div>
    </section>
  );
}

export default Hero;
