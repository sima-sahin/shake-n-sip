import React from "react";
import { FaFilter } from "react-icons/fa";

const TabBar = ({ setActiveTab, activeTab, openFilterModal }) => {

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Props passing to parent component
  };

  return (
    <div className="flex justify-between items-center mx-4 sm:mx-6 md:mx-8 lg:mx-14">
      {/* LEFT - TABS */}
      <div className="flex space-x-2 md:space-x-4">
        <button
          className={`px-3 py-2 md:px-4 font-medium text-sm md:text-base rounded-md cursor-pointer active:scale-95 ${
            activeTab === "all"
              ? "bg-[#E17C55] text-white"
              : "border border-[#E17C55] text-[#7B3306]"
          }`}
          onClick={() => handleTabClick("all")}
        >
          All Cocktails
        </button>
        <button
          className={`px-3 py-2 md:px-4 font-medium text-sm md:text-base rounded-md cursor-pointer active:scale-95 ${
            activeTab === "favorites"
              ? "bg-[#E17C55] text-white"
              : "border border-[#E17C55] text-[#7B3306]"
          }`}
          onClick={() => handleTabClick("favorites")}
        >
          Favorites
        </button>
      </div>

      {/* RIGHT - FILTER BUTTON */}
      <button
        className="flex items-center space-x-0 sm:space-x-2 px-3 py-2 md:px-4 border border-[#3DA7AF] hover:bg-[#aad7da] active:bg-[#aad7da] active:scale-95 font-medium text-sm md:text-base rounded-md text-[#3DA7AF] cursor-pointer"
        onClick={openFilterModal}
      >
        <FaFilter className="text-[#3DA7AF]" />
        <span className="hidden sm:flex">Filter</span>
      </button>
    </div>
  );
};

export default TabBar;
