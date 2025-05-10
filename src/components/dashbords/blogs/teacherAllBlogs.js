import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { Trash2, PenLine, FileX2 } from "lucide-react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const articles = [
  {
    category: "Geriatric",
    categoryColor: "text-blue-500",
    title:
      "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Sandy Gustman",
    date: "July 23, 2024",
    avatar: null,
  },
  {
    category: "Wellness and Lifestyle",
    categoryColor: "text-blue-500",
    title:
      "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Albert Flores",
    date: "July 23, 2024",
    avatar: null,
  },
  {
    category: "Sports Rehabilitation",
    categoryColor: "text-blue-500",
    title:
      "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Kristin Watson",
    date: "July 23, 2024",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    category: "Neurological",
    categoryColor: "text-blue-500",
    title:
      "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Jane Cooper",
    date: "July 23, 2024",
    avatar: null,
  },
];

export default function TeacherBlogs() {

  // const [isCreateBlog,SetIsCreateBlog] = useState(false)

const navigate = useNavigate()
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
{/* {
  isCreateBlog ? <CreateBlog/> : null
} */}
      
      {/* Main Row: Sidebar + Main Content + Right Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="ml-20 py-8 w-full">
          <div className="w-full max-w-4xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Blog Page</h2>
                <p className="text-gray-500 text-sm">
                  Stay informed with our latest articles and updates.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="border rounded px-3 py-1 text-sm"
                />
                <select className="border rounded px-2 py-1 text-sm">
                  <option>Featured</option>
                  <option>Latest</option>
                </select>
                <div>
                  <button className="bg-[#7240FD] text-white p-2 rounded-[12px] font-medium text-[16px] cursor-pointer"
                  // onClick={()=>SetIsCreateBlog(true)}
                  onClick={()=>navigate("/createBlogs")}
                  >
                    + Create New
                  </button>
                </div>
              </div>
            </div>
            {/* Featured Articles */}
            <div className="bg-white rounded-xl shadow p-6 mt-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 text-lg">★</span>
                <span className="font-medium text-gray-700">
                  Featured Articles
                </span>
              </div>
              <div>
                {articles.length ? (
                  articles.map((a, idx) => (
                    <div className="flex justify-between items-center">
                      <div
                        key={idx}
                        className={`py-8 ${
                          idx !== articles.length - 1 ? "border-b" : ""
                        } border-gray-100`}
                      >
                        <div
                          className={`text-sm font-semibold mb-1 ${a.categoryColor}`}
                        >
                          {a.category}
                        </div>
                        <div className="font-medium text-gray-800 mb-1 leading-snug">
                          {a.title}
                        </div>
                        <div className="flex items-center text-xs text-gray-500 gap-2">
                          {a.avatar && (
                            <img
                              src={a.avatar}
                              alt={a.author}
                              className="w-5 h-5 rounded-full object-cover"
                            />
                          )}
                          <span>{a.author}</span>
                          <span>•</span>
                          <span>{a.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border-1">
                          <Trash2 size={18} />
                        </button>
                        <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border-1">
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
                      You haven't posted any articles yet. Start creating
                      content to engage and inform your audience.
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* View All Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded font-medium shadow hover:bg-blue-600 transition">
                View All
              </button>
            </div>
          </div>
          {/* Right Sidebar */}
        </div>
      </div>
    </div>
  );
}
