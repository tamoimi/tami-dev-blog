import LeftArrow from "./Icons/left-arrow";
import RightArrow from "./Icons/right-arrow";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

const Pagination = ({ currentPage, totalPages, handleNextPage, handlePrevPage }: PaginationProps) => {
  return (
    <div className="pagination-controls flex justify-center items-center gap-3 mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="p-1 mx-2 bg-gray-300 rounded disabled:opacity-50 text-sm"
      >
        <LeftArrow />
      </button>
      <span className="text-sm">
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
  );
};
export default Pagination;
