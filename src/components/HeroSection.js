import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-purple-100 w-full h-130 ">
        <div className="w-[40%] p-20">
          <p className="text-purple-600 font-semibold text-sm">OVER 200+ RESOURCES</p>
          <h1 className="text-6xl font-bold leading-19">Master Your <span className="text-purple-600">Physiotherapy</span> Skills Now!</h1>
          <p className="text-gray-600 mt-4 max-w-md">Maximize your physiotherapy skills with our expert-led courses and tailored resources.</p>
          <div className="mt-6 flex gap-4 justify-start">
            <button className="text-white px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700">Get Started</button>
            <button className="text-white px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700">Complete Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
