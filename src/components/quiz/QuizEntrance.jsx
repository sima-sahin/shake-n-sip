import React from 'react';
import logo from "../../assets/logos/logo.png";
import quizStarter from "../../assets/logos/quiz-starter2.png";
import { useTranslation } from "react-i18next";

const QuizEntrance = ({ isOpen, onClose, setIsStarted }) => {

  const { t } = useTranslation();

  return (
    <>
      <div className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}>
        <div className="absolute inset-0 bg-black/75" onClick={onClose} />
        <div className="absolute inset-x-0 top-10 mx-auto w-[90%] h-[600px] sm:w-[80%] sm:h-[600px] md:w-[600px] md:h-[600px] rounded-xl bg-[#FFF9F1] p-6 overflow-hidden shadow-lg text-center border-2 border-[#86d7dd]">

          {/* Background Image */}
          <img
            src={quizStarter}
            alt="Quiz Intro"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-10 md:px-16 text-[#FFF9F1]">

            {/* LOGO */}
            <img src={logo} alt="shake-and-sip-logo" className="w-50 md:w-60 mt-4 mb-10" />

            {/* HEADER */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("quiz.title")}</h2>
            <p className="text-md md:text-lg mb-4 sm:mb-6 md:mb-8">
              {t("quiz.description")}
            </p>
            <button
              onClick={() => setIsStarted(true)}
              className="border-2 border-[#86d7dd] text-[#86d7dd] px-4 py-2 md:px-6 md:py-3 text-lg hover:bg-[#3da7af] hover:border-[#3da7af] hover:text-[#FFF9F1] active:bg-[#3da7af] active:border-[#3da7af] active:text-[#FFF9F1] active:scale-95 cursor-pointer rounded-lg transition"
            >
              {t("quiz.startButton")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizEntrance;
