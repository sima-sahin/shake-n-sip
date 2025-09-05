import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDraftFilter, applyFilters, filtersLoaded, clearDraft } from "../redux/slices/filterSlice";
import categories from "../data/categories";
import glasses from "../data/glasses";
import alcoholLevels from "../data/alcoholLevels";
import tasteProfiles from "../data/tasteProfiles";
import { useTranslation } from "react-i18next";

const FilterModal = ({ isOpen, setIsOpen }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { draft, applied, filteredCocktails, loading } = useSelector((state) => state.filters);
  const { t, i18n } = useTranslation();

  // SCROLL LOCKING
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // SCROLL GETS LOCKED
    } else {
      document.body.style.overflow = "auto"; // SCROLL GETS UNLOCKED
    }

    return () => {
      document.body.style.overflow = "auto"; // CLEANUP
    };
  }, [isOpen]);

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
      <div className="bg-[#FFF9F1] rounded-xl shadow-lg w-[95%] max-w-5xl h-[90%] flex relative overflow-hidden">

        {/* MODAL CLOSE BUTTON */}
        {!activePanel && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-lg text-stone-500 hover:text-stone-700 cursor-pointer z-50"
          >
            ✕
          </button>
        )}

        {/* LEFT SIDEBAR */}
        <div className="w-2/6 md:w-1/4 border-r p-4 flex flex-col gap-2">
          <h2 className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl my-6">
            {t("selectFilters")}
          </h2>
          {Object.keys(optionsMap).map((key) => (
            <button
              key={key}
              onClick={() =>
                setActivePanel(activePanel === key ? null : key) // CLOSE PANEL IF WE CLICK AGAIN
              }
              className={`text-left px-1 sm:px-2 md:px-3 py-2 rounded-lg cursor-pointer ${activePanel === key
                ? "bg-[#E17C55] text-[#FFF9F1]"
                : "hover:bg-[#FDF7E0]"
                }`}
            >
              {t(`detail.${key}`)}
            </button>
          ))}
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="w-4/6 md:w-3/4 p-6 flex flex-col relative">

          {/* SLIDING PANEL */}
          <div
            className={`transform transition-transform duration-300 ease-in-out ${activePanel ? "translate-y-0" : "-translate-y-full"
              } absolute top-0 left-0 right-0 bg-[#FFF9F1] border-b p-4 z-20`}
          >
            {activePanel && (
              <>
                <div className="flex justify-between items-center mb-3 mt-6">
                  <h3 className="font-semibold capitalize">
                    {t(`detail.${activePanel}`)}
                  </h3>
                </div>

                {/* OPTIONS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {optionsMap[activePanel].map((opt) => (
                    <button
                      key={opt}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(activePanel, opt);
                      }}
                      className={`px-3 py-1 rounded-full border transition cursor-pointer ${draft[activePanel].includes(opt)
                        ? "bg-[#E17C55] text-[#FFF9F1] border-[#E17C55]"
                        : "bg-[#FFF9F1] text-stone-700 border-stone-300 hover:bg-[#E17C55] hover:text-[#FFF9F1] hover:border-[#E17C55]"
                        } ${activePanel === "tasteProfiles" ? "text-sm sm:text-md" : ""}`}

                    >
                      {t(`${activePanel}.${opt}`)}
                    </button>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(clearDraft());
                      setActivePanel(null);
                    }}
                    className="px-4 py-2 rounded-lg cursor-pointer border hover:bg-[#FFFBEB] active:scale-95"
                  >
                    {t("clear")}
                  </button>
                  <button
                    disabled={isDraftEmpty}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(applyFilters());
                      setActivePanel(null);
                      setTimeout(() => dispatch(filtersLoaded()), 800);
                    }}
                    className={`px-4 py-2 rounded-lg cursor-pointer ${isDraftEmpty
                      ? "bg-stone-300 text-stone-600 cursor-not-allowed"
                      : "bg-[#7B3306] text-[#FFF9F1] hover:bg-[#59290b] active:scale-95"
                      }`}
                  >
                    {t("apply")}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* OVERLAY: WHILE PANEL IS ON THE RESULTS GETS DARKER AND DOES NOT GET TRIGGERED */}
          {activePanel && (
            <div
              className="absolute inset-0 bg-black/30 z-10"
              onClick={() => setActivePanel(null)}
            />
          )}

          {/* RESULTS */}
          <div
            className={`flex-1 overflow-y-auto relative transition-all duration-300 ${activePanel ? "mt-40" : "mt-4"} z-0`}
          >
            {/* HEADER */}
            {applied && Object.values(applied).some((arr) => arr.length > 0) && (
              <div className="text-lg md:text-xl lg:text-2xl mb-6 font-semibold md:text-left uppercase">
                {t("results")}
              </div>
            )}

            {loading ? (
              <div className="text-center py-8">{t("loadingCocktails")}</div>
            ) : applied && Object.values(applied).every((arr) => arr.length === 0) ? (
              <div className="text-center py-8 font-semibold">
                {t("noFiltersApplied")}
              </div>
            ) : filteredCocktails.length === 0 ? (
              <div className="text-center py-8 font-semibold">
                {t("noCocktailsMatch")}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCocktails.map((cocktail) => (
                  <div
                    key={cocktail.slug}
                    className="rounded-lg bg-[#fdf7e0] active:scale-95 transition cursor-pointer"
                    onClick={() => {
                      if (!activePanel) {
                        navigate(`/cocktail/${cocktail.slug}`);
                      }
                    }}
                  >
                    <img
                      src={cocktail.image}
                      alt={cocktail.name}
                      className="w-full h-35 object-cover rounded-lg"
                    />
                    <div className="p-3 text-left">
                      <h3 className="font-semibold">{cocktail.name}</h3>
                      <p className="text-xs text-[#E17C55]">
                        {t(`categories.${cocktail.category}`)}
                      </p>
                      <p className="text-sm text-stone-500 line-clamp-1 mt-1">
                        {cocktail.comment[i18n.language]}
                      </p>
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
