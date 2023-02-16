import { truncate } from "lodash";

function HeroPost({ post, pop }) {
  
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
          className="border__img--img"
          src={post?.imgUrl}
          alt={post?.title}
        />
        <div className="border__img--glass">
          <div className="author">
            <p className="authorName">{post?.author}</p>
            <p className="time">{post?.timestamp.toDate().toDateString()}</p>
          </div>
          <p className="category">{post?.category}</p>
        </div>
      </div>

      <div
        className="border__content"
        style={{ width: `${pop ? "100%" : "50%"}` }}
      >
        <div className="border__content--arrow">
          <h3>{truncate(post?.title, { length: 47 })}</h3>
          <img src="../assets/arrow.svg" alt="arrow" />
        </div>
        <p className="border__content--description">
          {truncate(post?.description, { length: 107 })}
        </p>
        <div className="border__content--tag">
          <p className="tags">#{post?.tags}</p>
          <p className="long">{post?.duration} min read</p>
        </div>
      </div>
    </div>
  );
}

export default HeroPost;
