
function Authors({ post, position, imgno }) {

  const {  author } = post;
  return (
    <div className="author-container">
      <div className="author-container__img">
        <img src={`../assets/authors/${imgno}.jpg `} alt="author" />
        <div>
          <button>{author}</button>
          <p>{position}</p>
        </div>
      </div>
      <button className="follow-button">
        <span>Follow</span>
      </button>
    </div>
  );
}

export default Authors