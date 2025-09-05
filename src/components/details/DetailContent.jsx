import React, { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import HeartButton from "..//HeartButton.jsx";
import { Link } from "react-router-dom";
import slugify from "../../utils/slugify.js";
import { useTranslation } from "react-i18next";

const DetailContent = ({ cocktail, slug }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [unit, setUnit] = useState("oz"); // default oz

  const { t, i18n } = useTranslation();

  // Reset checked items when slug changes
  useEffect(() => {
    setCheckedItems([]);
  }, [slug]);

  // HANDLE CHECKBOXES
  const toggleCheck = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // OZ TO CL CONVERSION FUNCTION
  const convertAmount = (amount) => {
    const isNumeric = /^[0-9]+(\.[0-9]+)?$/.test(amount);
    if (!isNumeric) return amount; // checking if amount is numeric
    const num = parseFloat(amount);
    return unit === "oz" ? `${num} oz` : `${(num * 3).toFixed(1)} cl`;
  };

  // COPY TO CLIPBOARD FUNCTION
  const handleCopy = async () => {
    try {
      const textToCopy = cocktail.ingredients
        .map((ing) => `${ing.name} — ${convertAmount(ing.amount)}`)
        .join("\n");

      await navigator.clipboard.writeText(textToCopy);

      toast.success(t("detail.copied"), {
        position: "top-right",
        autoClose: 2500,
        style: {
          backgroundColor: "#3DA7AF",
          color: "#FFF9F1",
          fontWeight: "bold",
        },
      });
    } catch (error) {
      toast.error(t("detail.copyError"), {
        position: "top-right",
        autoClose: 2500,
        style: {
          backgroundColor: "#FFFBEB",
          color: "#DC8059",
          fontWeight: "bold",
        },
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-0 md:pr-6 rounded-lg md:py-6 text-left">
      {/* IMAGE */}
      <div className="flex-1">
        <img
          src={cocktail.image}
          alt={cocktail.name}
          className="rounded-lg shadow-lg w-[90%] md:w-[300px] lg:w-[450px] h-auto mx-auto"
        />
      </div>

      {/* NAME */}
      <div className="flex-1 mx-auto px-4 md:px-0">
        
        {/* CATEGORY */}
        <div className="text-xl uppercase hover:underline active:underline mb-4">
          <Link to={`/category/${slugify(cocktail.category)}`}>
            {cocktail.category === "Hot Cocktail" ||
            cocktail.category === "Beer Cocktail" ? (
              <p>{t(`categories.${cocktail.category}`)}{t(`categorySuffix.twoWords`)}</p>
            ) : (
              <p>{t(`categories.${cocktail.category}`)} {t(`categorySuffix.oneWord`)}</p>
            )}
          </Link>
        </div>

        <div className="relative">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-2">
            {cocktail.name}
          </h1>

          {/* FAVORITE BUTTON */}
          <div className="absolute top-0 right-2">
            <HeartButton cocktail={cocktail} size={26} />
          </div>
        </div>

        {/* TASTE PROFILE */}
        <div className="mb-2">
          {cocktail.tasteProfile && (
            <p className="text-xs md:text-sm mt-2 text-[#E37C55]">
              {cocktail.tasteProfile.map((item) => t(`tasteProfiles.${item}`)).join(", ")}
            </p>
          )}
        </div>

        {/* INTRODUCTION */}
        <p className="text-stone-500 mt-2 mb-6">{cocktail.introduction[i18n.language]}</p>

        {/* INGREDIENTS */}
        <div className="relative mb-6 border border-[#DB8157] p-4 rounded-lg bg-amber-50 shadow-md">
          {/* Toggle Button */}
          <div className="absolute top-4 right-3 flex items-center gap-2 bg-[#eedfd7] rounded px-2 py-1">
            <button
              onClick={() => setUnit("oz")}
              className={`px-2 py-1 text-xs md:text-sm font-semibold rounded transition-all duration-300 cursor-pointer ${
                unit === "oz"
                  ? "bg-[#3DA7AF] text-[#FFF9F1] scale-105"
                  : " hover:bg-[#73aeb2] hover:text-[#FFF9F1] active:bg-[#73aeb2] active:text-[#FFF9F1] active:scale-95"
              }`}
            >
              oz
            </button>
            <button
              onClick={() => setUnit("cl")}
              className={`px-2 py-1 text-xs md:text-sm font-semibold rounded transition-all duration-300 cursor-pointer  ${
                unit === "cl"
                  ? "bg-[#3DA7AF] text-[#FFF9F1] scale-105"
                  : "hover:bg-[#73aeb2] hover:text-[#FFF9F1] active:bg-[#73aeb2] active:text-[#FFF9F1] active:scale-95"
              }`}
            >
              cl
            </button>
          </div>

          {/* CHECKBOX */}
          <div className="mb-4 flex items-center gap-4">
            <h2 className="text-md md:text-lg lg:text-xl font-semibold">
              {t("detail.ingredients")}
            </h2>
            <FaRegCopy
              className="text-lg cursor-pointer"
              onClick={handleCopy}
            />
          </div>
          <ul className="space-y-2">
            {cocktail.ingredients.map((ing, index) => (
              <li
                key={index}
                onClick={() => toggleCheck(index)}
                className="flex items-center gap-3 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={checkedItems.includes(index)}
                  onChange={() => toggleCheck(index)}
                  className="w-5 h-5 cursor-pointer"
                  style={{
                    accentColor: checkedItems.includes(index)
                      ? "#3DA7AF"
                      : "#eedfd7",
                  }}
                />
                <span
                  className={`${
                    checkedItems.includes(index)
                      ? "line-through text-[#3DA7AF]"
                      : ""
                  }`}
                >
                  {ing.name[i18n.language]} — {convertAmount(ing.amount)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* INSTRUCTIONS */}
        <div className="mb-2">
          <h2 className="text-md md:text-lg lg:text-xl font-semibold mb-2">
            {t("detail.instructions")}
          </h2>
          <p className="text-stone-600">{cocktail.instructions[i18n.language]}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="mt-4">
            <h2 className="text-md md:text-lg lg:text-xl font-semibold">
              {t("detail.glasses")}
            </h2>
            <p className="text-stone-600">{t(`glasses.${cocktail.glass}`)}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-md md:text-lg lg:text-xl font-semibold">
              {t("detail.alcoholLevels")}
            </h2>
            <p className="text-stone-600">
              {t(`alcoholLevels.${cocktail.alcoholLevel}`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
