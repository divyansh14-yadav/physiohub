import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LottiePlayer from '../../../animations/LottiePlayer';
import Happy from "../../../animations/data/Happy.json"

const GetStartedQuiz = () => {
    const {topic} = useLocation().state
    console.log(topic,"topics");
    
  return (
    <div>
      <div className="w-[65%]  m-auto bg-white p-6 rounded-lg shadow mt-20 pb-40">
        <div className="flex justify-center pb-4">
          <div className=" w-[30%] h-[150px] shadow-xl">
            <h1 className="p-3 mt-2 font-semibold text-[#191925]">All Set!</h1>
            <p className="p-2 text-center text-[#495D79]">
              You're ready to start learning. <br /> Let's begin your quiz.
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-12">
          <LottiePlayer animationFile={Happy} />
        </div>
        <div className="flex justify-center">
          <Link to={`/StartQuiz/${topic}`} className="bg-[#7240FD] text-white px-4 py-2 rounded-md">
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetStartedQuiz

