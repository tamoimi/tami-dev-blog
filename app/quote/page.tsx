import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { MdxComponent } from "components/MdxComponent";

const Quote = () => {
  return (
    <div className="container ">
      {/* introduction */}
      <div className="my-10">
        <h1 className="font-bold mb-5">Posts</h1>
        <article>
          <div className="mx-auto">
            {allPosts.map((post) => (
              <div key={post.slug}>
                <div className="mb-8">
                  <h2 className="mb-1 text-xl hover:text-cyan-600 dark:text-blue-400">{post.title}</h2>
                  <p className="mb-1 text-stone-600 text-sm">{post.description}</p>
                  <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                  </time>
                  <div className="prose mt-16">
                    <MdxComponent code={post.body.code} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
      {/* footer section or not will see */}
      <div className="mx-auto"></div>
    </div>
  );
};
export default Quote;
