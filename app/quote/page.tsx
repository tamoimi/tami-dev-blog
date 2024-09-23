import { MdxComponent } from "components/mdx-component";
import { allQuotes } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { format, parseISO } from "date-fns";

const Quote = () => {
  return (
    <>
      <h1 className="underline decoration-cyan-600 mb-6 text-center">You can never do anything by half!</h1>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
        {allQuotes.map((quote, idx) => (
          <article
            key={idx}
            className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-96 overflow-x-hidden [&::-webkit-scrollbar]:[width:8px]
            [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:dark:bg-gray-900"
          >
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{quote.title}</h2>
            <time dateTime={quote.date} className="text-xs font-normal text-gray-700 dark:text-gray-400">
              {format(parseISO(quote.date), "LLLL d, yyyy")}
            </time>
            {quote.description && (
              <p className=" text-sm mt-1 text-stone-500 dark:text-slate-200">{quote.description}</p>
            )}
            <div className="prose mt-5 dark:prose-invert">
              <MdxComponent code={quote.body.code} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
export default Quote;
