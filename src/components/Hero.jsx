import { Player } from "@lottiefiles/react-lottie-player";
import HeroPost from "./Util-Components/HeroPost";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { PostLoader } from "./Util-Components/Loaders";


function Hero() {
  const [loading, setLoading] = useState(true);
 const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingBlogs = async () => {
      const blogRef = collection(db, "blogs");
      const trendQuery = query(blogRef, where("trending", "==", true));
      const querySnapshot = await getDocs(trendQuery);
      let trendingPosts = [];
      querySnapshot.forEach((doc) => {
        trendingPosts.push({ id: doc.id, ...doc.data() });
      });

      setTrendingPosts(trendingPosts);
      setLoading(false);
    };
    getTrendingBlogs();
    
  }, []);
  if (loading) {
    return <PostLoader />;
  }
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
          <HeroPost post={trendingPosts[4]} pop />{" "}
        </div>
      </div>
      <div className="hero__right">
        <HeroPost post={trendingPosts[6]} />
        <HeroPost post={trendingPosts[7]} />
      </div>
    </section>
  );
}

export default Hero;
