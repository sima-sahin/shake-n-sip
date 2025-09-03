import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addSearchHistory } from "../../redux/slices/searchSlice";
import cocktails from "../../data/cocktails"; // database
import { useNavigate } from "react-router-dom";
import slugify from "../../utils/slugify";

const SearchBar = () => {

  const dispatch = useDispatch();
  const history = useSelector((state) => state.search.history);
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const wrapperRef = useRef(null);

  // COCKTAIL SUGGESTIONS FILTER
  useEffect(() => {
    if (input.trim() === "") {
      setFilteredCocktails([]);
    } else {
      const results = cocktails.filter((c) =>
        c.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredCocktails(results);
      setHighlightedIndex(0);
    }
  }, [input]);

  // CLOSING DROPDOWN MODAL WHEN IT'S CLICKED OUTSIDE
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // SEARCH FUNCTION
  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    let target = input;

    // FOR ROUTING THE FIRST SELECTION
    if (filteredCocktails.length > 0) {
      target = filteredCocktails[highlightedIndex].name;
    }

    dispatch(addSearchHistory(target));
    setShowDropdown(false);
    setInput("");
    navigate(`/cocktail/${slugify(target)}`);
  };

  return (
    <div ref={wrapperRef} className="relative flex justify-center w-full">
      <form
        onSubmit={handleSearch}
        className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%]"
      >
        <IoSearch className="absolute left-3 top-1/2 text-xl transform -translate-y-1/2 text-[#E17C55]" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          placeholder="Search cocktails..."
          className="w-full border border-[#E17C55] rounded-lg px-10 py-2 focus:outline-none focus:ring-1 focus:ring-[#E17C55]"
        />
      </form>

      {/* DROPDOWN */}
      {showDropdown && (
        <div className="absolute top-full mt-1 w-[80%] sm:w-[75%] md:w-[70%] lg:w-[60%] bg-amber-50 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {/* HISTORY */}
          {input.trim() === "" ? (
            history.length > 0 ? (
              history.slice(0, 5).map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 hover:bg-[#EEDFD7] cursor-pointer"
                  onClick={() => {
                    setInput("");
                    dispatch(addSearchHistory(item));
                    setShowDropdown(false);
                    navigate(`/cocktail/${slugify(item)}`);
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-400">No history</div>
            )
          ) : (
            // SUGGESTIONS
            filteredCocktails.length > 0 ? (
              filteredCocktails.slice(0, 5).map((cocktail, idx) => (
                <div
                  key={cocktail.slug}
                  className={`px-4 py-2 cursor-pointer ${idx === highlightedIndex ? "bg-[#EEDFD7]" : "hover:bg-[#EEDFD7]"
                    }`}
                  onClick={() => {
                    setInput("");
                    dispatch(addSearchHistory(cocktail.name));
                    setShowDropdown(false);
                    navigate(`/cocktail/${slugify(cocktail.name)}`);
                  }}
                >
                  {cocktail.name}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-400">No results</div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;