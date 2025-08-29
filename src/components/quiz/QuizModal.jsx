import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import quizQuestions from "../../data/quiz";
import cocktails from "../../data/cocktails";
import quizStarter from "../../assets/logos/quiz-starter2.png";
import { motion } from "framer-motion";
import logo from "../../assets/logos/logo.png";

function normalizeQuestion(q) {
  return {
    ...q,
    answers: q.answers.map((a) => ({
      ...a,
      label: a.label ?? a.text, // text varsa label'a taşı
    })),
  };
}

const colors = [
  "#C05F3D", // deep orange
  "#2F868C", // teal
  "#E6B800", // golden yellow
  "#5C2204", // dark brown
  "#63A8AD", // muted light blue
  "#E0A97D", // warm peach
  "#C65F52", // dark coral red
  "#8F7AE6", // rich purple
  "#B8E38C", // soft green
  "#A84C1A", // burnt orange
  "#4B8C5C", // forest green
  "#6C4C8C", // deep violet
  "#D48C3D", // amber
  "#A63C3C", // brick red
  "#3D6CA8", // dark blue
];

const QuizModal = ({ isOpen, onClose }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [history, setHistory] = useState([]);
  const [resultSlug, setResultSlug] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Map of questions for quick access
  const questionMap = useMemo(() => {
    const map = new Map();
    quizQuestions.forEach((value) => map.set(value.id, normalizeQuestion(value)));
    return map;
  }, []);

  const currentQuestion = questionMap.get(currentQuestionId);

  // Special styling for longer questions
  const specialQuestions = [7, 23, 27, 31];
  const isSpecial = specialQuestions.includes(currentQuestion.id);

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

  //  QUIZ ENTRANCE PAGE
  if (!isStarted && !resultSlug) {
    return (
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
            {/* <p className="text-[#D9815A] font-bold text-[50px] tracking-[1px]">SHAKE'N SI
            P</p> */}
            <img src={logo} alt="shake-and-sip-logo" className="w-50 md:w-60 mt-4 mb-10" />

            {/* HEADER */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Perfect Cocktail</h2>
            <p className="text-md md:text-lg mb-4 sm:mb-6 md:mb-8">
              Answer a few quick questions and we'll recommend the cocktail that matches your vibe.
            </p>
            <button
              onClick={() => setIsStarted(true)}
              className="border-2 border-[#86d7dd] text-[#86d7dd] px-4 py-2 md:px-6 md:py-3 text-lg hover:bg-[#3da7af] hover:border-[#3da7af] hover:text-[#FFF9F1] active:bg-[#3da7af] active:border-[#3da7af] active:text-[#FFF9F1] active:scale-95 cursor-pointer rounded-lg transition"
            >
              Start the Quiz
            </button>
          </div>
        </div>
      </div>

    );
  }

  // RESULT PAGE
  if (resultSlug) {
    const cocktail =
      cocktails.find((c) => c.slug === resultSlug) || null;

    return (
      <div
        className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}
        aria-hidden={!isOpen}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/75"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="absolute inset-x-0 top-10 mx-auto w-[90%] h-[600px] sm:w-[80%] sm:h-[600px] md:w-[600px] md:h-[600px] rounded-xl bg-[#FFF9F1] p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold mb-2">Your Cocktail Match</h2>
            <button
              onClick={onClose}
              className="rounded px-1 py-1 text-md cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {cocktail ? (
            <div className="space-y-4">

              {/* TOP */}
              <div className="flex gap-4">
                {/* INTRODUCTION */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{cocktail.name}</h3>
                  {cocktail.introduction && (
                    <p className="text-sm md:text-md text-gray-600 mt-1 px-4">
                      {cocktail.comment}
                    </p>
                  )}
                  {cocktail.tasteProfile && (
                    <p className="text-xs md:text-sm text-gray-500 mt-2">
                      <span className="font-medium">Taste:</span>{" "}
                      {cocktail.tasteProfile.join(", ")}
                    </p>
                  )}
                </div>
              </div>

              {/* BOTTOM */}
              <div className="flex justify-center gap-8 my-8">
                {/* IMAGE */}
                <img
                  className="h-50 w-45 sm:h-60 sm:w-60 md:h-70 md:w-70 rounded-lg object-cover"
                  src={cocktail.image}
                  alt={cocktail.name}
                />

                {/* INGREDIENTS */}
                {cocktail.ingredients && (
                  <div>
                    <h4 className="font-semibold mb-2 text-md md:text-lg">Ingredients</h4>
                    <ul className="list-disc pl-3 md:pl-5 text-xs sm:text-sm space-y-1 md:space-y-1.5 text-gray-700">
                      {cocktail.ingredients.map((ing, idx) => {
                        // Checking if amount is numeric to append "oz"
                        const isNumeric = ing.amount && /^[0-9]+(\.[0-9]+)?$/.test(ing.amount);

                        return (
                          <li key={idx}>
                            {ing.name}{" "}
                            {ing.amount
                              ? `— ${ing.amount}${isNumeric ? " oz" : ""}`
                              : ""}
                          </li>
                        );
                      })}

                    </ul>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleBack}
                  className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
                >
                  ← Back
                </button>

                <button
                  onClick={handleRestart}
                  className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
                >
                  Restart
                </button>

                {/* DETAILS ROUTING */}
                <Link
                  to={`/cocktail/${resultSlug}`}
                  className="ml-auto rounded-md bg-[#3da7af] px-4 py-2 text-sm text-[#FFF9F1] border border-[#3da7af] hover:bg-[#FFF9F1] hover:text-[#3da7af] active:scale-95"
                  onClick={onClose}
                >
                  View details
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-700">
                We couldn’t find <span className="font-semibold">{resultSlug}</span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleBack}
                  className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
                >
                  ← Back
                </button>
                <button
                  onClick={handleRestart}
                  className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
                >
                  Restart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // QUESTION PAGE
  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" onClick={onClose} />

      {/* Modal */}
      <div className="absolute inset-x-0 top-10 mx-auto w-[90%] h-[600px] sm:w-[80%] sm:h-[600px] md:w-[600px] md:h-[600px] rounded-xl bg-[#FFF9F1] p-4 md:p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Find Your Cocktail Quiz</h2>
          <button
            onClick={onClose}
            className="rounded px-1 py-1 text-md cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {currentQuestion ? (
          <>
            <p className={`${isSpecial ? 'text-lg md:text-2xl leading-snug m-4 p-2 lg:p-2' : 'text-2xl md:text-3xl m-6 p-4 lg:p-6'}`}>{currentQuestion.question}</p>

            <div className="grid gap-3 mx-6 md:mx-10">
              {currentQuestion.answers.map((ans, i) => {
                const color = colors[Math.floor(Math.random() * colors.length)] // background color randomizer
                return (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setSelectedAnswer(ans.label);
                      handleAnswer(ans);
                    }}
                    className={`relative overflow-hidden rounded-md border text-left text-md cursor-pointer transition-colors duration-500 ${currentQuestionId === 27 ? "px-3 py-2 lg:px-5 lg:py-2" : "px-4 py-2 lg:px-6 lg:py-3"} ${selectedAnswer === ans.label ? "text-white" : ""}`}
                    style={{
                      borderColor: color,
                      color: selectedAnswer === ans.label ? "#FFF9F1" : color,
                      background: selectedAnswer === ans.label ? color : "transparent",
                    }}
                    whileHover={{
                      background: color,
                      color: "#FFF9F1",
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="relative z-10">{ans.label}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between gap-2 mx-6 md:mx-10">
              <button
                onClick={handleBack}
                disabled={history.length === 0}
                className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm disabled:opacity-50 hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95"
              >
                ← Back
              </button>
              <button
                onClick={handleRestart}
                className="rounded-md border border-[#7B3306] text-[#7B3306] px-3 py-2 text-sm hover:bg-[#E17C55] cursor-pointer hover:text-[#FFF9F1] active:bg-[#E17C55] active:text-[#FFF9F1] active:scale-95">
                Restart
              </button>
            </div>
          </>
        ) : (
          <div className="text-sm text-[#A63C3C]">
            Question not found (id: {currentQuestionId}). Check your flow.
            <div className="mt-3">
              <button
                onClick={handleRestart}
                className="rounded border px-3 py-2 text-sm hover:bg-[#FFF9F1] active:scale-95"
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default QuizModal;
