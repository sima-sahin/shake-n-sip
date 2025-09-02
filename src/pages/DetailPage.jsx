import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FloatingQuizModal from '../components/quiz/FloatingQuizButton.jsx';
import cocktails from '../data/cocktails.js'; // Cocktails data file
import SideList from '../components/details/SideList.jsx';
import SpecialCocktails from '../components/details/SpecialCocktails.jsx';
import SuggestedCocktails from '../components/details/SuggestedCocktails.jsx';
import DetailContent from '../components/details/DetailContent.jsx';

const DetailPage = () => {

  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the current cocktail by slug
  const cocktail = cocktails.find(value => value.slug === slug);

  // Get similar cocktails array (slugs)
  const similarSlugs = cocktail.similarCocktails;

  // Filter cocktails by similar slugs
  const suggestedCocktails = cocktails.filter((cocktail) =>
    similarSlugs.includes(cocktail.slug)
  );

  if (!cocktail) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Cocktail not found!
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 my-10 w-full">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 sm:mb-4 md:mb-1 lg:mb-2 text-[#E17C55] hover:underline active:underline flex items-center gap-2 cursor-pointer pl-2 md:pl-4 text-sm md:text-md"
        >
          ← Back to cocktails
        </button>

        <div className='flex flex-col md:flex-row gap-10 w-full'>
          {/* LEFT */}
          <div className='md:w-3/4'>

            {/* CONTENT */}
            <DetailContent cocktail={cocktail} slug={slug} />

            {/* SIMILAR COCKTAILS */}
            {/* CAROUSEL SLIDER FOR MOBILE */}
            <div className='mt-20'>
              <SuggestedCocktails suggestedCocktails={suggestedCocktails} />
            </div>

            {/* TIKI COCKTAILS FOR LARGE SCREENS */}
            <div className='hidden md:block mt-10'>
              <SpecialCocktails />
            </div>

          </div>

          {/* RIGHT */}
          {/* SIDELIST */}
          <div className='flex md:flex-row md:w-1/4 mx-auto w-full'>
            <SideList cocktail={cocktail} />
          </div>
        </div>

      </div>

      {/* FLOATING QUIZ ICON */}
      <div className='m-4'>
        <FloatingQuizModal />
      </div>
    </>
  );
};

export default DetailPage;
