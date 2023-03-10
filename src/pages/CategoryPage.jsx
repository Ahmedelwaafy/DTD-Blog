import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeedPost from "../components/Util-Components/FeedPost";
import { PostLoader } from "../components/Util-Components/Loaders";
import { db } from "../firebase";

function CategoryPage() {
      const navigate = useNavigate();

  const { CategoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [categoryPosts, setCategoryPosts] = useState([]);
  useEffect(() => {
    const getcategoryBlogs = async () => {
      const blogRef = collection(db, "blogs");
      const trendQuery = query(
        blogRef,
        where("category", "==", CategoryName.replace("_", " "))
      );
      const querySnapshot = await getDocs(trendQuery);
      let categoryPosts = [];
      querySnapshot.forEach((doc) => {
        categoryPosts.push({ id: doc.id, ...doc.data() });
      });

      setCategoryPosts(categoryPosts);
      setLoading(false);
    };
    getcategoryBlogs();
  }, [CategoryName]);
  
  if (loading) {
    return <PostLoader />;
  }
  if (categoryPosts.length === 0) {
    return (
      <p className="noposts">
        No related posts found,{" "}
        <span onClick={() => navigate("/write")}>create one.</span>
      </p>
    );
  }
  return (
    <div className="author-div">
      <h1> Posts Related to {CategoryName.replace("_", " ")}</h1>
      <div className="author-posts">
        {categoryPosts?.map((post, index) => (
          <FeedPost post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
