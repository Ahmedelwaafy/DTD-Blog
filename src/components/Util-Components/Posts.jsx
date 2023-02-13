import { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import { NavLink, Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function Posts() {
  const [show, setShow] = useState("posts");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  

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
            {posts?.map( (post) => (
            <FeedPost key={post.id} post={post} />
            ))}
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

export default Posts;
