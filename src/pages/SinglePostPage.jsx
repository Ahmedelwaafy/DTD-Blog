import { useNavigate, useParams } from "react-router-dom";
import SidebarPost from "../components/Util-Components/SidebarPost";
import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function SinglePostPage() {
  const { id } = useParams();
  const [scroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 370) {
        setScroll(true);
      } else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getBlogDetail = async () => {
      setLoading(true);
      const docRef = doc(db, "blogs", id);
      const postData = await getDoc(docRef);
      setPost(postData.data());
    };

    id && getBlogDetail();
  }, [id]);

  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="container__post">
        <div className="container__post--relative">
          <img src={post?.imgUrl} alt={post?.title} />
          <div className="absolute">
            <div className="absolute__first-row">
              <p>
                Published in{" "}
                <span>{post?.timestamp?.toDate().toDateString()}</span>
              </p>
              <div className="absolute__first-row--tags">
                <button onClick={() => navigate(`/tags/${post?.tags}`)}>
                  #{post?.tags}
                </button>
              </div>
            </div>
            <h1 className="absolute__title">{post?.title}</h1>
            <div className="absolute__last-row">
              <div className="absolute__last-row--author-image-container">
                <img src="../assets/authors/1.jpg" alt="" />
                <div>
                  <h4>{post?.author}</h4>
                  <button>Follow</button>
                </div>
              </div>
              <h6>{post?.duration} min read</h6>
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
          <p>{post?.description}</p>
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
            <h2>{post?.category?.toUpperCase()}</h2>
            {/**<button>
              See all <img src="../assets/right-arrow.svg" alt="right-arrow" />
            </button> */}
          </div>

          <div className="LeftSidebar__web--content">
            <SidebarPost
              //post={posts[0]}
              position={"Fron-End Developer"}
              imgno={"1"}
            />
            <SidebarPost
              //post={posts[1]}
              position={"Full-Stack Developer"}
              imgno={"2"}
            />
          </div>
          <button className="LeftSidebar__web--button">
            {" "}
            See More for {post?.category?.toUpperCase()}
          </button>
        </div>
      </div>
    </section>
  );
}

export default SinglePostPage;
