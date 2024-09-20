"use client";

import LeftArrow from "components/Icons/left-arrow";
import RightArrow from "components/Icons/right-arrow";
import PostNav from "components/PostNav";
import StudyCard from "components/StudyCard";
import { allStudies } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { useState } from "react";

const Javascript = () => {
  // ===================================================================================================================
  // compareDesc: 날짜 기준으로 내림차순 정렬 뒤 결과를 저장한다.
  // ===================================================================================================================
  const studies = allStudies.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  // ===================================================================================================================
  // state
  // ===================================================================================================================
  // current page state
  const [currentPage, setCurrentPage] = useState(1);

  // ===================================================================================================================
  // pagination
  // ===================================================================================================================
  // 한 페이지에 표시할 데이터 개수
  const size = 5;

  // 전체 페이지 개수: 데이터를 페이지당 5개로 나웠을 때 남는 데이터를 새로운 페이지로 표시
  const totalPages = Math.ceil(allStudies.length / size);

  // 현재 페이지에서 마지막 데이터의 인덱스를 계산한다.
  const indexOfLast = currentPage * size;

  // 현재 페이지에서 첫 번째 데이터의 인덱스를 계산한다.
  const indexOfFirst = indexOfLast - size;

  // 현재 페이지에서 보여줄 데이터의 배열이다. slice 함수로 studies 배열에서 일부 데이터를 잘라낸다.
  const currentStudies = studies.slice(indexOfFirst, indexOfLast);

  // currentPage 값이 전체 페이지 수보다 작을 때만 작동
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // currentPage 값이 1보다 클 때만 작동
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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
        <div className="pagination-controls flex justify-center items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-1 mx-2 bg-gray-300 rounded disabled:opacity-50 text-sm"
          >
            <LeftArrow />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-1 mx-2 bg-gray-300 rounded disabled:opacity-50"
          >
            <RightArrow />
          </button>
        </div>
      </article>
    </div>
  );
};
export default Javascript;
