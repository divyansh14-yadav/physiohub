import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiFetchRequest } from "../../../axios/commonRequest";

const StartQuiz = () => {
  const { quiztopic } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [studentImage, setStudentImage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleStartQuiz = async () => {
      setLoading(true);
      try {
        const response = await ApiFetchRequest(
          `/found-single-quizs/${quiztopic}`,
        );
        if (response.status === 200) {
          const questions =
            response.data?.feature_single_quiz?.[0]?.question || [];
          setQuizData(questions);
          if (questions.length > 0) {
            setTimeLeft(questions[0].timeLimit);
          }
          setStudentName(response.data?.StudentName || "");
          setStudentImage(response.data?.studentImage || "");
        }
      } catch (error) {
        console.error("Failed to fetch quiz data:", error);
      } finally {
        setLoading(false);
      }
    };
    handleStartQuiz();
  }, [quiztopic]);
  const currentQuestion = quizData[currentIndex];
  const progress = completed
    ? 100
    : quizData.length > 0
    ? ((currentIndex + 1) / quizData.length) * 100
    : 0;
  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setTimeLeft(quizData[nextIndex]?.timeLimit || 0);
    } else {
      setCompleted(true);
    }
  };
  // Countdown effect
  useEffect(() => {
    if (completed || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          handleNext(); // Automatically go to next question
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, completed]);
  // Format timeLeft as MM:SS
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="loader border-4 border-blue-300 border-t-transparent rounded-full w-12 h-12 animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500 font-medium">Loading quiz...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="font-sans p-5 max-w-3xl mx-auto pb-40 pt-12">
      {/* Progress Bar */}
      <Link
        to="/studentDashboard/quiz"
        className="mt-4 text-blue-500 flex items-center gap-2 text-4xl font-bold"
      >
      </Link>
      <div className="w-full h-2 bg-gray-200 rounded-md mb-5">
        <div
          className="h-full bg-purple-700 rounded-md"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <img
            src={studentImage || "placeholder-avatar.png"}
            alt={studentName || "User Avatar"}
            className="w-10 h-10 rounded-full mr-2"
          />
          <span>{studentName || "Unknown User"}</span>
        </div>
        <div className="text-right">
          <div>Time remaining</div>
          <div className="font-bold text-2xl">{formatTime(timeLeft)}</div>
        </div>
        <div className="text-right flex gap-5 items-center">
          <div>{currentQuestion?.points} Points</div>
          <span>
            <img  alt="" />
          </span>
        </div>
      </div>
      {/* Question Area */}
      {currentQuestion && (
        <div className="border border-gray-300 p-5 rounded-md mb-5">
          <div className="text-xs font-bold text-gray-800 mb-2">
            QUESTION {currentIndex + 1} OF {quizData.length} • CHAPTER MATERIAL
          </div>
          <p className="mb-2 text-[13px] leading-6 pb-8">
            {currentQuestion.questionName}
          </p>
          {currentQuestion.questionImage && (
            <img
              src={currentQuestion.questionImage}
              alt="Question"
              className="mb-3 rounded"
            />
          )}
        </div>
      )}
      {/* Answer Options */}
      <div className="mb-5">
        {currentQuestion?.options.map((opt, i) => (
          <div
            key={opt._id}
            className="border border-gray-200 p-4 rounded-md mb-2 cursor-pointer hover:bg-gray-100"
          >
            {String.fromCharCode(65 + i)}. {opt.optionText}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button className="px-5 py-2 border-none rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300">
          Report
        </button>
        <div>
          {/* Skip button replaces Previous button */}
          {currentIndex < quizData.length - 1 && (
            <button
              onClick={handleNext}
              className="px-5 py-2 mr-2 border border-gray-300 rounded-md cursor-pointer bg-white hover:bg-gray-100"
            >
              Skip
            </button>
          )}
          {currentIndex < quizData.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-5 py-2 border-none rounded-md cursor-pointer bg-[#FF4D4D] text-white hover:bg-[#FF4D4D]"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setCompleted(true)}
              className="px-5 py-2 border-none rounded-md cursor-pointer bg-green-600 text-white hover:bg-green-700"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default StartQuiz;









