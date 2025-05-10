import React, { useState } from "react";
import Sidebar from "../sidebar";

const CreateBlog = () => {
      const [cover, setCover] = useState(null);
    
  return (
    <div className="min-h-screen bg-[#f7fafd] flex">
      {/* Sidebar Icon (Top Left) */}
      <Sidebar/>
      <div className="w-[50%] ml-30 mt-10 bg-white rounded-xl shadow p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Create Blog</h2>
          <div className="flex gap-3">
            <button
              type="button"
              className="px-4 py-2 border border-purple-500 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition"
            >
              Save as Draft
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center"
            >
              <span className="mr-1"></span> Publish
            </button>
          </div>
        </div>

        {/* Cover */}
        <div className="mb-6">
            <div className="mb-2 block font-medium">Cover</div>
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

        {/* Thumbnail */}
        <div className="mb-6">
            <div className="mb-2 block font-medium">Thumbnail</div>
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

        {/* Title */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter title here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Category</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-200">
            <option>Choose category</option>
            {/* Add more options here */}
          </select>
        </div>

        {/* Short Description */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Short Description</label>
          <input
            type="text"
            placeholder="Enter short description here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
        </div>

        {/* Content */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Content</label>
          <textarea
            rows={8}
            placeholder="Write your content here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;