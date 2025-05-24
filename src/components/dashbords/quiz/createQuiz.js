import React, { useState } from "react";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";

const CreateQuiz = () => {
  const [questions, setQuestions] = useState([
    // Initial question
    {
      isOpen: true,
      optionsCorrectness: [false, false, false, false],
    },
  ]);

  // Handler to add a new question
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        isOpen: true, // New question is open by default
        optionsCorrectness: [false, false, false, false],
      },
    ]);
  };

  // Handler to toggle question open/close state
  const handleToggleQuestionOpen = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
  };

  // Handler to toggle option correctness for a specific question and option
  const handleToggleOptionCorrect = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].optionsCorrectness[optionIndex] =
      !newQuestions[questionIndex].optionsCorrectness[optionIndex];
    setQuestions(newQuestions);
  };

  // Handler to delete a question
  const handleDeleteQuestion = (indexToDelete) => {
    setQuestions(questions.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="flex min-h-screen bg-[#f6f8fb]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content Area */}

      <div className="container mx-auto max-w-6xl p-6 flex-grow ">
        <div className="flex items-center gap-2">
          <Link
            to={"/teacherQuiz"}
            className="text-2xl text-gray-500 hover:text-gray-700"
          >
            &larr; Quiz
          </Link>
        </div>
        {/* Cover Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-6 mt-5">
          <h1 className="text-2xl font-semibold">Create quiz</h1>
          <h2 className="text-xl font-semibold mb-4 mt-5">Cover</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition duration-200 ease-in-out">
            {/* Image Preview goes here when an image is uploaded */}
            <input type="file" className="hidden" id="cover-upload" />
            <label htmlFor="cover-upload" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <p className="text-gray-600 mt-2">Drag or drop image here</p>
              <p className="text-gray-500 text-sm">
                Image should be horizontal, at least 1500 x 500 px
              </p>
            </label>
          </div>
        </div>

        {/* Topic Sections */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          {/* Quiz Topic */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quiz Topic</h2>
            <div className="mb-4">
              <label
                htmlFor="quiz-label"
                className="block text-sm font-medium text-gray-700"
              >
                Label
              </label>
              <input
                type="text"
                id="quiz-label"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                placeholder="Enter label here"
              />
            </div>
            <div>
              <label
                htmlFor="quiz-category"
                className="block text-sm font-medium text-gray-700"
              >
                Card topic
              </label>
              <input
                type="text"
                id="quiz-label"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                placeholder="Enter card topic here"
              />
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Questions</h2>

          {questions.map((question, index) => (
            <div key={index} className="border border-gray-200 rounded-lg mb-4">
              <div
                className="flex justify-between items-center p-4 bg-gray-50 rounded-t-lg cursor-pointer"
                onClick={() => handleToggleQuestionOpen(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  Question {index + 1}
                </h3>
                <div className="flex items-center space-x-4">
                  {/* Delete Icon */}
                  <button
                    className="text-gray-400 hover:text-red-600"
                    onClick={(e) => {
                      e.stopPropagation(); /* Prevent click from toggling question */
                      handleDeleteQuestion(index); // Call the delete handler
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m14 0H5m10 0a1 1 0 01-1 1h-4a1 1 0 01-1-1m2 4h.01M17 16h.01"
                      />
                    </svg>
                  </button>
                  {/* Collapse/Expand Icon */}
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleQuestionOpen(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transform transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{
                        transform: question.isOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {question.isOpen && (
                <div className="p-4">
                  {/* Question Thumbnail */}
                  <div className="mb-4 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition duration-200 ease-in-out">
                    {/* Image Preview goes here when an image is uploaded */}
                    <input
                      type="file"
                      className="hidden"
                      id={`question-thumbnail-upload-${index}`}
                    />
                    <label
                      htmlFor={`question-thumbnail-upload-${index}`}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <p className="text-gray-600 mt-2">
                        Drag or drop image here
                      </p>
                      <p className="text-gray-500 text-sm">
                        Image should be horizontal, at least 1500 x 1300 px
                      </p>
                    </label>
                  </div>

                  {/* Question Text */}
                  <div className="mb-4">
                    <label
                      htmlFor={`question-text-${index}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question
                    </label>
                    <input
                      type="text"
                      id={`question-text-${index}`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                      placeholder="Write question here"
                    />
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {question.optionsCorrectness.map(
                      (isCorrect, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="flex items-center w-full border border-gray-300 rounded-md shadow-sm focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50">
                            <input
                              type="text"
                              className="block w-full p-2 rounded-l-md focus:outline-none"
                              placeholder={`Enter option ${
                                optionIndex + 1
                              } here`}
                            />
                            <label className="inline-flex items-center cursor-pointer mr-4">
                              <input
                                type="checkbox"
                                checked={isCorrect}
                                onChange={() =>
                                  handleToggleOptionCorrect(index, optionIndex)
                                }
                                className="sr-only peer"
                              />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                            </label>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Explanation */}
                  <div>
                    <label
                      htmlFor={`explanation-${index}`}
                      className="block text-sm font-medium text-gray-700 pt-3"
                    >
                      Explanation
                    </label>
                    <textarea
                      id={`explanation-${index}`}
                      rows="3"
                      className="mt-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                      placeholder="Write explanation here..."
                    ></textarea>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Add Question Button */}
          <div className="flex justify-end">
            <button
              className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleAddQuestion}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
