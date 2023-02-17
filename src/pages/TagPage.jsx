import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeedPost from "../components/Util-Components/FeedPost";
import { PostLoader } from "../components/Util-Components/Loaders";
import { db } from "../firebase";

function TagPage() {
    const navigate = useNavigate();

  const { tagName } = useParams();
  const [loading, setLoading] = useState(true);
  const [tagPosts, setTagPosts] = useState([]);
  useEffect(() => {
    const gettagBlogs = async () => {
      const blogRef = collection(db, "blogs");
      const trendQuery = query(blogRef, where("tags", "==", tagName));
      const querySnapshot = await getDocs(trendQuery);
      let tagPosts = [];
      querySnapshot.forEach((doc) => {
        tagPosts.push({ id: doc.id, ...doc.data() });
      });

      setTagPosts(tagPosts);
      setLoading(false);
    };
    gettagBlogs();
  }, [tagName]);
  const tag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
   
  if (loading) {
    return <PostLoader />;
  }
  if (tagPosts.length===0) {
     return (
       <p className="noposts">
         No related posts found,{" "}
         <span onClick={() => navigate("/write")}>create one.</span>
       </p>
     );
   }
  return (
    <div className="author-div">
      <h1> Posts Related to {tag}</h1>
      <div className="author-posts">
        {tagPosts?.map((post, index) => (
          <FeedPost post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TagPage;
