import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { Trash2, PenLine, FileX2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ApiFetchRequest } from "../../../axios/commonRequest";
import { FaCopy } from "react-icons/fa";

const UserallCourse = () => {
  const navigate = useNavigate();

  const [allCourse, setAllCourse] = useState([]);
  console.log(allCourse, "allCourse");

  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        const response = await ApiFetchRequest("/found-all-course");

        if (response.status === 200) {
          setAllCourse(response.data.allCourses);
        } else {
          console.log("Error fetching AllCourse");
        }
      } catch (error) {
        console.error("Error fetching AllCourse", error);
      }
    };
    fetchAllCourse();
  }, []);

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar allCourse={allCourse} />

        <div className="ml-20 py-8 w-full">
          <div className="w-full max-w-6xl">
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
              </div>
            </div>

            {/* Articles Section */}
            <div className="bg-white rounded-xl shadow p-6 mt-4 overflow-y-scroll h-150">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 text-lg">★</span>
                <span className="font-medium text-gray-700">
                  Featured Articles
                </span>
              </div>

              <div>
                {allCourse?.length ? (
                  allCourse?.map((a, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between gap-10 py-6 ${
                        idx !== allCourse.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {/* Left: Image */}
                      <div className="w-60 h-42 rounded-md  bg-gray-200 flex items-center justify-center overflow-hidden">
                        {a.courseImage ? (
                          <img
                            src={a.courseImage}
                            alt={a.author}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs">
                            No Image
                          </span>
                        )}
                      </div>

                      {/* Middle: Content */}
                      <div className="flex-1">
                        <div className="text-gray-800 font-medium text-[15px] leading-snug mt-1">
                          {a.courseName}
                        </div>
                        <div className="flex items-center text-md gap-2 mt-1">
                          <span className="line-clamp-3">{a.courseDescription}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
                          <FaCopy className="text-gray-500 cursor-pointer" />
                          <span>{a.total_number_of_quize}</span>
                          <span>{a.categories}</span>
                          <span>{a.isFree ?"free" :"paid"}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <div className="bg-gray-100 p-6 rounded-full mb-4">
                      <FileX2 size={40} className="text-gray-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      Your Courses is Empty
                    </h2>
                    <p className="text-sm text-gray-500 max-w-sm">
                      You haven't posted any articles yet. Start creating
                      content to engage and inform your audience.
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

export default UserallCourse;
