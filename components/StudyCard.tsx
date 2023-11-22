import { Study } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const StudyCard = (study: Study) => {
  return (
    <>
      <div className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300 ease-in-out dark:hover:bg-gray-800">
        <Link href={study.slug}>
          <h2 className="mb-2">{study.title}</h2>
          <p className="mb-2 text-gray-500 dark:text-stone-300 text-sm">{study.description}</p>
          <time dateTime={study.date} className="mb-2 block text-xs text-gray-400 dark:text-stone-400">
            {format(parseISO(study.date), "LLLL d, yyyy")}
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
export default StudyCard;
