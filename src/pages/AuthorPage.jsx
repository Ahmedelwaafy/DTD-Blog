import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeedPost from "../components/Util-Components/FeedPost";
import { PostLoader } from "../components/Util-Components/Loaders";
import { db } from "../firebase";

function AuthorPage() {
      const navigate = useNavigate();

  const { authorName } = useParams();
const [loading, setLoading] = useState(true);
const [authorPosts, setAuthorPosts] = useState([]);
  useEffect(() => {
    const getauthorBlogs = async () => {
      const blogRef = collection(db, "blogs");
      const trendQuery = query(
        blogRef,
        where("author", "==", authorName.replace("_", " "))
      );
      const querySnapshot = await getDocs(trendQuery);
      let authorPosts = [];
      querySnapshot.forEach((doc) => {
        authorPosts.push({ id: doc.id, ...doc.data() });
      });

      setAuthorPosts(authorPosts);
      setLoading(false);
    };
    getauthorBlogs();
  }, [authorName]);
  if (loading) {
    return <PostLoader />;
  }
  if (authorPosts.length === 0) {
    return (
      <p className="noposts">
        No related posts found,{" "}
        <span onClick={() => navigate("/write")}>create one.</span>
      </p>
    );
  }
  return (
    <div className="author-div">
      <h1>{authorName.replace("_", " ")} Page</h1>
      <button>Follow</button>
      <h2>Posts</h2>
      <div className="author-posts">
        {authorPosts?.map((post, index) => (
          <FeedPost post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AuthorPage;
