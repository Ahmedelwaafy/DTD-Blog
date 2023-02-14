import React from 'react'
import { truncate } from "lodash";

function SidebarPost({ post, position,imgno }) {
  const {
    imgUrl,
    author,
    timestamp,
    category,
    title,
    description,
    tags,
    duration,
    id,
  } = post;
  return (
    <div className="sidepost">
      <div className="sidepost__img">
        <img src={img} alt="" />
      </div>
      <div className="sidepost__content">
        <div className="sidepost__content--tags">
          <button>#{tags}</button>
          <p>{duration} min read</p>
        </div>
        <h3 className="sidepost__content--title">
          {truncate(title, { length: 50 })}
        </h3>
        <div className="sidepost__content--img">
          <img src={`../assets/authors/${imgno}.jpg `} alt="author" />
          <div>
            <button>{author}</button>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarPost