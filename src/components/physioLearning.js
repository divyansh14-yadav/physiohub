import React from 'react'
import heroImage from "../images/hesoimage.png"
import hero2 from "../images/hero2.png"
import hero3 from "../images/hero3.png"


const PhysioLearning = () => {
  return (
    <div>
      <div className='mt-10'>
        <div className='text-center mt-10'>
            <p className='text-purple-600 font-bold'>OVER 200+ RESOURCES</p>
            <h1 className='text-gray-900 font-bold text-4xl mt-2 w-[30%] m-auto leading-13'>Transform Your Physiotherapy Learning</h1>
            <p className='text-[#4a5565] max-w-md mt-4 m-auto'>Physiohub is a learning platform designed to help budding physiotherapists perfect their craft and become industry experts.</p>
        </div>
        <div className='w-[85%] m-auto flex justify-between gap-10 mt-20'>
          <div className='w-[50%] h-70'>
            <p className='text-purple-600 font-semibold text-xs'>NO SIGN UP REQUIRED</p>
            <h1 className='text-3xl font-bold text-gray-900 mt-2'>Learn with Flash Cards</h1>
            <p className='text-gray-600 mt-4'>Master key concepts and terms with our interactive flashcards. A perfect tool for quick revisions and reinforcing your learning, making complex information easy to remember.</p>
           <div className='mt-6 mb-10 '>
          
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 bg-purple-600 rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>1000+ pre-made flashcards</p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
              <span className='w-3 h-3 bg-purple-600 rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>Effortless Memorization with spaced repetition</p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
              <span className='w-3 h-3 bg-purple-600 rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>Spaced repetition</p>
            </div>
           </div>
          </div>
          <div className='w-[50%] h-120'>
            <img className='w-full h-[90%]' src={heroImage} alt="" />
          </div>
        </div>

        <div className='w-[85%] m-auto flex justify-between gap-10 mt-20'>
          <div className='w-[50%] h-70'>
            <p className='text-[#ff7f04] font-semibold text-xs'>MULTIPLE CHOICE QUIZZES</p>
            <h1 className='text-3xl font-bold text-gray-900 mt-2'>Interesting quiz</h1>
            <p className='text-gray-600 mt-4'>Designed exclusively for aspiring and practicing physiotherapists, our comprehensive quiz are crafted to enhance your knowledge, skills, and confidence.</p>
           <div className='mt-6 mb-10 '>
          
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 bg-[#ff7f04] rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>Time-based quizzes to improve your quick thinking and diagnostics</p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
              <span className='w-3 h-3 bg-[#ff7f04] rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>Personalized Dashboard</p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
              <span className='w-3 h-3 bg-[#ff7f04] rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>Accessible anywhere anytime</p>
            </div>
           </div>
          </div>
          <div className='w-[50%] h-120'>
            <img className='w-full h-[90%]' src={hero2} alt="" />
          </div>
        </div>

        <div className='w-[85%] m-auto flex justify-between gap-10 mt-20'>
          <div className='w-[50%] h-70'>
            <p className='text-[#2ccfb9] font-semibold text-xs'>INFORMATIVE ARTICLES</p>
            <h1 className='text-3xl font-bold text-gray-900 mt-2'>Informative Blogs</h1>
            <p className='text-gray-600 mt-4'>Stay updated with the latest trends, research, and best practices in physiotherapy. Our blogs are written by experienced professionals, providing valuable insights and continuous learning opportunities.</p>
           <div className='mt-6 mb-10 '>
          
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 bg-[#2ccfb9] rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>75+ informative articles and rehab protocols</p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
              <span className='w-3 h-3 bg-[#2ccfb9] rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>No sign up required, access our blog completely free</p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
              <span className='w-3 h-3 bg-[#2ccfb9] rounded-full'></span>
              <p className='flex items-center gap-2 text-gray-700'>Complete guide to physio</p>
            </div>
           </div>
          </div>
          <div className='w-[50%] h-120'>
            <img className='w-full h-[90%]' src={hero3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhysioLearning
