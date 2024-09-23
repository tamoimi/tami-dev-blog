import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

const PostCard = (post: Post) => {
  return (
    <>
      {/* need to edit gradient for dark mode*/}
      {/* hover:bg-gradient-to-r from-slate-100 via-gray-100 to-neutral-100 dark:hover:bg-orange-400 */}
      <div className="py-3 rounded-md hover:bg-gray-100 hover:px-2 transition-all duration-700 ease-in-out dark:hover:bg-gray-800">
        <Link href={post.slug}>
          <p className="mb-2">{post.title}</p>
          <p className="mb-2 text-gray-500 dark:text-stone-300 text-sm">{post.description}</p>
          <time dateTime={post.date} className="mb-2 block text-xs text-gray-400 dark:text-stone-400">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          {/* <div
          className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        /> */}
        </Link>
      </div>
    </>
  );
};
export default PostCard;
