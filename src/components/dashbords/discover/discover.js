import React, { useState } from 'react';
import Sidebar from '../sidebar';
import { ArrowUp, ArrowDown, Trophy, Zap } from "lucide-react";

const Discover = () => {

  const [hovered, setHovered] = useState(null);
  const activityData = [
    { top: 0, bottom: 8 },   // M
    { top: 0, bottom: 10 },  // T
    { top: 0, bottom: 6 },   // W
    { top: 0, bottom: 12 },  // T
    { top: 4, bottom: 12 },  // F (stacked: top=teal, bottom=purple)
    { top: 0, bottom: 7 },   // S
    { top: 0, bottom: 5 },   // S
  ];
  
  const tooltipData = {
    date: "13 July 2024",
    details: [
      { label: "Flashcard", value: "30m 2s", color: "text-purple-500" },
      { label: "Quiz", value: "14m 28s", color: "text-teal-400" },
    ],
  };
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-10 py-6">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          
          {/* Center Section (Learning) */}
          <div className=" space-y-6 w-[90%] m-auto">
            <h2 className="font-bold text-2xl">Continue Learning</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md p-4 h-95">
                <div className="relative">
                  <img
                    src="https://img.freepik.com/free-photo/3d-medical-background-with-lungs_1048-9761.jpg"
                    alt="Anatomy"
                    className="rounded-xl h-54 w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Quiz
                  </span>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Quiz • 20 questions left</p>
                  <h3 className="font-bold text-lg">Anatomy Upper Quadrant</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    A comprehensive course on upper quadrant anatomy.
                  </p>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '48%' }}></div>
                    </div>
                    <p className="text-xs text-right text-gray-500 mt-1">48% completed</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md p-4 h-95">
                <div className="relative">
                  <img
                    src="https://img.freepik.com/free-photo/3d-medical-background-with-male-figure-pain-spots_1048-9760.jpg"
                    alt="Flashcard"
                    className="rounded-xl h-54 w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Flashcard
                  </span>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Quiz • 20 questions left</p>
                  <h3 className="font-bold text-lg">Anatomy Upper Quadrant</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Learn anatomy of the upper quadrant interactively.
                  </p>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                    <p className="text-xs text-right text-gray-500 mt-1">64% completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggested Quiz Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-4 md:mb-0 md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Suggested Quiz</h3>
                <p className="text-sm mb-3">
                  Personalized quiz suggestions to boost your knowledge.
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold shadow hover:bg-blue-50 transition">
                  Explore
                </button>
              </div>
              <img
                src="https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_1280.png"
                alt="Penguin"
                className="w-28 h-28"
              />
            </div>

            {/* Saved Quiz Section */}
<div>
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-bold text-2xl">Saved Quiz</h2>
    <button className="text-sm text-blue-600 hover:underline">See All</button>
  </div>

  {/* Saved Quiz Cards */}
  <div className="space-y-4">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
      <img
        src="https://img.freepik.com/free-photo/3d-medical-background-with-male-figure-pain-spots_1048-9760.jpg"
        alt="Exercise"
        className="rounded-lg h-20 w-20 object-cover mr-4"
      />
      <div>
        <h4 className="font-bold text-md">Exercise Therapy</h4>
        <div className="flex gap-2 mt-1 flex-wrap">
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">Muscle</span>
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">Cardiovascular</span>
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">Ribs</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          This quiz will test your knowledge of different types of exercise therapy, its benefits, and its application methods.
        </p>
        <p className="text-xs text-gray-500 mt-1">140 questions • ⏱ 20 min</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
      <img
        src="https://img.freepik.com/free-photo/3d-medical-background-with-lungs_1048-9761.jpg"
        alt="Exercise"
        className="rounded-lg h-20 w-20 object-cover mr-4"
      />
      <div>
        <h4 className="font-bold text-md">Exercise Therapy</h4>
        <div className="flex gap-2 mt-1 flex-wrap">
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">Muscle</span>
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">Cardiovascular</span>
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">Ribs</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          This quiz will test your knowledge of different types of exercise therapy, its benefits, and its application methods.
        </p>
        <p className="text-xs text-gray-500 mt-1">140 questions • ⏱ 20 min</p>
      </div>
    </div>
  </div>
</div>
{/* Flashcard Section */}
<div className="mt-10">
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-bold text-2xl">Flashcard</h2>
    <button className="text-sm text-blue-600 hover:underline">See All</button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Flashcard 1 */}
    <div className="bg-white rounded-2xl shadow-md p-4">
      <img
        src="https://img.freepik.com/free-photo/3d-medical-background-with-lungs_1048-9761.jpg"
        alt="Flashcard"
        className="rounded-xl h-54 w-full object-cover"
      />
      <p className="text-xs text-purple-600 mt-2 font-medium">
        <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mr-1"></span>
        Admin Verified
      </p>
      <h4 className="font-bold text-md mt-1">Musculoskeletal Physiology</h4>
      <div className="flex gap-2 mt-1 flex-wrap">
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Muscle</span>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Cardiovascular</span>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Ribs</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Exercise Therapy is a treatment method that uses physical exercise to address various medical conditions.
      </p>
      <p className="text-xs text-gray-500 mt-1">120 cards • ⏱ 20 min</p>
    </div>

    {/* Flashcard 2 */}
    <div className="bg-white rounded-2xl shadow-md p-4">
      <img
        src="https://img.freepik.com/free-photo/physiotherapist-working-with-woman-rehabilitation-center_23-2149240945.jpg"
        alt="Flashcard"
        className="rounded-xl h-54 w-full object-cover"
      />
      <p className="text-xs text-purple-600 mt-2 font-medium">
        <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mr-1"></span>
        Admin Verified
      </p>
      <h4 className="font-bold text-md mt-1">Musculoskeletal Physiology</h4>
      <div className="flex gap-2 mt-1 flex-wrap">
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Muscle</span>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Cardiovascular</span>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Ribs</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Exercise Therapy is a treatment method that uses physical exercise to address various medical conditions.
      </p>
      <p className="text-xs text-gray-500 mt-1">120 cards • ⏱ 20 min</p>
    </div>
  </div>
</div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Discover;
