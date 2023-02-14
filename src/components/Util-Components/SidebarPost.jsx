import React from 'react'
import { truncate } from "lodash";

function SidebarPost({ post, position,imgno }) {
 
  return (
    <div className="sidepost">
      <div className="sidepost__img">
        <img src={post?.imgUrl} alt="" />
      </div>
      <div className="sidepost__content">
        <div className="sidepost__content--tags">
          <button>#{post?.tags}</button>
          <p>{post?.duration} min read</p>
        </div>
        <h3 className="sidepost__content--title">
          {truncate(post?.title, { length: 50 })}
        </h3>
        <div className="sidepost__content--img">
          <img src={`../assets/authors/${imgno}.jpg `} alt="author" />
          <div>
            <button>{post?.author}</button>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarPost