import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDraftFilter, applyFilters, filtersLoaded, clearDraft } from "../redux/slices/filterSlice";
import categories from "../data/categories";
import glasses from "../data/glasses";
import alcoholLevels from "../data/alcoholLevels";
import tasteProfiles from "../data/tasteProfiles";
import namify from "../utils/namify.js";

const FilterModal = ({ isOpen, setIsOpen }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { draft, applied, filteredCocktails, loading } = useSelector((state) => state.filters);

  const [activePanel, setActivePanel] = useState(null);

  if (!isOpen) return null;

  const optionsMap = {
    categories,
    glasses,
    alcoholLevels,
    tasteProfiles,
  };

  const handleSelect = (key, value) => {
    dispatch(toggleDraftFilter({ key, value }));
  };

  const isDraftEmpty = Object.values(draft).every((arr) => arr.length === 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-[95%] max-w-5xl h-[90%] flex relative overflow-hidden">

        {/* Modal Close Button */}
        {!activePanel && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-lg text-gray-500 hover:text-gray-700 cursor-pointer z-50"
          >
            ✕
          </button>
        )}

        {/* LEFT SIDEBAR */}
        <div className="w-1/4 border-r p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl my-6">SELECT FILTERS</h2>
          {Object.keys(optionsMap).map((key) => (
            <button
              key={key}
              onClick={() => setActivePanel(key)}
              className={`text-left px-3 py-2 rounded-lg cursor-pointer ${activePanel === key
                  ? "bg-[#E17C55] text-white"
                  : "hover:bg-gray-100"
                }`}
            >
              {namify(key)}
            </button>
          ))}
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div
          className="w-3/4 p-6 flex flex-col relative"
          onClick={() => activePanel && setActivePanel(null)}
        >
          {/* Sliding Panel */}
          <div
            className={`transform transition-transform duration-300 ease-in-out ${activePanel ? "translate-y-0" : "-translate-y-full"
              } absolute top-0 left-0 right-0 bg-white border-b p-4 z-10`}
          >
            {activePanel && (
              <>
                <div className="flex justify-between items-center mb-3 mt-6">
                  <h3 className="font-semibold capitalize">{activePanel}</h3>
                </div>

                {/* Options */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {optionsMap[activePanel].map((opt) => (
                    <button
                      key={opt}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(activePanel, opt);
                      }}
                      className={`px-3 py-1 rounded-full border transition cursor-pointer ${draft[activePanel].includes(opt)
                          ? "bg-[#E17C55] text-white border-[#E17C55]"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-[#E17C55] hover:text-white hover:border-[#E17C55]"
                        }`}
                    >
                      {namify(opt)}
                    </button>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(clearDraft());
                      setActivePanel(null);
                    }}
                    className="px-4 py-2 rounded-lg cursor-pointer border hover:bg-gray-100 active:scale-95"
                  >
                    Clear
                  </button>
                  <button
                    disabled={isDraftEmpty}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(applyFilters());
                      setActivePanel(null);
                      setTimeout(() => dispatch(filtersLoaded()), 800); // Loading effect
                    }}
                    className={`px-4 py-2 rounded-lg cursor-pointer ${isDraftEmpty
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-[#7B3306] text-white hover:bg-[#59290b] active:scale-95"
                      }`}
                  >
                    Apply
                  </button>
                </div>
              </>
            )}
          </div>

          {/* RESULTS */}
          <div
            className={`flex-1 overflow-y-auto relative transition-all duration-300 ${activePanel ? "mt-40" : "mt-10"
              }`}
          >
            {loading ? (
              <div className="text-center py-8">Loading cocktails...</div>
            ) : applied &&
              Object.values(applied).every((arr) => arr.length === 0) ? (
              <div className="text-center py-8 font-semibold">
                No filters applied yet
              </div>
            ) : filteredCocktails.length === 0 ? (
              <div className="text-center py-8 font-semibold">
                No cocktails match your filters
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCocktails.map((cocktail) => (
                  <div
                    key={cocktail.slug}
                    className="border rounded-lg hover:border-[#7B3306] active:scale-95 transition cursor-pointer"
                    onClick={() => navigate(`/cocktail/${cocktail.slug}`)}
                  >
                    <img
                      src={cocktail.image}
                      alt={cocktail.name}
                      className="w-full h-35 object-cover rounded-lg"
                    />
                    <div className="p-3 text-left">
                      <h3 className="font-semibold">{cocktail.name}</h3>
                      <p className="text-xs text-[#E17C55]">{cocktail.category}</p>
                      <p className="text-sm text-gray-500 line-clamp-1 mt-1">{cocktail.comment}</p>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FilterModal;