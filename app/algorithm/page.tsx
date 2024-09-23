"use client";

import PostNav from "components/post-nav";
import AlgorithmCard from "components/algorithm-card";
import { allAlgorithms } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import usePagination from "app/hooks/use-pagination";
import Pagination from "components/pagination";

const Algorithms = () => {
  // ===================================================================================================================
  // compareDesc: 날짜 기준으로 내림차순 정렬 뒤 결과를 저장한다.
  // ===================================================================================================================
  const algorithms = allAlgorithms.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  // ===================================================================================================================
  // pagination
  // ===================================================================================================================
  const size = 5;
  const {
    currentData: currentAlgorithms,
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(algorithms, size);

  return (
    <div className="my-10">
      <PostNav />
      <article>
        <div className="mx-auto">
          {currentAlgorithms.map((algorithm, idx) => (
            <AlgorithmCard key={idx} {...algorithm} />
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
export default Algorithms;
