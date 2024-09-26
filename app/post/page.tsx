"use client";

import usePagination from "app/hooks/use-pagination";
import Pagination from "components/pagination";
import PostCard from "components/post-card";
import PostNav from "components/post-nav";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Posts = () => {
  // ===================================================================================================================
  // compareDesc: 날짜 기준으로 내림차순 정렬 뒤 결과를 저장한다.
  // ===================================================================================================================
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  // ===================================================================================================================
  // pagination
  // ===================================================================================================================
  // current page size
  const size = 5;

  // usePagination hook
  const {
    currentData: currentPosts,
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(posts, size);

  return (
    <div className="my-10">
      <PostNav />
      <article>
        <div className="mx-auto">
          {currentPosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
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
export default Posts;
