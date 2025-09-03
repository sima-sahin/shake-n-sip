import React from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/slices/languageSlice.js";

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);

  const handleSelect = (langCode) => {
    dispatch(setLanguage(langCode));
  };

  // Labeling for UI
  const label = lang === "tr" ? "Türkçe" : "English";

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-transparent border-none shadow-none text-[#7B3306] flex items-center gap-2 px-3 py-2 rounded-lg transition"
      >
        <FaGlobe className="text-md sm:text-lg" />
        <span className="hidden sm:inline text-base hover:underline active:underline">{label}</span>
        <FaChevronDown className="text-xs sm:text-sm -ml-1 md:ml-0" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-[#FFF9F1] text-[#7B3306] rounded-lg w-40"
      >
        <li>
          <button onClick={() => handleSelect("en")}>English</button>
        </li>
        <li>
          <button onClick={() => handleSelect("tr")}>Türkçe</button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
