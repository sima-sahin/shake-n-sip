import React from "react";
import cocktails from "../../data/cocktails";
import SideContainer from "./SideContainer";
import { useTranslation } from "react-i18next";

const SideList = ({ cocktail }) => {

  const { t } = useTranslation();
  if (!cocktail || !cocktail.tasteProfile) return null;

  // Get the taste profile of the current cocktail
  const currentTasteProfile = cocktail.tasteProfile;

  // Calculate similarity score for each cocktail
  const similarCocktails = cocktails
    .filter(c => c.slug !== cocktail.slug) // Exclude the current cocktail
    .map(c => {
      // Find the intersection between taste profiles
      const commonTastes = c.tasteProfile.filter(taste =>
        currentTasteProfile.includes(taste)
      );
      return {
        ...c,
        score: commonTastes.length, // Similarity score based on common taste count
      };
    })
    .filter(c => c.score > 0) // Only include cocktails with at least one common taste
    .sort((a, b) => b.score - a.score) // Sort by similarity score (descending)
    .slice(0, 10); // Limit to 10 items

  return (
    <div>
      <h2 className="text-3xl md:text-2xl font-semibold md:font-bold mb-8 md:mb-6 mt-10 md:mt-0 md:text-left uppercase">{t(`side.sameHeader`)}</h2>
      <ul className="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-2 md:flex md:flex-col space-y-4 md:gap-4 md:space-y-0">
        {similarCocktails.map(c => (
          <SideContainer key={c.slug} value={c} />
        ))}
      </ul>
    </div>
  );
};

export default SideList;
