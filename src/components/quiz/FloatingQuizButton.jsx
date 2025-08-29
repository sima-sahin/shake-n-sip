import { BiQuestionMark } from "react-icons/bi";
import { useState } from "react";
import QuizModal from "./QuizModal";
import quizLogo from "../../assets/logos/quiz-logo.png";

const FloatingQuizButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-0 right-0 md:bottom-1 md:right-0 hover:scale-105 active:scale-95 transition-transform cursor-pointer z-50"
      >
        <img src={quizLogo} className="w-30 md:w-35 lg:w-38"/>
      </button>
      {isOpen && <QuizModal onClose={() => setIsOpen(false)} isOpen={isOpen} />}
    </>
  );
};

export default FloatingQuizButton;
