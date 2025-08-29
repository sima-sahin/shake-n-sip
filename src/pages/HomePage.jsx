import React, { useState } from 'react';
import CocktailsList from '../components/CocktailsList';
import FloatingQuizModal from '../components/quiz/FloatingQuizButton';
import Banner from '../components/Banner';
import TabBar from '../components/TabBar';

const HomePage = () => {

  const [activeTab, setActiveTab] = useState("all");

  // useEffect(() => {
  //   setActiveTab("all");
  // }, []);

  return (
    <>
      <Banner />
      <div className="mt-2 mb-0 md:mt-4 md:mb-4 px-6 sm:px-0">
        <div className='mt-14 mb-6'>
          <TabBar setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <CocktailsList activeTab={activeTab} />
      </div>
      {/* FLOATING QUIZ ICON */}
      <div className='m-4'>
        <FloatingQuizModal />
      </div>
    </>
  )
}

export default HomePage;
