import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";

function FeedPost({ post }) {
  const { imgUrl, author, timestamp, category, title, description, tags, duration,id } = post;
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__img">
        <img
          onClick={() => navigate(`/posts/${id}`)}
          className="post__img--img"
          src={imgUrl}
          alt={title}
        />
        <div className="post__img--glass">
          <div className="author">
            <p
              onClick={() =>
                navigate(`/authors/${post?.author.replace(" ", "_")}`)
              }
              className="authorName"
            >
              {author}
            </p>
            <p className="time">{timestamp.toDate().toDateString()}</p>
          </div>
          <p
            onClick={() =>
              navigate(`/categories/${post?.category.replace(" ", "_")}`)
            }
            className="category"
          >
            {category}
          </p>
        </div>
      </div>

      <div className="post__content">
        <div className="post__content--arrow">
          <h3 onClick={() => navigate(`/posts/${id}`)}>
            {truncate(title, { length: 47 })}
          </h3>
          <img
            onClick={() => navigate(`/posts/${id}`)}
            src="../assets/arrow.svg"
            alt="arrow"
          />
        </div>
        <p className="post__content--description">
          {truncate(description, { length: 145 })}
        </p>
        <div className="post__content--tag">
          <p onClick={() => navigate(`/tags/${post?.tags}`)} className="tags">
            #{tags}
          </p>
          <p className="long">{duration} min read</p>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
