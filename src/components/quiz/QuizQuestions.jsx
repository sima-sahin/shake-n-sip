import React, { useMemo } from "react";
import quizQuestions from "../../data/quiz";
import { motion } from "framer-motion";
import colors from "../../utils/colors.js";
import normalizeQuestion from "../../utils/normalizeQuestion.js";

const QuizQuestions = ({ isOpen, onClose, handleBack, handleRestart, currentQuestionId, selectedAnswer, setSelectedAnswer, handleAnswer, history }) => {

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

    return (
        <>
            <div className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`} aria-hidden={!isOpen}>

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
            </div>
        </>
    )
}

export default QuizQuestions;