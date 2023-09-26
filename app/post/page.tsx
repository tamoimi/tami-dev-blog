import PostCard from "components/PostCard";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Posts = () => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <div className="my-10">
      <article>
        <div className="mx-auto">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </article>
    </div>
  );
};
export default Posts;
