import { useState } from 'react'
import FeedPost from './FeedPost'
import { NavLink, Link } from "react-router-dom"
function Posts() {

  const [show, setShow] = useState("posts");
const showFollowing = () => ({
  background:
    show === "following"
      ? "linear-gradient(94deg, rgba(64, 91, 112) 0%, rgba(14, 123, 178) 100%)"
      : "",
  backgroundSize: show === "following" ? "100% 2px" : "",
  backgroundRepeat: show === "following" ? "no-repeat" : "",
  backgroundPosition: show === "following" ? "left bottom" : "",
  color: show === "following" ? "#093959" : "",
});
const showPost = () => ({
  background:
    show === "posts"
      ? "linear-gradient(94deg, rgba(64, 91, 112) 0%, rgba(14, 123, 178) 100%)"
      : "",
  backgroundSize: show === "posts" ? "100% 2px" : "",
  backgroundRepeat: show === "posts" ? "no-repeat" : "",
  backgroundPosition: show === "posts" ? "left bottom" : "",
  color: show === "posts" ? "#093959" : "",
});




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
    <section className="posts">
      <div className="posts__nav">
        <Link className="posts__nav--link" to="/follow">
          <img src="../assets/plus.svg" alt="plus" />
        </Link>

        <NavLink
          onClick={() => setShow("posts")}
          to=""
          className="posts__nav--postlink"
          style={showPost}
        >
          For you
        </NavLink>
        <NavLink
          to=""
          onClick={() => setShow("following")}
          className="posts__nav--postlink"
          style={showFollowing}
        >
          Following
        </NavLink>
      </div>
      <div className="posts__content">
        {show === "posts" ? (
          <>
            <FeedPost post={posts[0]} />
            <FeedPost post={posts[0]} />
            <FeedPost post={posts[0]} />
          </>
        ) : show === "following" ? (
          "You aren't following anyone yet"
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Posts