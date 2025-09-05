import React from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const { t } = useTranslation();

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return null;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // DYNAMIC PAGE NUMBERS
  const getPageNumbers = () => {
    const maxVisible = window.innerWidth < 640 ? 3 : 5; // MAX 5 PAGES
    let pages = [];

    if (totalPages <= maxVisible + 2) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      const left = Math.max(2, currentPage - 1);
      const right = Math.min(totalPages - 1, currentPage + 1);

      pages = [1];

      if (left > 2) pages.push("…");

      for (let i = left; i <= right; i++) {
        pages.push(i);
      }

      if (right < totalPages - 1) pages.push("…");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-12 mx-4 sm:mx-6 md:mx-8 lg:mx-14">
      {/* PREVIOUS */}
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
        <div className="hidden md:block">{t("prev")}</div>
      </button>

      {/* PAGE NUMBERS */}
      <div className="flex gap-2">
        {getPageNumbers().map((page, i) =>
          page === "…" ? (
            <span key={i} className="px-2 py-1">
              …
            </span>
          ) : (
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
          )
        )}
      </div>

      {/* NEXT */}
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
        <div className="hidden md:block">{t("next")}</div>
        <FaAnglesRight className="text-sm" />
      </button>
    </div>
  );
};

export default Pagination;