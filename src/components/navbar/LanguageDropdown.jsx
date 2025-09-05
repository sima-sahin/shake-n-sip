import React, { useState, useRef, useEffect } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/slices/languageSlice.js";

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (langCode) => {
    dispatch(setLanguage(langCode));
    setIsOpen(false); // close modal
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };

  // Label for button
  const label = lang === "tr" ? "Türkçe" : "English";

  // Handle Outside Click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        tabIndex={0}
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn m-1 bg-transparent border-none shadow-none text-[#7B3306] flex items-center gap-2 px-3 py-2 rounded-lg transition"
      >
        <FaGlobe className="text-md sm:text-lg" />
        <span className="hidden sm:inline text-base hover:underline active:underline">{label}</span>
        <FaChevronDown className="text-xs sm:text-sm -ml-1 md:ml-0" />
      </div>

      {isOpen && (
        <ul
          tabIndex={0}
          className="absolute right-0 mt-2 menu p-2 shadow bg-[#FFF9F1] text-[#7B3306] rounded-lg w-40 z-50"
        >
          <li>
            <button onClick={() => handleSelect("en")}>English</button>
          </li>
          <li>
            <button onClick={() => handleSelect("tr")}>Türkçe</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;