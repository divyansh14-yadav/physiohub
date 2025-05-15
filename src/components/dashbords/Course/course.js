import React, { useState } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import Sidebar from "../sidebar";
import { ApiPostRequest } from "../../../axios/commonRequest";
const CreateCourse = () => {
  const [cover, setCover] = useState(null);

  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    coursePrice: "",
    categories: "",
    courseImage: "",
    courseDuration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCover(URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        courseImage: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();

      payload.append("courseName", formData.courseName);
      payload.append("courseDescription", formData.courseDescription);
      payload.append("coursePrice", formData.coursePrice);
      payload.append("categories", formData.categories);
      payload.append("courseDuration", formData.courseDuration);

      if(formData.courseImage){
      payload.append("courseImage",formData.courseImage)
      }

      const response = await ApiPostRequest("/create-course", payload);
      if (response.status === 200) {
        setFormData({
          courseName: "",
          courseDescription: "",
          coursePrice: "",
          categories: "",
          courseImage: "",
          courseDuration: "",
        });
        console.log(response.data, "corse response");
      }
    } catch (error) {}
    console.log(formData);
  };

  return (
    <div className="flex gap-20 min-h-screen bg-[#f6f8fb]">
      {/* Sidebar */}
      <Sidebar />
      <div className="mt-5 w-[70%]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold  flex items-center gap-2">
            <span className="text-gray-500">&larr;</span> Back
          </h2>
     
        </div>
        {/* Personal Info */}
        <div className="bg-white rounded-xl shadow p-8 mb-6 mt-5">

          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Create course</h2>
                 <button
            className="bg-purple-600 text-white font-bold cursor-pointer p-2 w-[12%] rounded-md"
            onClick={handleSubmit}
          >
            Publish
          </button>
          </div>
          {/* Form */}
          <form className="gap-4">
            <div className="col-span-1 mt-5">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.courseName}
                onChange={handleChange}
                name="courseName"
                placeholder="Write question here"
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
              />
            </div>
            <div className="col-span-1 mt-2">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Description
              </label>
              <input
                type="text"
                value={formData.courseDescription}
                onChange={handleChange}
                name="courseDescription"
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="write description here"
              />
            </div>
            <div className="col-span-1 mt-2">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Categories
              </label>
              <p className="text-xs text-gray-400 pb-2">
                Type Categories Seprated by coma ","
              </p>
              <input
                type="text"
                value={formData.categories}
                onChange={handleChange}
                name="categories"
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="e.g Orthopedic,Neurological,Pediatric"
              />
            </div>
            <div className="col-span-1 mt-2">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Price
              </label>
              <input
                type="Number"
                value={formData.coursePrice}
                onChange={handleChange}
                name="coursePrice"
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Enter price"
              />
            </div>
            <div className="flex items-center gap-10">
              <div className="col-span-1 mt-2 w-[50%]">
                <label className="block text-sm text-gray-600 font-semibold mb-1">
                  Lesson
                </label>
                <select className="border rounded-md border-neutral-200 p-2 w-full">
                  <option value="">Select Lesson</option>
                  <option value="">chapter1</option>
                </select>
              </div>
              <div className="col-span-1 mt-2 w-[50%]">
                <label className="block text-sm text-gray-600 font-semibold mb-1">
                  Quiz
                </label>
                <select className="border rounded-md border-neutral-200 p-2 w-full">
                  <option value="">Select Quiz</option>
                  <option value="">quiz1</option>
                </select>
              </div>
            </div>
            <div className="col-span-1 mt-2">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                {"Estimated Duration " + "(" + "In Minnutes" + ")"}
              </label>
              <input
                type="text"
                value={formData.courseDuration}
                onChange={handleChange}
                name="courseDuration"
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Enter your valid email here"
              />
            </div>
            <div className="mb-6 mt-2">
              <div className="text-sm text-gray-600 font-semibold">Cover</div>
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-32 cursor-pointer bg-gray-50">
                <span className="text-gray-400 mb-2">
                  Drag or drop image here
                </span>
                <span className="text-xs text-gray-400">
                  Image should be horizontal, at least 1500 × 500 px
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleCoverChange}
                />
                {cover && (
                  <img
                    src={formData.courseImage}
                    alt="Cover"
                    className="mt-2 h-16 object-cover rounded"
                  />
                )}
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
