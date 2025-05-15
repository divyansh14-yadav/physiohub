// import React, { useEffect, useState } from "react";
// import Sidebar from "../sidebar";
// import { Trash2, PenLine, FileX2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import {
//   ApiDeleteRequest,
//   ApiFetchRequest,
// } from "../../../axios/commonRequest";
// import { FaCopy } from "react-icons/fa";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";
// import { Image as ImageIcon, Video } from "lucide-react";

// const TeacherLesson = () => {
//   const navigate = useNavigate();

//   const [allLesson, setAllLesson] = useState([]);
//   console.log(allLesson, "allCourse");
//   const [openModalforCourse, setOpenModalForCourse] = useState(false);
//   const [courseDeleteId, setCourseDeleteId] = useState("");
//   const [updatedData, setUpdatedData] = useState(false);
//   const [activeTab, setActiveTab] = useState("image");
//   const [activeTabforVideo, setActiveTabforVideo] = useState("");

//   const handleCloseCourse = () => setOpenModalForCourse(false);

//   const handleShowCourse = (id) => {
//     setCourseDeleteId(id);
//     setOpenModalForCourse(true);
//   };

//   useEffect(() => {
//     const fetchAllLesson = async () => {
//       try {
//         const response = await ApiFetchRequest("/found-all-lesson");

//         if (response.status === 200) {
//           setAllLesson(response.data.allLesson);
//           setUpdatedData(true)
//         } else {
//           console.log("Error fetching AllLesson");
//         }
//       } catch (error) {
//         console.error("Error fetching AllLesson", error);
//       }
//     };
//     fetchAllLesson();
//   }, [updatedData]);

//   const handleDeleteCourse = async () => {
//     try {
//       const response = await ApiDeleteRequest(`/delete-course/${courseDeleteId}`);
//       if (response.status === 200) {
//         setUpdatedData(false);
//         handleCloseCourse();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//   <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
//       <div className="flex flex-1">
//         <Sidebar />

//         <div className="ml-20 py-8 w-full">
//           <div className="w-full max-w-6xl">
//             <div className="flex justify-between items-center mb-2">
//               <div>
//                 <h2 className="text-xl font-semibold">Lesson</h2>
//                 <p className="text-gray-500 text-sm">
//                   Stay informed with our latest lesson and updates.
//                 </p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button className="bg-gray-400 text-white p-2 rounded-[12px] font-medium text-[16px]">
//                   Featured
//                 </button>
//                 <button
//                   className="bg-[#7240FD] text-white p-2 rounded-[12px] font-medium text-[16px]"
//                   onClick={() => navigate("/createCourse")}
//                 >
//                   + Create New
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow p-6 mt-4 overflow-y-scroll h-180">
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-blue-500 text-lg">★</span>
//                 <span className="font-medium text-gray-700">Featured Lessons</span>
//               </div>

//               <div>
//              {allLesson.map((lesson, idx) => {

//   return (
//     <div
//       key={lesson._id}
//       className={`flex items-center justify-between gap-10 py-6 ${
//         idx !== allLesson.length - 1 ? "border-b border-gray-200" : ""
//       }`}
//     >
//       {/* Left: Image/Video Toggle Display */}
//       <div className="w-60 h-44 rounded-md bg-gray-100 p-2 shadow relative">
//         {/* Toggle buttons */}
//         <div className="absolute top-2 right-2 z-10 flex gap-2">
//           <button
//             onClick={() => setActiveTab("image")}
//             className={`p-1 rounded-full ${
//               activeTab === "image" ? "bg-blue-600 text-white" : "bg-white text-gray-600"
//             } shadow`}
//           >
//             <ImageIcon size={18} />
//           </button>
//           <button
//             onClick={() => setActiveTabforVideo("video")}
//             className={`p-1 rounded-full ${
//               activeTab === "video" ? "bg-blue-600 text-white" : "bg-white text-gray-600"
//             } shadow`}
//           >
//             <Video size={18} />
//           </button>
//         </div>

