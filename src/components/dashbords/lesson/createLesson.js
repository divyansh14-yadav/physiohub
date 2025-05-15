// import React, { useState } from "react";
// import { FaUpload, FaTrash } from "react-icons/fa";
// import Sidebar from "../sidebar";
// import { ApiPostRequest } from "../../../axios/commonRequest";

// const CreateLesson = () => {
//   const [cover, setCover] = useState(null);
//   const [formData, setFormData] = useState({
//     lessonName: "",
//     lessonDescription: "",
//     lessonTopic: "",
//     averageDuration: "",
//     lessonNumber: "",
//     courseImage: "",
//     content: [
//       {
//         contentText: "",
//         contentImage: "",
//         contentVideo: "",
//       },
//     ],
//   });

// const [imagePreview, setImagePreview] = useState(null);
//   const [videoPreview, setVideoPreview] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [videoFile, setVideoFile] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCoverChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setCover(URL.createObjectURL(file));
//       setFormData((prev) => ({
//         ...prev,
//         courseImage: file,
//       }));
//     }
//   };

//   const handleContentChange = (e, index) => {
//     const { name, value } = e.target;
//     const newContent = [...formData.content];
//     newContent[index] = { ...newContent[index], [name]: value };
//     setFormData((prev) => ({
//       ...prev,
//       content: newContent,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = new FormData();

//       payload.append("lessonName", formData.lessonName);
//       payload.append("lessonDescription", formData.lessonDescription);
//       payload.append("lessonTopic", formData.lessonTopic);
//       payload.append("averageDuration", formData.averageDuration);
//       payload.append("lessonNumber", formData.lessonNumber);
//       payload.append("contentText", formData.content[0].contentText);
//       payload.append("contentImage", formData.content[0].contentImage);
//       payload.append("contentVideo", formData.content[0].contentVideo);

//       if (formData.courseImage) {
//         payload.append("courseImage", formData.courseImage);
//       }

//       const response = await ApiPostRequest("/create-lesson", payload);
//       if (response.status === 200) {
//         setFormData({
//           lessonName: "",
//           lessonDescription: "",
//           lessonTopic: "",
//           averageDuration: "",
//           lessonNumber: "",
//           courseImage: "",
//           content: [
//             {
//               contentText: "",
//               contentImage: "",
//               contentVideo: "",
//             },
//           ],
//         });
//         console.log(response.data, "lesson response");
//       }
//     } catch (error) {
//       console.error("Error creating lesson", error);
//     }
//     console.log(formData);
//   };

