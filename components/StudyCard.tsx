import { Study } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const StudyCard = (study: Study) => {
  return (
    <>
      <div className="mb-8">
        <h2 className="mb-1 text-xl">
          <Link href={study.slug} className=" hover:text-cyan-600 dark:hover:text-gray-200 ">
            {study.title}
          </Link>
        </h2>
        <p className="mb-1 text-stone-600 dark:text-stone-300 text-sm">{study.description}</p>
        <time dateTime={study.date} className="mb-2 block text-xs text-gray-600 dark:text-gray-400">
          {format(parseISO(study.date), "LLLL d, yyyy")}
        </time>
        {/* <div
          className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        /> */}
      </div>
    </>
  );
};
export default StudyCard;
