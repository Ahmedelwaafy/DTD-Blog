import LeftSidebar from "./Util-Components/LeftSidebar"
import Posts from "./Util-Components/Posts"
import RightSidebar from "./Util-Components/RightSidebar"

function PostsFeed() {
  return (
    <section className="PostsFeed">
      <LeftSidebar />
      <Posts />
      <RightSidebar />
    </section>
  );
}

export default PostsFeed;
