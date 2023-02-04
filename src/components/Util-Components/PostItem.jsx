import { truncate } from "lodash";

function PostItem({ post, pop }) {
  const { img, author, time, category, title, description, tags, long } = post;

  return (
    <div className="border" style={{ flexDirection: `${pop ? "column" : ""}` }}>
      <div
        className="border__img"
        style={{
          height: `${pop ? "10rem" : ""}`,
          width: `${pop ? "100%" : "50%"}`,
        }}
      >
        <img className="border__img--img" src={img} alt="" />
        <div className="border__img--glass">
          <div className="author">
            <p className="authorName">{author}</p>
            <p className="time">{time}</p>
          </div>
          <p className="category">{category}</p>
        </div>
      </div>

      <div
        className="border__content"
        style={{ width: `${pop ? "100%" : "50%"}` }}
      >
        <div className="border__content--arrow">
          <h3>{truncate(title, { length: 47 })}</h3>
          <img src="../assets/arrow.svg" alt="arrow" />
        </div>
        <p className="border__content--description">
          {truncate(description, { length: 107 })}
        </p>
        <div className="border__content--tag">
          <p className="tags">{tags}</p>
          <p className="long">{long}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
