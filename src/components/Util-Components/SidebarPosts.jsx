import { useEffect, useState } from "react";
import { truncate } from "lodash";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { PostLoader } from "./Loaders";

function SidebarPosts({ name, property, value }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingBlogs = async () => {
      const blogRef = collection(db, "blogs");
      const trendQuery = query(blogRef, where(property, "==", value));
      const querySnapshot = await getDocs(trendQuery);
      let trendingPosts = [];
      querySnapshot.forEach((doc) => {
        trendingPosts.push({ id: doc.id, ...doc.data() });
      });

      setTrendingPosts(trendingPosts);
      setLoading(false);
    };
    getTrendingBlogs();
  }, [property, value]);

  if (loading) {
    return <PostLoader />;
  }

  return (
    <>
      <div className="title">
        <h2>{name?.toUpperCase()}</h2>
        <button
          onClick={() => navigate(`/categories/${name?.replace(" ", "_")}`)}
        >
          See all <img src="../assets/right-arrow.svg" alt="right-arrow" />
        </button>
      </div>

      {trendingPosts?.slice(0, 4).map((post, index) => (
        <div className="sidepost" key={index}>
          <div className="sidepost__img">
            <img
              onClick={() => navigate(`/posts/${post?.id}`)}
              src={post?.imgUrl}
              alt=""
            />
          </div>
          <div className="sidepost__content">
            <div className="sidepost__content--tags">
              <button onClick={() => navigate(`/tags/${post?.tags}`)}>
                #{post?.tags}
              </button>
              <p>{post?.duration} min read</p>
            </div>
            <h3
              onClick={() => navigate(`/posts/${post?.id}`)}
              className="sidepost__content--title"
            >
              {truncate(post?.title, { length: 40 })}
            </h3>
            <div className="sidepost__content--img">
              <img
                onClick={() =>
                  navigate(`/authors/${post?.author.replace(" ", "_")}`)
                }
                src={
                  post?.authorPhoto ||
                  "https://xsgames.co/randomusers/avatar.php?g=male"
                }
                alt="author"
              />
              <div>
                <button
                  onClick={() =>
                    navigate(`/authors/${post?.author.replace(" ", "_")}`)
                  }
                >
                  {post?.author}
                </button>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SidebarPosts;
