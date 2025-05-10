import { BsLightningChargeFill } from "react-icons/bs";
import { MdQuiz } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import "react-calendar-heatmap/dist/styles.css";
import { ArrowUp, ArrowDown, Trophy, Zap } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import ActivityTracker from "./dashbords/ActivityTraker";
import PerformanceChart from "./dashbords/PerformanceChart";
import Sidebar from "./dashbords/sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const location = useLocation();
  const user = location.state?.user;
  // console.log(user,"user");
  
  

  const activities = [
    {
      img: "https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&w=80&h=80",
      title: "Anatomy Upper Quadrant",
      subtitle: "Quiz • 20 questions left",
      progress: 48,
    },
    {
      img: "https://img.icons8.com/color/96/000000/lungs.png",
      title: "Anatomy Upper Quadrant",
      subtitle: "Quiz • 20 questions left",
      progress: 48,
    },
    {
      img: "https://img.icons8.com/color/96/000000/lungs.png",
      title: "Anatomy Upper Quadrant",
      subtitle: "Quiz • 20 questions left",
      progress: 48,
    },
  ];

  return (
    <div className="flex gap-8 min-h-screen bg-[#fafbfc]">
      <Sidebar user={user}/>

      <div className="w-[65%] overflow-y-scroll">
        <div className="flex-1 flex flex-col gap-6">
          {/* Header */}
          <h1 className="text-3xl font-bold mt-5">Hi Alex, Welcome!</h1>

          {/* <div className="p-4 bg-gray-100 flex items-center justify-between"> */}
            <button
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          {/* </div> */}
          {/* Gradient Card */}
          <div className="col-span-3 bg-purple-600 text-white rounded-xl p-6 flex justify-between items-center shadow mb-4">
            <div>
              <div className="text-lg font-medium opacity-90">
                Total Lessons Completed
              </div>
              <div className="text-4xl font-bold mt-2">128</div>
            </div>
          </div>
          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 flex flex-col items-start shadow border border-neutral-200">
              <AiOutlineFileText className="text-3xl text-purple-500 mb-2" />
              <div className="text-2xl font-bold text-purple-600">234</div>
              <div className="mt-1 text-gray-600">My flashcards</div>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-start shadow border border-neutral-200">
              <MdQuiz className="text-3xl text-teal-500 mb-2" />
              <div className="text-2xl font-bold text-teal-600">29</div>
              <div className="mt-1 text-gray-600">Quiz Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-start shadow border border-neutral-200">
              <BsLightningChargeFill className="text-3xl text-yellow-500 mb-2" />
              <div className="text-2xl font-bold text-yellow-500">200</div>
              <div className="mt-1 text-gray-600">Longest Streak</div>
            </div>
          </div>
          {/* Performance Chart */}
          <div className="bg-white rounded-xl p-6 shadow border border-neutral-200">
            <div className="font-semibold mb-2">Performance over time</div>
            <PerformanceChart />
          </div>
          {/* Activity Tracker */}
          <div className="bg-white rounded-2xl shadow p-6 w-full max-w-6xl font-sans">
            <ActivityTracker />
          </div>
        </div>
      </div>

      <div className="w-[20%] mt-20 mr-5">
        <div className="w-80 flex flex-col gap-6">
          {/* User Card */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow w-80">
            {/* User Info */}
            <div className="flex flex-col items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-2 border-purple-400"
              />
              <div className="font-bold text-xl mt-2">{user?.name}</div>
              <div className="text-xs text-gray-500 mb-2">
                Joined 2 years ago
              </div>
              <div className="flex justify-around w-full rounded-md bg-[#EEF2F6] p-4 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-gray-700">8</span>
                  <span className="text-sm mt-2 text-gray-400 flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    Rank
                  </span>
                </div>
                <div className="border-1 border-neutral-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">
                    1,627
                  </span>
                  <span className="text-sm mt-2 text-gray-400 flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    Points
                  </span>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div>
              <div className="font-semibold mb-4">Leaderboard</div>
              <div className="text-gray-400 flex justify-between mb-2">
                <span className="text-left">Place</span>
                <span className="text-left">Name</span>
                <span className="text-right">Points</span>
              </div>
              <ul>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <ArrowUp className="w-5 h-5 text-green-500 mr-2" />
                    <span className="">1st</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Courtney Henry"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>Courtney Henry</span>
                  </div>
                  <span className="">4,627</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <ArrowDown className="w-5 h-5 text-red-500 mr-2" />
                    <span className="">2nd</span>
                  </div>
                  <span>Jacob Jones</span>
                  <span className="">1,746</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <ArrowUp className="w-5 h-5 text-green-500 mr-2" />
                    <span className="">3rd</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/46.jpg"
                      alt="Eleanor Pena"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>Eleanor Pena</span>
                  </div>
                  <span className="">3,015</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <ArrowUp className="w-5 h-5 text-green-500 mr-2" />
                    <span className="">8th</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Sarthak (You)"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>Sarthak (You)</span>
                  </div>
                  <span className="">1,627</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Activity */}

          <div className="bg-white rounded-2xl shadow p-5 w-[320px] font-sans border border-neutral-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[22px] font-semibold">Recent Activity</span>
              <NavLink
                href="#"
                className="text-[#7B61FF] font-medium text-[16px]"
              >
                View All
              </NavLink>
            </div>
            {activities.map((item, idx) => (
              <div key={idx} className="flex items-center mb-4 last:mb-0">
                <img
                  src={item.img}
                  alt=""
                  className="w-14 h-14 rounded-xl object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="font-semibold text-[16px] leading-5">
                    {item.title}
                  </div>
                  <div className="text-gray-400 text-[16px] mb-2">
                    {item.subtitle}
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-[16px] font-medium">
                      {item.progress}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
