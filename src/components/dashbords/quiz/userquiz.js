import React from 'react'
import Sidebar from '../sidebar'

const Userquiz = () => {
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
      <div className="w-full max-w-sm mt-10 bg-white rounded-2xl shadow border border-gray-100 p-4 md:p-6 flex flex-col  mb-4">
        <div className="relative w-full">
          {/* Tag */}
          <span className="absolute top-2 left-2 bg-purple-200 text-purple-700 text-xs font-semibold px-3 py-1 rounded-lg z-10">
            Ankle Sprains
          </span>
          {/* Image */}
          <img
            src="https://img.freepik.com/free-photo/3d-illustration-human-body-with-highlighted-ankle-bone_1048-10454.jpg"
            alt="Ankle Sprain"
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
        {/* Content */}
        <div className="w-full mt-4">
          <h2 className="text-lg font-bold mb-1">Cell Biology Fundamentals</h2>
          <p className="text-gray-600 text-sm mb-3">
          Questions 3
          </p>
          <button className="w-full border border-purple-500 text-purple-600 font-medium rounded-lg py-2 transition hover:bg-purple-50">
            Join Quiz
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Userquiz