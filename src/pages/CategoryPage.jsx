import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FloatingQuizModal from '../components/quiz/FloatingQuizButton.jsx';
import cocktails from '../data/cocktails.js'; // Cocktails data file
import HeartButton from "../components/HeartButton.jsx";
import slugify from '../utils/slugify.js';

const CategoryPage = () => {

    const { slug } = useParams();
    const navigate = useNavigate();

    const cocktail = cocktails.filter(value => slugify(value.category) === slug);

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
                    className="mb-6 md:mb-0 text-[#E17C55] hover:underline active:underline flex items-center gap-2 cursor-pointer pl-2 md:pl-4 text-sm md:text-md"
                >
                    ← Go back
                </button>

                <div className='text-3xl uppercase mb-6 md:mb-10 font-semibold'>
                    {(slug === "hot-cocktail" || slug === "beer-cocktail") ? (
                        <p>{slug.replace("-", " ")}S</p>
                    ) : (
                        <p>{slug.replace("-", " ")} COCKTAILS</p>
                    )}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 sm:mx-6 md:mx-8 lg:mx-14l'>
                    {cocktail.map(value => (
                        <div key={value.slug} className="bg-amber-50 rounded-lg text-amber-900 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 text-left" onClick={() => navigate(`/cocktail/${value.slug}`)}>

                            <img src={value.image} alt={value.name} className=" w-full h-70 object-cover rounded" />

                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold">{value.name}</h2>
                                    {/* FAVORITES BUTTON */}
                                    <HeartButton cocktail={value} size={22} />
                                </div>

                                <p className="my-1 text-sm lg:text-base">{value.category}</p>
                                {value.tasteProfile && (
                                    <p className="text-xs md:text-sm mb-2 text-[#E37C55]">
                                        {value.tasteProfile
                                            .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                            .join(", ")}
                                    </p>
                                )}
                                <p className="line-clamp-5">{value.introduction}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/* FLOATING QUIZ ICON */}
            <div className='m-4'>
                <FloatingQuizModal />
            </div>
        </>
    )
}

export default CategoryPage;
