"use client"

import usePagination from "app/hooks/use-pagination";
import JavaScriptCard from "components/java-script-card";
import Pagination from "components/pagination";
import PostNav from "components/post-nav";
import { allJavaScripts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Javascript = () => {
  const javaScripts = allJavaScripts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  // ===================================================================================================================
  // pagination
  // ===================================================================================================================
  // current page size
  const size = 5;

  // usePagination hook
  const {
    currentData: currentJavaScripts,
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(javaScripts, size);

  return (
    <div className="my-10">
      <PostNav />
      <article>
        <div className="mx-auto">
          {currentJavaScripts.map((javaScript, idx) => (
            <JavaScriptCard key={idx} {...javaScript} />
          ))}
        </div>

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </article>
    </div>
  );
};
export default Javascript;
