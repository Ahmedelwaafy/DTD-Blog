import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FeedPost from "../components/Util-Components/FeedPost";
import { PostLoader } from "../components/Util-Components/Loaders";
import { db } from "../firebase";

function TrendingPostsPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [TrendingPosts, setTrendingPosts] = useState([]);
  useEffect(() => {
    const getTrendingPosts = async () => {
      const blogRef = collection(db, "blogs");
      const trendQuery = query(blogRef, where("trending", "==", true));
      const querySnapshot = await getDocs(trendQuery);
      let trendPosts = [];
      querySnapshot.forEach((doc) => {
        trendPosts.push({ id: doc.id, ...doc.data() });
      });

      setTrendingPosts(trendPosts);
      setLoading(false);
    };
    getTrendingPosts();
    
  }, []);

  if (loading) {
    return <PostLoader />;
  }

  if (TrendingPosts.length === 0) {
    return (
      <p className="noposts">
        No related posts found,{" "}
        <span onClick={() => navigate("/write")}>create one.</span>
      </p>
    );
  } 
  return (
    <div className="author-div">
      <h1> Trending Posts</h1>
      <div className="author-posts">
        {TrendingPosts?.map((post, index) => (
          <FeedPost post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TrendingPostsPage;
