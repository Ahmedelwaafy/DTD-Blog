import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";

function HeroPost({ post, pop }) {
    const navigate = useNavigate();

  return (
    <div className="border" style={{ flexDirection: `${pop ? "column" : ""}` }}>
      <div
        className="border__img"
        style={{
          height: `${pop ? "10rem" : ""}`,
          width: `${pop ? "100%" : "50%"}`,
        }}
      >
        <img
          onClick={() => navigate(`/posts/${post?.id}`)}
          className="border__img--img"
          src={post?.imgUrl}
          alt={post?.title}
        />
        <div className="border__img--glass">
          <div className="author">
            <p
              onClick={() =>
                navigate(`/authors/${post?.author.replace(" ", "_")}`)
              }
              className="authorName"
            >
              {post?.author}
            </p>
            <p className="time">{post?.timestamp.toDate().toDateString()}</p>
          </div>
          <p
            onClick={() =>
              navigate(`/categories/${post?.category.replace(" ", "_")}`)
            }
            className="category"
          >
            {post?.category}
          </p>
        </div>
      </div>

      <div
        className="border__content"
        style={{ width: `${pop ? "100%" : "50%"}` }}
      >
        <div className="border__content--arrow">
          <h3 onClick={() => navigate(`/posts/${post?.id}`)}>
            {truncate(post?.title, { length: 45 })}
          </h3>
          <img
            onClick={() => navigate(`/posts/${post?.id}`)}
            src="../assets/arrow.svg"
            alt="arrow"
          />
        </div>
        <p className="border__content--description">
          {truncate(post?.description, { length: 105 })}
        </p>
        <div className="border__content--tag">
          <p onClick={() => navigate(`/tags/${post?.tags}`)} className="tags">
            #{post?.tags}
          </p>
          <p className="long">{post?.duration} min read</p>
        </div>
      </div>
    </div>
  );
}

export default HeroPost;
