import React, { useState, useEffect } from "react";
import QuizResult from "./QuizResult";
import QuizEntrance from "./QuizEntrance";
import QuizQuestions from "./QuizQuestions";

const QuizModal = ({ isOpen, onClose }) => {

  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [history, setHistory] = useState([]);
  const [resultSlug, setResultSlug] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // SCROLL LOCKING
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // SCROLL GETS LOCKED
    } else {
      document.body.style.overflow = "auto"; // SCROLL GETS UNLOCKED
    }
    return () => {
      document.body.style.overflow = "auto"; // CLEANUP
    };
  }, [isOpen]);

  // Resetting quiz to initial state
  const handleRestart = () => {
    setIsStarted(false);
    setCurrentQuestionId(1);
    setHistory([]);
    setResultSlug(null);
  };

  // Going back to previous question or result
  const handleBack = () => {
    if (resultSlug) {
      setResultSlug(null);
      return;
    }
    setHistory((prev) => {
      if (!prev.length) return prev;
      const newHist = [...prev];
      const prevId = newHist.pop();
      setCurrentQuestionId(prevId);
      return newHist;
    });
  };

  // Handling answer selection
  const handleAnswer = (answer) => {
    setHistory((prev) => [...prev, currentQuestionId]);
    setTimeout(() => {
      if (answer.nextId) {
        setCurrentQuestionId(answer.nextId);
      } else if (answer.result) {
        setResultSlug(answer.result);
      }
    }, 600); // 0.5s delay
  };

  return (
    <div className="mt-20 md:mt-0">

      {/* QUIZ ENTRANCE PAGE */}
      {!isStarted && !resultSlug && (
        <QuizEntrance
          isOpen={isOpen}
          onClose={onClose}
          setIsStarted={setIsStarted}
        />
      )}

      {/* QUESTIONS PAGE */}
      {isStarted && !resultSlug && (
        <QuizQuestions
          currentQuestionId={currentQuestionId}
          handleRestart={handleRestart}
          handleBack={handleBack}
          isOpen={isOpen}
          onClose={onClose} selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          handleAnswer={handleAnswer}
          history={history}
        />
      )}

      {/* RESULT PAGE */}
      {resultSlug && (
        <QuizResult
          resultSlug={resultSlug}
          handleRestart={handleRestart}
          handleBack={handleBack}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}

    </div>
  );
};

export default QuizModal;