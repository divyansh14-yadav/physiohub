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
          <div className=" space-y-6 w-[75%]">
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

          {/* Right Sidebar */}
          <div className="space-y-6 w-[25%]">
            {/* Profile Card */}
               <div className="bg-white rounded-2xl shadow-md p-6 text-center w-full">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
                className="w-24 h-24 m-auto rounded-full border-2 border-purple-400"
              />
              <div className="font-bold text-xl mt-2">Sarthak</div>
              <div className="text-xs text-gray-500 mb-2">
                Joined 2 years ago
              </div>
              <div className="flex justify-around w-full bg-[#EEF2F6] p-4 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-gray-700">8</span>
                  <span className="text-xs text-gray-400 flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    Rank
                  </span>
                </div>
                <div className="border-1 border-neutral-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-purple-600">
                    1,627
                  </span>
                  <span className="text-xs text-gray-400 flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    Points
                  </span>
                </div>
              </div>
            </div>

            {/* Weekly Activity */}
           
<div className="bg-white rounded-2xl shadow-md p-4 w-80 mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-md">Your Activity</h4>
        <select className="text-xs border rounded px-2 py-1">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="mb-2">
        <div className="text-xs text-gray-400">Today</div>
        <p className="text-2xl font-bold">14h 32m</p>
      </div>
      <div className="flex items-end gap-2 h-24 relative justify-center">
        {activityData.map((h, i) => (
          <div
            key={i}
            className="w-5 flex flex-col justify-end items-center relative"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ height: "80px" }}
          >
            {/* Stacked bar for Friday */}
            {i === 4 ? (
              <div className="flex flex-col h-full justify-end">
                <div
                  className="rounded-t bg-teal-400"
                  style={{
                    height: `${h.top * 4}px`,
                    width: "20px",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                />
                <div
                  className="rounded-b bg-purple-500"
                  style={{
                    height: `${h.bottom * 4}px`,
                    width: "20px",
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                />
                {/* Tooltip */}
                {hovered === 4 && (
                  <div className="absolute -top-28 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-3 text-xs z-10 w-44">
                    <div className="font-semibold mb-1">{tooltipData.date}</div>
                    <div className="flex justify-between">
                      <span>Flashcard</span>
                      <span className="text-purple-500">30m 2s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quiz</span>
                      <span className="text-teal-400">14m 28s</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="rounded bg-gray-200"
                style={{
                  height: `${h.bottom * 4}px`,
                  width: "20px",
                  borderRadius: "6px",
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
    </div>

            {/* Activity Calendar */}
            <div className="bg-white rounded-2xl shadow-md p-4 h-68">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-md">Activity Calendar</h4>
                <select className="text-xs border rounded px-2 py-1">
                  <option>Last 3 months</option>
                  <option>Last 6 months</option>
                </select>
              </div>
              <div className="grid grid-cols-7 gap-1 mt-4">
                {Array.from({ length: 42 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 mt-2 rounded ${i % 5 === 0 ? 'bg-green-500' : 'bg-gray-200'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Discover;
