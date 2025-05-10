import React, { useRef, useState } from "react";
import Sidebar from "../sidebar";

const CreateFlashcard = () => {
  const [frontImg, setFrontImg] = useState(null);
  const [backImg, setBackImg] = useState(null);
  const [cover, setCover] = useState(null);

  const frontInputRef = useRef();
  const backInputRef = useRef();
  return (
    <div className="flex min-h-screen bg-[#f6f8fb]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-8">
        <div className="flex items-center justify-between w-[80%]">
          <button type="button" className="text-xl font-semibold">
            &larr; back
          </button>
          <button
            type="button"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
        <form className="w-full max-w-5xl bg-white rounded-2xl shadow p-8 space-y-5 mt-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
              placeholder="Write question here"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
              placeholder="Write description here"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hint
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
              placeholder="Write Hint here"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                placeholder="Write Subject here"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mastery Level
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confidence Level
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5">
                <option>Choose Level</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div className="flex-1 flex gap-2 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Topic
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5">
                  <option>upsc</option>
                  {/* Add more topics as needed */}
                </select>
              </div>
              <button
                type="button"
                className="h-10 px-4 py-2.5 bg-purple-50 border-purple-200 rounded-lg text-sm font-semibold"
              >
                + Add New Topic
              </button>
            </div>
          </div>
          <div className="mb-6 mt-2">
            <div className="text-sm text-gray-600 font-semibold">Image</div>
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
          <div className="space-y-4">
            {/* Front */}
            <div className="space-y-4">
              {/* Front */}
              <div className="flex items-center gap-4">
                <div
                  className="flex flex-col items-center justify-center border-2 border-dashed border-purple-200 rounded-lg w-20 h-20 text-purple-600 cursor-pointer relative overflow-hidden"
                  onClick={() => !frontImg && frontInputRef.current.click()}
                >
                  {frontImg ? (
                    <div className="relative w-full h-full">
                      <img
                        src={frontImg}
                        alt="Front Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full p-1 text-red-500 hover:bg-opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFrontImg(null);
                          frontInputRef.current.value = "";
                        }}
                        title="Remove"
                      >
                        &#10005;
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6 mb-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                      <span className="text-xs font-semibold">Front</span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={frontInputRef}
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setFrontImg(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Front
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                    placeholder="Front Content"
                  />
                </div>
              </div>
              {/* Back */}
              <div className="flex items-center gap-4">
                <div
                  className="flex flex-col items-center justify-center border-2 border-dashed border-purple-200 rounded-lg w-20 h-20 text-purple-600 cursor-pointer relative overflow-hidden"
                  onClick={() => !backImg && backInputRef.current.click()}
                >
                  {backImg ? (
                    <div className="relative w-full h-full">
                      <img
                        src={backImg}
                        alt="Back Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full p-1 text-red-500 hover:bg-opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          setBackImg(null);
                          backInputRef.current.value = "";
                        }}
                        title="Remove"
                      >
                        &#10005;
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6 mb-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                      <span className="text-xs font-semibold">Back</span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={backInputRef}
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setBackImg(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Back
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                    placeholder="Back Content"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateFlashcard;
