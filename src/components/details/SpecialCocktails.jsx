import React from 'react';
import Container from './Container.jsx';
import cocktails from '../../data/cocktails';

const SpecialCocktails = () => {
    const tikiCocktails = cocktails.filter(cocktail => cocktail.category == "Tiki");
    
    return (
        <div className="flex flex-col">
            <p className="text-3xl md:text-2xl font-semibold md:font-bold my-8 md:my-4 mx-8 lg:my-6 lg:mx-12 md:text-left">MORE COCKTAILS</p>

            <div className="flex gap-2 md:gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide sm:justify-center w-full px-4">
                {tikiCocktails.map((value, index) => (
                    <div key={index} className="snap-start flex-shrink-0">
                        <Container value={value} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpecialCocktails;