//         {/* Content display */}
//         <div className="w-full h-full flex items-center justify-center overflow-hidden rounded">
//           {activeTab === "image" && lesson.content[0]?.contentImage ? (
//             <img
//               src={lesson.content[0].contentImage}
//               alt="Lesson Content"
//               className="w-full h-full object-cover"
//             />
//           ) : activeTabforVideo === "video" && lesson.content[0]?.contentVideo ? (
//             <video
//               controls
//               className="w-full h-full object-cover rounded"
//               src={lesson.content[0].contentVideo}
//             />
//           ) : (
//             <span className="text-gray-400 text-xs">No Content</span>
//           )}
//         </div>
//       </div>

//       {/* Middle: Text Content */}
//       <div className="flex-1">
//         <div className="text-gray-800 font-semibold text-[20px] capitalize">
//           {lesson.lessonName}
//         </div>
//         <p className="text-gray-600 text-sm mt-1 line-clamp-3">
//           {lesson.lessonDescription}
//         </p>
//         <div className="flex items-center text-sm text-gray-500 gap-3 mt-2 flex-wrap">
//           <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
//             Duration: {lesson.averageDuration}
//           </span>
//           <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
//             Topic: {lesson.lessonTopic}
//           </span>
//           <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
//             {lesson.isCompleted ? "Completed" : "Not Completed"}
//           </span>
//         </div>
//       </div>

//       {/* Right: Actions */}
//       <div className="flex gap-2">
//         <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
//           <PenLine size={18} />
//         </button>
//         <button
//           className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300"
//           onClick={() => handleShowCourse(lesson._id)}
//         >
//           <Trash2 size={18} />
//         </button>
//       </div>
//     </div>
//   );
// })}

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Dialog
//         open={openModalforCourse}
//         onClose={() => setOpenModalForCourse(false)}
//         className="relative z-50"
//       >
//         <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" aria-hidden="true" />
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4 text-center">
//             <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-lg transition-all sm:my-8 sm:w-full sm:max-w-md">
//               <div className="bg-white px-6 py-8 sm:px-8">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
//                     <div className="flex justify-between items-center w-full">
//                       <Dialog.Title as="h3" className="text-xl font-semibold text-gray-900">
//                         Are you sure you want to delete?
//                       </Dialog.Title>
//                       <button onClick={handleCloseCourse} className="text-2xl cursor-pointer text-neutral-400">
//                         ×
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                 <button
//                   type="button"
//                   className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
//                   onClick={handleDeleteCourse}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   type="button"
//                   className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                   onClick={handleCloseCourse}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default TeacherLesson;

import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { Trash2, PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  ApiDeleteRequest,
  ApiFetchRequest,
} from "../../../axios/commonRequest";
import { Dialog } from "@headlessui/react";
import { Image as ImageIcon, Video } from "lucide-react";
import { Clock, BookOpen, CheckCircle, XCircle } from "lucide-react";

