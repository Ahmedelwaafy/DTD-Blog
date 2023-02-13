import { truncate } from "lodash";

function FeedPost({ post }) {
  const { imgUrl, author, timestamp, category, title, description, tags, long,id } = post;

  return (
    <div className="post">
      <div className="post__img">
        <img className="post__img--img" src={imgUrl} alt="" />
        <div className="post__img--glass">
          <div className="author">
            <p className="authorName">{author}</p>
            <p className="time">{timestamp.toDate().toDateString()}</p>
          </div>
          <p className="category">{category}</p>
        </div>
      </div>

      <div className="post__content">
        <div className="post__content--arrow">
          <h3>{truncate(title, { length: 47 })}</h3>
          <img src="../assets/arrow.svg" alt="arrow" />
        </div>
        <p className="post__content--description">
          {truncate(description, { length: 145 })}
        </p>
        <div className="post__content--tag">
          <p className="tags">{tags}</p>
          <p className="long">{long}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
