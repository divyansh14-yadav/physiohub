import React from "react";
import Sidebar from "../sidebar";
import { Trash2, PenLine, FileX2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    category: "Geriatric",
    categoryColor: "text-blue-500",
    title: "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Sandy Gustman",
    date: "July 23, 2024",
    avatar: null,
  },
  {
    category: "Wellness and Lifestyle",
    categoryColor: "text-blue-500",
    title: "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Albert Flores",
    date: "July 23, 2024",
    avatar: null,
  },
  {
    category: "Sports Rehabilitation",
    categoryColor: "text-blue-500",
    title: "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Kristin Watson",
    date: "July 23, 2024",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    category: "Neurological",
    categoryColor: "text-blue-500",
    title: "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Jane Cooper",
    date: "July 23, 2024",
    avatar: null,
  },
];

const TeacherallCourse = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <div className="ml-20 py-8 w-full">
          <div className="w-full max-w-4xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Course</h2>
                <p className="text-gray-500 text-sm">
                  Stay informed with our latest articles and updates.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-gray-400 text-white p-2 rounded-[12px] font-medium text-[16px]">
                  Featured
                </button>
                <button
                  className="bg-[#7240FD] text-white p-2 rounded-[12px] font-medium text-[16px]"
                  onClick={() => navigate("/createCourse")}
                >
                  + Create New
                </button>
              </div>
            </div>

            {/* Articles Section */}
            <div className="bg-white rounded-xl shadow p-6 mt-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 text-lg">★</span>
                <span className="font-medium text-gray-700">Featured Articles</span>
              </div>

              <div>
                {articles.length ? (
                  articles.map((a, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between gap-4 py-6 ${
                        idx !== articles.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                    >
                      {/* Left: Image */}
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        {a.avatar ? (
                          <img
                            src={a.avatar}
                            alt={a.author}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs">No Image</span>
                        )}
                      </div>

                      {/* Middle: Content */}
                      <div className="flex-1">
                        <div className={`text-sm font-semibold ${a.categoryColor}`}>
                          {a.category}
                        </div>
                        <div className="text-gray-800 font-medium text-[15px] leading-snug mt-1">
                          {a.title}
                        </div>
                        <div className="flex items-center text-xs text-gray-500 gap-2 mt-1">
                          <span>{a.author}</span>
                          <span>•</span>
                          <span>{a.date}</span>
                        </div>
                      </div>

                      {/* Right: Buttons */}
                      <div className="flex gap-2">
                        <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                          <Trash2 size={18} />
                        </button>
                        <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                          <PenLine size={18} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <div className="bg-gray-100 p-6 rounded-full mb-4">
                      <FileX2 size={40} className="text-gray-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      Your Blog is Empty
                    </h2>
                    <p className="text-sm text-gray-500 max-w-sm">
                      You haven't posted any articles yet. Start creating content to engage and inform your audience.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherallCourse;
