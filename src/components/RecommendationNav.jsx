import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories";
import slugify from "../utils/slugify";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const RecommendationNav = ({ currentCategory }) => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const currentIndex = categories.indexOf(currentCategory);

    const prevCategory =
        currentIndex > 0
            ? categories[currentIndex - 1]
            : categories[categories.length - 1]; // wrap around to last

    const nextCategory =
        currentIndex < categories.length - 1
            ? categories[currentIndex + 1]
            : categories[0]; // wrap around to first

    console.log("prev", prevCategory);

    return (
        <div className="mt-10 pt-6 flex items-center justify-between w-[90%] sm:w-[85%] md:w-[80%] mx-auto">

            {/* LEFT */}
            {prevCategory ? (
                <button
                    onClick={() => navigate(`/category/${slugify(prevCategory)}`)}
                    className="flex items-center gap-2 text-[#E17C55] hover:underline cursor-pointer"
                >
                    <span className="text-sm"><FaAnglesLeft /></span>
                    <span className="font-medium text-sm md:text-md lg:text-lg">
                        {(prevCategory === "Hot Cocktail" || prevCategory === "Beer Cocktail")
                            ? `${t(`categories.${prevCategory}`)}${t("categorySuffix.twoWords")}`
                            : `${t(`categories.${prevCategory}`)} ${t("categorySuffix.oneWord")}`}
                    </span>

                </button>
            ) : (
                <div />
            )}

            {/* DIVIDER */}
            <div className="h-12 border-[1px] border-[#e7c2af] mx-6" />

            {/* RIGHT */}
            {nextCategory ? (
                <button
                    onClick={() => navigate(`/category/${slugify(nextCategory)}`)}
                    className="flex items-center gap-2 text-[#E17C55] hover:underline cursor-pointer"
                >
                    <span className="font-medium text-sm md:text-md lg:text-lg">
                        {(nextCategory === "Hot Cocktail" || nextCategory === "Beer Cocktail")
                            ? `${t(`categories.${nextCategory}`)}${t("categorySuffix.twoWords")}`
                            : `${t(`categories.${nextCategory}`)} ${t("categorySuffix.oneWord")}`}
                    </span>
                    <span className="text-sm"><FaAnglesRight /></span>
                </button>
            ) : (
                <div />
            )}
        </div>

    );
};

export default RecommendationNav;