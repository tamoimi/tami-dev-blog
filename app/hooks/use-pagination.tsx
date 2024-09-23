"use client";

import { useState } from "react";

const usePagination = (data: any[], size: number) => {
  // ===================================================================================================================
  // state
  // ===================================================================================================================
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / size);

  // 현재 페이지에서 마지막 데이터의 인덱스를 계산한다.
  const indexOfLast = currentPage * size;

  // 현재 페이지에서 첫 번째 데이터의 인덱스를 계산한다.
  const indexOfFirst = indexOfLast - size;

  // 현재 페이지에서 보여줄 데이터의 배열이다. slice 함수로 studies 배열에서 일부 데이터를 잘라낸다.
  const currentData = data.slice(indexOfFirst, indexOfLast);

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
  return { currentData, currentPage, totalPages, handleNextPage, handlePrevPage };
};
export default usePagination;
