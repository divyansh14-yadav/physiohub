import React, { useEffect, useState } from "react";
import { FiSearch, FiTrash2, FiEdit2 } from "react-icons/fi";
import Sidebar from "../sidebar";
import backePainImage from "../../../images/backpainimage.svg";
import { Link } from "react-router-dom";
import { ApiFetchRequest } from "../../../axios/commonRequest";

const TeacherQuiz = () => {
  const [quiz, setQuiz] = useState([]);
  console.log(quiz, "allquiz");

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

        <div className="min-h-screen px-2 py-8 flex flex-col ml-10 w-full">
          {/* Header */}
          <div className="flex items-center justify-end max-w-6xl mb-6">
            <div className="flex items-center gap-4">
              <Link
                to={"/createQuiz"}
                className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-purple-700 transition"
              >
                + Create new
              </Link>
            </div>
          </div>

          {/* Flashcard */}
          <div className="max-w-6xl bg-white rounded-xl shadow p-4 md:p-6 space-y-6 overflow-y-scroll h-180">
            {quiz.map((quiz, idx) => (
              <div
                key={quiz.id}
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${
                  idx !== 0 ? "border-t border-neutral-200 pt-6" : ""
                }`}
              >
                {quiz.coverImage && (
                  <img
                    src={quiz.coverImage}
                    alt={quiz.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <div className="text-sm text-blue-400 font-medium mb-1">
                    {quiz.quizLable}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {quiz.quizTopics}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm gap-4">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V6a5 5 0 00-10 0v4m10 0a2 2 0 11-4 0m4 0a2 2 0 11-4 0"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {quiz.totalQuestions} Questions
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-[15px] text-[#495D79] font-medium">
                        {new Date(quiz.createdAt).toLocaleDateString("en-IN", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
                    <FiTrash2 className="w-5 h-5 text-gray-500" />
                  </button>
                  <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
                    <FiEdit2 className="w-5 h-5 text-gray-500" />
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

export default TeacherQuiz;
