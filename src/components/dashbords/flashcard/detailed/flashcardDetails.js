import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiFetchRequest } from "../../../../axios/commonRequest";
import {
  Volume2,
  Star,
  RefreshCcw,
  Settings,
  ClipboardList,
  Share2,
  BrainCircuit,
} from "lucide-react";
import LottiePlayer from "../../../../animations/LottiePlayer";
import Happy from "../../../../animations/data/Happy.json";
import icon7 from "../../../../images/icon7.png";
import icon8 from "../../../../images/icon8.png";

const FlashcardDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [detailedFlashCard, setDetailedFlashCard] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const { subject } = useParams();

  useEffect(() => {
    const handleViewFlashCard = async () => {
      try {
        const response = await ApiFetchRequest(`/found-single-card/${subject}`);
        if (response.status === 200) {
          setDetailedFlashCard(response.data.feature_single_card);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleViewFlashCard();
  }, [subject]);

  const progress = completed
    ? 100
    : ((currentIndex + 1) / detailedFlashCard.length) * 100;

  const handleNext = () => {
    if (currentIndex < detailedFlashCard.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const speakDescription = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const currentCard = detailedFlashCard[currentIndex];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Progress Bar */}
      <div className="w-full max-w-3xl mb-6 px-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {completed ? (
        <div className="min-h-screen w-[60%] bg-gray-50 flex flex-col items-center justify-center">
          <div className="w-full">
            <span className="flex justify-center">
              <LottiePlayer animationFile={Happy} />
            </span>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#191925]">
                Yeah, completed!
              </h1>
              <p className="text-[#687494] text-[15px]">
                All of the flashcard is completed reviewing.
              </p>
            </div>
            <div className="flex gap-3 justify-center mt-10">
              <div className="rounded-xl w-[190px] h-[174px] bg-[#EEF2F6]">
                <img className="px-4 py-5 m-auto" src={icon7} alt="" />
                <h1 className="text-center font-medium text-xl">
                  Cards reviewed
                </h1>
                <p className="text-center leading-6 text-[15px] text-[#495D79]">
                  Flashcard reviewed: {detailedFlashCard.length}
                </p>
              </div>
              <div className="rounded-xl w-[190px] h-[174px] bg-[#EEF2F6]">
                <img className="px-4 py-5" src={icon8} alt="" />
                <h1 className="text-center font-medium text-xl">Time spent</h1>
                <p className="text-center leading-6 text-[15px] text-[#495D79]">
                  Time spent: 10 mins
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[60%] items-center gap-35 mt-8">
            <Link to="/userFlashCard">
              <button className="w-[180px] p-2 border cursor-pointer border-slate-300 text-[#8996A9] rounded-xl hover:bg-slate-100 transition">
                Back to Dashboard
              </button>
            </Link>
            <button className="w-[180px] p-2 bg-[#7240FD] cursor-pointer text-white rounded-xl text-[15px] hover:bg-[#5E34D9] transition">
              Continue to next lesson
            </button>
          </div>
        </div>
      ) : (
        currentCard && (
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6">
            {/* Header */}
            <div className="text-sm text-gray-500 font-medium mb-4">
              Card {currentIndex + 1} of {detailedFlashCard.length} • Chapter{" "}
              <span className="text-gray-800 font-semibold">
                {currentCard.title}
              </span>
            </div>

            {/* Flashcard Content */}
            <div
              className="relative w-full h-64 perspective mb-6 cursor-pointer"
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`w-full h-full transition-transform duration-700 transform-style preserve-3d relative ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT SIDE */}
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl backface-hidden border-2"
                  style={{
                    backgroundImage: `url(${
                      detailedFlashCard[currentIndex].container.frontImage ||
                      "https://via.placeholder.com/400x250"
                    })`,
                  }}
                >
                  {/* Buttons Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2 transform rotate-y-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakDescription(currentCard.hint);
                      }}
                      className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                    >
                      <Volume2 size={20} />
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200"
                    >
                      Get a Hint
                    </button>
                  </div>

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                  >
                    <Star size={20} />
                  </button>
                </div>

                {/* BACK SIDE */}
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl backface-hidden rotate-y-180 border-2"
                  style={{
                    backgroundImage: `url(${
                      detailedFlashCard[currentIndex].container.backImage ||
                      "https://via.placeholder.com/400x250?text=Back"
                    })`,
                  }}
                >
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center font-semibold text-lg text-gray-800 mb-6">
              {currentCard.description}
            </div>

            {/* Card Actions */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4 text-gray-500">
                <button>
                  <RefreshCcw size={20} />
                </button>
                <button>
                  <Settings size={20} />
                </button>
                <button>
                  <ClipboardList size={20} />
                </button>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center border px-3 py-1 rounded-md gap-1">
                  <BrainCircuit size={16} />
                  <span className="text-sm">Spaced Repetition</span>
                </div>
                <div className="flex items-center border px-3 py-1 rounded-md gap-1">
                  <Share2 size={16} />
                  <span className="text-sm">Share</span>
                </div>
              </div>
            </div>

            {/* Confidence Buttons */}
            <div className="flex justify-between items-center gap-3 mb-6 mt-10">
              <span className="text-lg font-semibold">Confidence Level</span>
              <div className="flex gap-2">
                {["Low", "Medium", "High"].map((level) => (
                  <button
                    key={level}
                    className={`px-6 py-2 rounded-md text-xs font-bold border-2 ${
                      currentCard.confidance_level.confidance_level === level
                        ? level === "Low"
                          ? "bg-red-500 text-white"
                          : level === "Medium"
                          ? "bg-yellow-400 text-white"
                          : "bg-teal-400 text-white"
                        : "border-neutral-200 text-black"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Info */}
            <div className="flex justify-between text-sm text-gray-600 mb-6 mt-10">
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 rounded-full px-2 py-0.5">✔️</span>
                Verified by Admin
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-3xl text-gray-800">
                  {parseFloat(currentCard.averageRating || "").toFixed(1)}
                </span>
                <span>★</span>
                <span className="text-gray-400 text-xs">
                  ({currentCard.numReviews || ""} Ratings)
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-4 items-center mt-5">
              <div>
                <Link to={"/userFlashCard"}>
                  <button
                    onClick={handlePrev}
                    className="bg-gray-200 text-gray-700 px-5 py-2 cursor-pointer rounded hover:bg-gray-300"
                    disabled={currentIndex === 0}
                  >
                    Back to Dashboard
                  </button>
                </Link>
              </div>
              <div className="flex gap-5 items-center">
                <button
                  onClick={handlePrev}
                  className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300"
                  disabled={currentIndex === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
                >
                  {currentIndex === detailedFlashCard.length - 1
                    ? "Finish"
                    : "Next"}
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FlashcardDetails;
