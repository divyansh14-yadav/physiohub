import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { ApiFetchRequest } from "../../../axios/commonRequest";
import { useNavigate } from "react-router-dom";

const Userquiz = () => {
  const [quiz, setQuiz] = useState([]);
  console.log(quiz, "allquiz");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllQuiz = async () => {
      try {
        const response = await ApiFetchRequest("/found-quizs");

        if (response.status === 200) {
          setQuiz(response.data.allQuiz || []);
        }
      } catch (error) {
        console.error("Error fetching AllQuiz", error);
      }
    };

    fetchAllQuiz();
  }, []);

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <div className="min-h-screen px-2 py-8 flex flex-col ml-10">
          {/* Header */}
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">All Quiz</h1>
            <p className="text-gray-700 mb-6">
              Checkout our quizzes, and test your skills.
            </p>
          </div>

          {/* Flashcard */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {quiz.map((quiz, index) => (
              <div className="w-full max-w-sm mt-10 bg-white rounded-2xl shadow border border-gray-100 p-4 md:p-6 flex flex-col  mb-4">
                <div className="relative w-full">
                  {/* Image */}
                  <img
                    src={quiz.coverImage}
                    alt="Ankle Sprain"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                {/* Content */}
                <div className="w-full mt-4">
                  <h2 className="text-lg font-bold mb-1">{quiz.quizTopics}</h2>
                  <p className="text-gray-600 text-sm mb-3">
                    Questions {quiz.totalQuestions}
                  </p>
                  <button
                    className="w-full border border-purple-500 text-purple-600 font-medium rounded-lg py-2 transition hover:bg-purple-50"
                    onClick={() =>
                      navigate("/GetstartQuiz", { state: { topic: quiz.quizTopics } })
                    }
                  >
                    Join Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userquiz;
