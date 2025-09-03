import React, { useState, useRef } from "react";
import cocktails from "../data/cocktails.js";
import { useNavigate } from "react-router-dom";
import HeartButton from "./HeartButton.jsx";
import { useSelector } from "react-redux";
import Pagination from "./Pagination.jsx";


function CocktailsList({ activeTab }) {

  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.favorites);

  // SEPARATE STATES FOR ALL COCKTAILS AND FAVORITES
  const [pageAll, setPageAll] = useState(1);
  const [pageFav, setPageFav] = useState(1);

  // REF -> LIST CONTAINER
  const listRef = useRef(null);

  // ACTIVE LIST (ALL COCKTAILS OR FAVORITES)
  const isFavorites = activeTab === "favorites";
  const filteredCocktails = isFavorites ? favorites : cocktails;

  // ACTIVE PAGE
  const page = isFavorites ? pageFav : pageAll;
  const setPage = isFavorites ? setPageFav : setPageAll;

  // RESPONSIVE ITEMS PER PAGE
  const getItemsPerPage = () => {
    if (window.innerWidth < 640) return 6;   // MOBILE
    if (window.innerWidth < 768) return 8;   // SMALL
    if (window.innerWidth < 1024) return 9;  // MEDIUM
    return 12;                               // LARGE+
  };

  const itemsPerPage = getItemsPerPage();
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCocktails = filteredCocktails.slice(startIndex, endIndex);

  // SCROLL TO TOP OF LIST WHEN PAGE CHANGES
  const handlePageChange = (newPage) => {
    setPage(newPage);
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={listRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 sm:mx-6 md:mx-8 lg:mx-14">

        {filteredCocktails.length <= 0 ? (
          <div className="text-lg my-6">
            You don't have any favorite cocktails yet.
          </div>
        ) : (
          <>
            {paginatedCocktails.map(value => (
              <div
                key={value.slug}
                className="bg-amber-50 rounded-lg text-amber-900 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 text-left shadow-md"
                onClick={() => navigate(`/cocktail/${value.slug}`)}
              >
                <img
                  src={value.image}
                  alt={value.name}
                  className="w-full h-70 object-cover rounded"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">{value.name}</h2>
                    <HeartButton cocktail={value} size={22} />
                  </div>
                  <p className="my-1 text-sm lg:text-base">{value.category}</p>
                  {value.tasteProfile && (
                    <p className="text-xs md:text-sm mb-2 text-[#E37C55]">
                      {value.tasteProfile
                        .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                        .join(", ")}
                    </p>
                  )}
                  <p className="line-clamp-5">{value.introduction}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* PAGINATION */}
      <Pagination
        totalItems={filteredCocktails.length}
        itemsPerPage={itemsPerPage}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default CocktailsList;