"use client";

import usePagination from "app/hooks/use-pagination";
import LeftArrow from "components/Icons/left-arrow";
import RightArrow from "components/Icons/right-arrow";
import Pagination from "components/pagination";
import PostNav from "components/post-nav";
import StudyCard from "components/study-card";
import { allStudies } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { useState } from "react";

const Javascript = () => {
  // ===================================================================================================================
  // compareDesc: 날짜 기준으로 내림차순 정렬 뒤 결과를 저장한다.
  // ===================================================================================================================
  const studies = allStudies.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  // ===================================================================================================================
  // pagination
  // ===================================================================================================================
  // current page size
  const size = 5;

  // usePagination hook
  const {
    currentData: currentStudies,
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(studies, size);

  return (
    <div className="my-10">
      <PostNav />
      <article>
        <div className="mx-auto">
          {currentStudies.map((study, idx) => (
            <StudyCard key={idx} {...study} />
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
