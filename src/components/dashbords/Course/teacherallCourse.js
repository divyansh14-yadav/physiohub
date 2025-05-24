import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { Trash2, PenLine, FileX2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  ApiDeleteRequest,
  ApiFetchRequest,
} from "../../../axios/commonRequest";
import { FaCopy } from "react-icons/fa";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../../common/Loder";

const TeacherallCourse = () => {
  const navigate = useNavigate();

  const [allCourse, setAllCourse] = useState([]);
  console.log(allCourse, "allCourse");
  const [openModalforCourse, setOpenModalForCourse] = useState(false);
  const [courseDeleteId, setCourseDeleteId] = useState("");
  const [updatedData, setUpdatedData] = useState(false);
  const [loading,setLoading] = useState(true)

  const handleCloseCourse = () => setOpenModalForCourse(false);

  const handleShowCourse = (id) => {
    setCourseDeleteId(id);
    setOpenModalForCourse(true);
  };

  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        const response = await ApiFetchRequest("/found-all-course");

        if (response.status === 200) {
          setAllCourse(response.data.allCourses);
          setUpdatedData(true)
          setLoading(false)
        } else {
          console.log("Error fetching AllCourse");
        }
      } catch (error) {
        console.error("Error fetching AllCourse", error);
      }
    };
    fetchAllCourse();
  }, [updatedData]);

  const handleDeleteCourse = async () => {
    try {
      const response = await ApiDeleteRequest(`/delete-course/${courseDeleteId}`);
      if (response.status === 200) {
        setUpdatedData(false);
        handleCloseCourse();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

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
                <button
                  className="bg-[#7240FD] text-white p-2 rounded-[12px] font-medium text-[16px]"
                  onClick={() => navigate("/createCourse")}
                >
                  + Create New
                </button>
              </div>
            </div>

            {/* Articles Section */}
            <div className="bg-white rounded-xl shadow p-6 mt-4 overflow-y-scroll h-180">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 text-lg">★</span>
                <span className="font-medium text-gray-700">
                  Featured courses
                </span>
              </div>

              <div>
                {
                // loading ? <Loader/> :
                allCourse.length ? (
                  allCourse.map((a, idx) => (
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
                        <div className="text-gray-800 font-medium text-[20px] leading-snug mt-1">
                          {a.courseName}
                        </div>
                        <div className="flex items-center text-md gap-2 mt-1">
                          <span className="line-clamp-3">
                            {a.courseDescription}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
                          <FaCopy className="text-gray-500 cursor-pointer" />
                          <span>{a.courseDuration}</span>
                          <span>{a.categories}</span>
                          <span>{a.isFree ? "free" : "paid"}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                          <PenLine onClick={()=>navigate("/createCourse",{state:{isformOpen:true,data:a}})} size={18} />
                        </button>
                        <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                          <Trash2
                            onClick={() => handleShowCourse(a._id)}
                            size={18}
                          />
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
                      Your courses is Empty
                    </h2>
                    <p className="text-sm text-gray-500 max-w-sm">
                      You haven't posted any courses yet. Start creating content
                      to engage and inform your audience.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={openModalforCourse}
        onClose={() => setOpenModalForCourse(false)}
        className="relative z-50"
      >
        {/* Backdrop with blur effect */}
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        {/* Dialog container */}
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-lg transition-all sm:my-8 sm:w-full sm:max-w-md">
              {/* Dialog content */}
              <div className="bg-white px-6 py-8 sm:px-8">
                <div className="sm:flex sm:items-start">
                  {/* Warning icon */}
                  {/* Dialog text content */}
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <div className="flex justify-between items-center w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold text-gray-900"
                      >
                        Are you sure you want to delete?
                      </Dialog.Title>
                      <button
                        onClick={handleCloseCourse}
                        className="text-2xl cursor-pointer text-neutral-400"
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dialog buttons */}
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:ml-3 sm:w-auto"
                  onClick={handleDeleteCourse}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:mt-0 sm:w-auto"
                  onClick={handleCloseCourse}
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TeacherallCourse;
