import React from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null; // tek sayfa varsa hiç gösterme

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-12">
      {/* Previous */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-lg border transition flex items-center gap-1
          ${
            currentPage === 1
              ? "text-gray-400 border-gray-200 cursor-not-allowed"
              : "text-[#E17C55] border-[#E17C55] hover:bg-[#FFF9F1] cursor-pointer"
          }`}
      >
        <FaAnglesLeft className="text-sm" />
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-1 rounded-lg transition cursor-pointer ${
              page === currentPage
                ? "bg-[#E17C55] text-white"
                : "border border-gray-300 text-[#7B3306] hover:bg-[#FFF9F1]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-lg border transition flex items-center gap-1
          ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-200 cursor-not-allowed"
              : "text-[#E17C55] border-[#E17C55] hover:bg-[#FFF9F1] cursor-pointer"
          }`}
      >
        Next
        <FaAnglesRight className="text-sm" />
      </button>
    </div>
  );
};

export default Pagination;