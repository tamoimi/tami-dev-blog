import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

const PostCard = (post: Post) => {
  return (
    <>
      {/* need to edit gradient for dark mode*/}
      <div className="p-2 rounded-md hover:bg-gradient-to-r from-slate-100 via-gray-100 to-neutral-100 dark:hover:bg-orange-400">
        <Link href={post.slug}>
          <h2 className="mb-1 text-xl">{post.title}</h2>
          <p className="mb-1 text-stone-600 dark:text-stone-300 text-sm">{post.description}</p>
          <time dateTime={post.date} className="mb-2 block text-xs text-gray-600 dark:text-gray-400">
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

// bg-gradient-to-r from-slate-100 via-gray-100 to-neutral-100