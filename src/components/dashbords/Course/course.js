import React, { useState } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import Sidebar from "../sidebar";
const CreateCourse = () => {
  const [cover, setCover] = useState(null);
  
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      categories: '',
      price: '',
      lesson: '',
      quiz: '',
      duration: '',
      cover: null
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleCoverChange = (e) => {
      if (e.target.files[0]) {
        setFormData(prev => ({
          ...prev,
          cover: URL.createObjectURL(e.target.files[0])
        }));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
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
          <button className="bg-purple-600 text-white font-bold p-2 w-[12%] rounded-md">
            Publish
          </button>
        </div>
        {/* Personal Info */}
        <div className="bg-white rounded-xl shadow p-8 mb-6 mt-5">
          {/* Form */}
          <form className="gap-4">
            <div className="col-span-1 mt-2">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Title
              </label>
              <input
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Write question here"
              />
            </div>
            <div className="col-span-1 mt-2">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Description
              </label>
              <input
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
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="e.g Orthopedic,Neurological,Pediatric"
              />
            </div>
            <div className="col-span-1 mt-2">
              <label className="block text-sm text-gray-600 font-semibold mb-1">
                Price
              </label>
              <input
                className="w-full border border-neutral-200 rounded-md px-3 py-2"
                placeholder="Enter price"
                type="Number"
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
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setCover(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
                {cover && (
                  <img
                    src={cover}
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