const TeacherLesson = () => {
  const navigate = useNavigate();

  const [allLesson, setAllLesson] = useState([]);
  const [openModalforCourse, setOpenModalForCourse] = useState(false);
  const [courseDeleteId, setCourseDeleteId] = useState("");
  const [updatedData, setUpdatedData] = useState(false);
  const [activeTabs, setActiveTabs] = useState({}); // <-- Per-lesson tab state

  const handleCloseCourse = () => setOpenModalForCourse(false);

  const handleShowCourse = (id) => {
    setCourseDeleteId(id);
    setOpenModalForCourse(true);
  };

  useEffect(() => {
    const fetchAllLesson = async () => {
      try {
        const response = await ApiFetchRequest("/found-all-lesson");
        if (response.status === 200) {
          setAllLesson(response.data.allLesson);
          setUpdatedData(true);
        } else {
          console.log("Error fetching AllLesson");
        }
      } catch (error) {
        console.error("Error fetching AllLesson", error);
      }
    };
    fetchAllLesson();
  }, [updatedData]);

  const handleDeleteCourse = async () => {
    try {
      const response = await ApiDeleteRequest(
        `/delete-course/${courseDeleteId}`
      );
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
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Lesson</h2>
                <p className="text-gray-500 text-sm">
                  Stay informed with our latest lesson and updates.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-gray-400 text-white p-2 rounded-[12px] font-medium text-[16px]">
                  Featured
                </button>
                <button
                  className="bg-[#7240FD] text-white p-2 rounded-[12px] font-medium text-[16px]"
                  onClick={() => navigate("/CreateLesson")}
                >
                  + Create New
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 mt-4 overflow-y-scroll h-180">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 text-lg">★</span>
                <span className="font-medium text-gray-700">
                  Featured Lessons
                </span>
              </div>

              <div>
                {allLesson.map((lesson, idx) => {
                  const currentTab = activeTabs[lesson._id] || "image";

                  return (
                    <div
                      key={lesson._id}
                      className={`flex items-center justify-between gap-10 py-6 ${
                        idx !== allLesson.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {/* Left: Image/Video Toggle Display */}
                      <div className="w-60 h-44 rounded-md bg-gray-100 p-2 shadow relative">
                        {/* Toggle buttons */}
                        <div className="absolute top-2 right-2 z-10 flex gap-2">
                          <button
                            onClick={() =>
                              setActiveTabs((prev) => ({
                                ...prev,
                                [lesson._id]: "image",
                              }))
                            }
                            className={`p-1 rounded-full ${
                              currentTab === "image"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-600"
                            } shadow`}
                          >
                            <ImageIcon size={18} />
                          </button>
                          <button
                            onClick={() =>
                              setActiveTabs((prev) => ({
                                ...prev,
                                [lesson._id]: "video",
                              }))
                            }
                            className={`p-1 rounded-full ${
                              currentTab === "video"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-600"
                            } shadow`}
                          >
                            <Video size={18} />
                          </button>
                        </div>

                        {/* Content display */}
                        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded">
                          {currentTab === "image" &&
                          lesson.content[0]?.contentImage ? (
                            <img
                              src={lesson.content[0].contentImage}
                              alt="Lesson Content"
                              className="w-full h-full object-cover"
                            />
                          ) : currentTab === "video" &&
                            lesson.content[0]?.contentVideo ? (
                            <video
                              controls
                              className="w-full h-full object-cover rounded"
                              src={lesson.content[0].contentVideo}
                            />
                          ) : (
                            <span className="text-gray-400 text-xs">
                              No Content
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Middle: Text Content */}
                      <div className="flex-1">
                        <div className="text-gray-800 font-semibold text-[20px] capitalize">
                          {lesson.lessonName}
                        </div>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-3">
                          {lesson.lessonDescription}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 gap-3 mt-2 flex-wrap">
                          <span className="bg-gray-100 px-2 py-1 rounded-md text-xs flex items-center gap-1">
                            <Clock size={14} className="text-gray-500" />
                            Duration: {lesson.averageDuration}
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded-md text-xs flex items-center gap-1">
                            <BookOpen size={14} className="text-gray-500" />
                            Topic: {lesson.lessonTopic}
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded-md text-xs flex items-center gap-1">
                            {lesson.isCompleted ? (
                              <>
                                <CheckCircle
                                  size={14}
                                  className="text-green-500"
                                />
                                Completed
                              </>
                            ) : (
                              <>
                                <XCircle size={14} className="text-red-500" />
                                Not Completed
                              </>
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex gap-2">
                        <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                          <PenLine size={18} />
                        </button>
                        <button
                          className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300"
                          onClick={() => handleShowCourse(lesson._id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <Dialog
        open={openModalforCourse}
        onClose={handleCloseCourse}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-lg transition-all sm:my-8 sm:w-full sm:max-w-md">
              <div className="bg-white px-6 py-8 sm:px-8">
                <div className="flex justify-between items-center w-full">
                  <Dialog.Title className="text-xl font-semibold text-gray-900">
                    Are you sure you want to delete?
                  </Dialog.Title>
                  <button
                    onClick={handleCloseCourse}
                    className="text-2xl text-neutral-400"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex justify-end gap-2">
                <button
                  onClick={handleDeleteCourse}
                  className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
                >
                  Delete
                </button>
                <button
                  onClick={handleCloseCourse}
                  className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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

export default TeacherLesson;