//   return (
//     <div className="flex gap-20 min-h-screen bg-[#f6f8fb]">
//       {/* Sidebar */}
//       <Sidebar />
//       <div className="mt-5 w-[70%]">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold  flex items-center gap-2">
//             <span className="text-gray-500">&larr;</span> Back
//           </h2>
//         </div>
//         {/* Personal Info */}
//         <div className="bg-white rounded-xl shadow p-8 mb-6 mt-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-bold">Create Lesson</h2>
//             <button
//               className="bg-purple-600 text-white font-bold cursor-pointer p-2 w-[12%] rounded-md"
//               onClick={handleSubmit}
//             >
//               Publish
//             </button>
//           </div>
//           {/* Form */}
//           <form className="gap-4">
//             <div className="col-span-1 mt-5">
//               <label className="block text-sm text-gray-600 font-semibold mb-1">
//                 Lesson Name
//               </label>
//               <input
//                 type="text"
//                 value={formData.lessonName}
//                 onChange={handleChange}
//                 name="lessonName"
//                 placeholder="Write lesson name here"
//                 className="w-full border border-neutral-200 rounded-md px-3 py-2"
//               />
//             </div>
//             <div className="col-span-1 mt-2">
//               <label className="block text-sm text-gray-600 font-semibold mb-1">
//                 Lesson Description
//               </label>
//               <input
//                 type="text"
//                 value={formData.lessonDescription}
//                 onChange={handleChange}
//                 name="lessonDescription"
//                 className="w-full border border-neutral-200 rounded-md px-3 py-2"
//                 placeholder="Write lesson description here"
//               />
//             </div>
//             <div className="col-span-1 mt-2">
//               <label className="block text-sm text-gray-600 font-semibold mb-1">
//                 Lesson Topic
//               </label>
//               <input
//                 type="text"
//                 value={formData.lessonTopic}
//                 onChange={handleChange}
//                 name="lessonTopic"
//                 className="w-full border border-neutral-200 rounded-md px-3 py-2"
//                 placeholder="Write lesson topic here"
//               />
//             </div>
//             <div className="col-span-1 mt-2">
//               <label className="block text-sm text-gray-600 font-semibold mb-1">
//                 Average Duration
//               </label>
//               <input
//                 type="text"
//                 value={formData.averageDuration}
//                 onChange={handleChange}
//                 name="averageDuration"
//                 className="w-full border border-neutral-200 rounded-md px-3 py-2"
//                 placeholder="Enter lesson duration"
//               />
//             </div>
//             <div className="col-span-1 mt-2">
//               <label className="block text-sm text-gray-600 font-semibold mb-1">
//                 Lesson Number
//               </label>
//               <input
//                 type="number"
//                 value={formData.lessonNumber}
//                 onChange={handleChange}
//                 name="lessonNumber"
//                 className="w-full border border-neutral-200 rounded-md px-3 py-2"
//                 placeholder="Enter lesson number"
//               />
//             </div>
//             {/* Content Input */}
//             <div className="mt-2">
//               <label className="block text-sm text-gray-600 font-semibold mb-1">
//                 Content Text
//               </label>
//               <textarea
//                 value={formData.content[0].contentText}
//                 onChange={(e) => handleContentChange(e, 0)}
//                 name="contentText"
//                 className="w-full border border-neutral-200 rounded-md px-3 py-2"
//                 placeholder="Write lesson content text here"
//               />
//             </div>

//            <div className="w-full m-auto mt-6">
//             <h2 className="text-[#191925] font-lg font-semibold mt-3">
//               Cover Image
//             </h2>
//             <div className="border-2 w-full h-[250px] border-gray-300 border-dashed flex justify-center items-center mt-3">
//               {!imagePreview ? (
//                 <label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />
//                   <div className="text-center">
//                     <img
//                       className="m-auto mt-19"
//                       src={upload}
//                       alt="Upload Icon"
//                     />
//                     <h1 className="text-[#191925] font-semibold mt-2">
//                       Drag or drop image here
//                     </h1>
//                     <p className="text-[#8996A9] pr-3 pl-3">
//                       Image should be horizontal, at least 1500 x 500 px
//                     </p>
//                   </div>
//                 </label>
//               ) : (
//                 <div className="relative w-full h-full">
//                   <img
//                     src={imagePreview}
//                     alt="Selected Cover"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="w-full m-auto mt-6">
//             <h2 className="text-[#191925] font-lg font-semibold mt-3">
//               Cover Video
//             </h2>
//             <div className="border-2 w-full h-[250px] border-gray-300 border-dashed flex justify-center items-center mt-3">
//               {!videoPreview ? (
//                 <label>
//                   <input
//                     type="file"
//                     accept="video/*"
//                     onChange={handleVideoChange}
//                     className="hidden"
//                   />
//                   <div className="text-center">
//                     <img
//                       className="m-auto mt-19"
//                       src={upload}
//                       alt="Upload Icon"
//                     />
//                     <h1 className="text-[#191925] font-semibold mt-2">
//                       Drag or drop video here
//                     </h1>
//                   </div>
//                 </label>
//               ) : (
//                 <div className="relative w-full h-full">
//                   <video
//                     src={videoPreview}
//                     alt="Selected Video"
//                     className="w-full h-full object-cover"
//                     controls
//                   />
//                 </div>
//               )}
//             </div>
//           </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateLesson;


import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Sidebar from "../sidebar";
import { ApiPostRequest } from "../../../axios/commonRequest";

const CreateLesson = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const [formData, setFormData] = useState({
    lessonName: "",
    lessonDescription: "",
    lessonTopic: "",
    averageDuration: "",
    lessonNumber: "",
    contentText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImagePreview(URL.createObjectURL(file));
    setImageFile(file);
  }
};


const handleVideoChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setVideoPreview(URL.createObjectURL(file));
    setVideoFile(file);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();

      payload.append("lessonName", formData.lessonName);
      payload.append("lessonDescription", formData.lessonDescription);
      payload.append("lessonTopic", formData.lessonTopic);
      payload.append("averageDuration", formData.averageDuration);
      payload.append("lessonNumber", formData.lessonNumber);
      payload.append("content[contentText]", formData.contentText);

      if (imageFile) {
        payload.append("content[contentImage]", imageFile);
      }
      if (videoFile) {
        payload.append("content[contentVideo]", videoFile);
      }

      const response = await ApiPostRequest("/create-lesson", payload);

      if (response.status === 200) {
        setFormData({
          lessonName: "",
          lessonDescription: "",
          lessonTopic: "",
          averageDuration: "",
          lessonNumber: "",
          contentText: "",
        });
        setImagePreview(null);
        setVideoPreview(null);
        setImageFile(null);
        setVideoFile(null);

        console.log("Lesson created:", response.data);
      }
    } catch (error) {
      console.error("Error creating lesson", error);
    }
  };

  return (
    <div className="flex gap-20 min-h-screen bg-[#f6f8fb]">
      <Sidebar />
      <div className="mt-5 w-[70%]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-gray-500">&larr;</span> Back
          </h2>
        </div>
        <div className="bg-white rounded-xl shadow p-8 mb-6 mt-5">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Create Lesson</h2>
            <button
              className="bg-purple-600 text-white font-bold cursor-pointer p-2 w-[12%] rounded-md"
              onClick={handleSubmit}
            >
              Publish
            </button>
          </div>

          <form className="gap-4 mt-5">
            <div>
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Lesson Name
              </label>
              <input
                type="text"
                name="lessonName"
                value={formData.lessonName}
                onChange={handleChange}
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Write lesson name here"
              />
            </div>

            <div className="mt-3">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Lesson Description
              </label>
              <input
                type="text"
                name="lessonDescription"
                value={formData.lessonDescription}
                onChange={handleChange}
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Write lesson description here"
              />
            </div>

            <div className="mt-3">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Lesson Topic
              </label>
              <input
                type="text"
                name="lessonTopic"
                value={formData.lessonTopic}
                onChange={handleChange}
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Write lesson topic here"
              />
            </div>

            <div className="mt-3">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Average Duration
              </label>
              <input
                type="text"
                name="averageDuration"
                value={formData.averageDuration}
                onChange={handleChange}
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Enter lesson duration"
              />
            </div>

            <div className="mt-3">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Lesson Number
              </label>
              <input
                type="number"
                name="lessonNumber"
                value={formData.lessonNumber}
                onChange={handleChange}
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Enter lesson number"
              />
            </div>

            <div className="mt-3">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Content Text
              </label>
              <textarea
                name="contentText"
                value={formData.contentText}
                onChange={handleChange}
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Write lesson content text here"
              />
            </div>

            {/* Image Upload */}
            <div className="w-full mt-6">
              <h2 className="font-semibold text-[#191925]">Cover Image</h2>
              <div className="border-2 h-[250px] border-gray-300 border-dashed flex justify-center items-center mt-3">
                {!imagePreview ? (
                  <label className="cursor-pointer text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <h1 className="text-[#191925] font-semibold mt-2">
                      Drag or drop image here
                    </h1>
                    <p className="text-[#8996A9]">
                      Image should be horizontal, at least 1500 x 500 px
                    </p>
                  </label>
                ) : (
                  <img
                    src={imagePreview}
                    alt="Selected Cover"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* Video Upload */}
            <div className="w-full mt-6">
              <h2 className="font-semibold text-[#191925]">Cover Video</h2>
              <div className="border-2 h-[250px] border-gray-300 border-dashed flex justify-center items-center mt-3">
                {!videoPreview ? (
                  <label className="cursor-pointer text-center">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                      className="hidden"
                    />
                    <h1 className="text-[#191925] font-semibold mt-2">
                      Drag or drop video here
                    </h1>
                  </label>
                ) : (
                  <video
                    src={videoPreview}
                    className="w-full h-full object-cover"
                    controls
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLesson;
