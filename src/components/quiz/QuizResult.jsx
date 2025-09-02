import React from 'react';
import cocktails from '../../data/cocktails';
import { Link } from "react-router-dom";

const QuizResult = ({ resultSlug, handleRestart, handleBack, isOpen, onClose }) => {

  const cocktail =
    cocktails.find((c) => c.slug === resultSlug) || null;

  return (
    <>
        <div
          className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}
          aria-hidden={!isOpen}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/75"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="absolute inset-x-0 top-10 mx-auto w-[90%] h-[600px] sm:w-[80%] sm:h-[600px] md:w-[600px] md:h-[600px] rounded-xl bg-[#FFF9F1] p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold mb-2">Your Cocktail Match</h2>
              <button
                onClick={onClose}
                className="rounded px-1 py-1 text-md cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {cocktail ? (
              <div className="space-y-4">

                {/* TOP */}
                <div className="flex gap-4">
                  {/* INTRODUCTION */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{cocktail.name}</h3>
                    {cocktail.introduction && (
                      <p className="text-sm md:text-md text-gray-600 mt-1 px-4">
                        {cocktail.comment}
                      </p>
                    )}
                    {cocktail.tasteProfile && (
                      <p className="text-xs md:text-sm text-gray-500 mt-2">
                        <span className="font-medium">Taste:</span>{" "}
                        {cocktail.tasteProfile.join(", ")}
                      </p>
                    )}
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-center gap-8 my-8">
                  {/* IMAGE */}
                  <img
                    className="h-50 w-45 sm:h-60 sm:w-60 md:h-70 md:w-70 rounded-lg object-cover"
                    src={cocktail.image}
                    alt={cocktail.name}
                  />

                  {/* INGREDIENTS */}
                  {cocktail.ingredients && (
                    <div>
                      <h4 className="font-semibold mb-2 text-md md:text-lg">Ingredients</h4>
                      <ul className="list-disc pl-3 md:pl-5 text-xs sm:text-sm space-y-1 md:space-y-1.5 text-gray-700">
                        {cocktail.ingredients.map((ing, idx) => {
                          // Checking if amount is numeric to append "oz"
                          const isNumeric = ing.amount && /^[0-9]+(\.[0-9]+)?$/.test(ing.amount);

                          return (
                            <li key={idx}>
                              {ing.name}{" "}
                              {ing.amount
                                ? `— ${ing.amount}${isNumeric ? " oz" : ""}`
                                : ""}
                            </li>
                          );
                        })}

                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={handleBack}
                    className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
                  >
                    ← Back
                  </button>

                  <button
                    onClick={handleRestart}
                    className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
                  >
                    Restart
                  </button>

                  {/* DETAILS ROUTING */}
                  <Link
                    to={`/cocktail/${resultSlug}`}
                    className="ml-auto rounded-md bg-[#3da7af] px-4 py-2 text-sm text-[#FFF9F1] border border-[#3da7af] hover:bg-[#FFF9F1] hover:text-[#3da7af] active:scale-95"
                    onClick={onClose}
                  >
                    View details
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-700">
                  We couldn’t find <span className="font-semibold">{resultSlug}</span>
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleBack}
                    className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleRestart}
                    className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
                  >
                    Restart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
    </>
  )
}

export default QuizResult;
