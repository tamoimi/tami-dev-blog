import { Algorithm } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const AlgorithmCard = (algorithm: Algorithm) => {
  return (
    <>
      <div className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300 ease-in-out dark:hover:bg-gray-800">
        <Link href={algorithm.slug}>
          <h2 className="mb-1 text-xl">{algorithm.title}</h2>
          <p className="mb-1 text-stone-600 dark:text-stone-300 text-sm">{algorithm.description}</p>
          <time dateTime={algorithm.date} className="mb-2 block text-xs text-gray-600 dark:text-gray-400">
            {format(parseISO(algorithm.date), "LLLL d, yyyy")}
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
export default AlgorithmCard;
