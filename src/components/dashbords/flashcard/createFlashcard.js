import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../sidebar";
import { NavLink } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FaUpload, FaTrash } from "react-icons/fa";

import { ApiFetchRequest, ApiPostRequest } from "../../../axios/commonRequest";

const CreateFlashcard = () => {
  const [frontImg, setFrontImg] = useState(null);
  const [backImg, setBackImg] = useState(null);
  const [cover, setCover] = useState(null);
  const [openModalforCreateToipcs, setOpenModalForCreateToipcs] =
    useState(false);

  const [topicFlashName, setTopicFlashName] = useState("");

  const [allFlashCardTopic, setAllFlashCardTopic] = useState([]);
  console.log(allFlashCardTopic, "allFlashCardTopic");

  const [updatedflashCardTopicData, setUpdatedflashCardTopicData] =
    useState(false);

  const [allFlashCardLevel, setAllFlashCardLevel] = useState([]);
  console.log(allFlashCardLevel, "allFlashCardLevel");

  const [updatedflashCardLevelData, setUpdatedflashCardLevelData] =
    useState(false);

  const [coverFile, setCoverFile] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    hint: "",
    subject: "",
    masteryLevel: "",
    confidance_level: "",
    flash_topics: "",
    flashImage: "",
    frontTitle: "",
    frontImage: "",
    backTitle: "",
    backImage: "",
  });
  console.log(formData, "flashformdata");

  const token = JSON.parse(localStorage.getItem("token"));

  const frontInputRef = useRef();
  const backInputRef = useRef();

  const handleCloseCreateTopics = () => setOpenModalForCreateToipcs(false);

  const handleShowCreateTopics = () => {
    setOpenModalForCreateToipcs(true);
  };

  const handleCreateFlashCardTopic = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiPostRequest("/create-flash-topics", {
        topicFlashName: topicFlashName,
      });
      console.log(response, "CreateFlashCardTopic response");

      if (response?.status === 200) {
        setTopicFlashName("");
        handleCloseCreateTopics();
        setUpdatedflashCardTopicData(true);
      }
    } catch (error) {
      console.error("flashcard error:", error);
    }
  };

  useEffect(() => {
    const fetchAllCreateFlashCardTopics = async () => {
      try {
        const response = await ApiFetchRequest("/all-flash-topics");

        if (response.status === 200) {
          setAllFlashCardTopic(response.data.flashcardTopics);
          setUpdatedflashCardTopicData(false);
        } else {
          console.log("Error fetching CreateFlashCardlevel");
        }
      } catch (error) {
        console.error("Error fetching CreateFlashCardlevel", error);
      }
    };

    fetchAllCreateFlashCardTopics();
  }, [updatedflashCardLevelData]);

  useEffect(() => {
    const fetchAllFlashCardLevel = async () => {
      try {
        const response = await ApiFetchRequest("/all-flash-category-level");

        if (response.status === 200) {
          setAllFlashCardLevel(response.data.categoryLevel);
          setUpdatedflashCardLevelData(false);
        } else {
          console.log("Error fetching CreateFlashCardTopics");
        }
      } catch (error) {
        console.error("Error fetching CreateFlashCardTopics", error);
      }
    };

    fetchAllFlashCardLevel();
  }, [updatedflashCardLevelData]);

 const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  const handleCreateFlashCard = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();

      payload.append("title", formData.title);
      payload.append("description", formData.description);
      payload.append("hint", formData.hint);
      payload.append("subject", formData.subject);
      payload.append("masteryLevel", formData.masteryLevel);
      payload.append("confidance_level", formData.confidance_level);
      payload.append("flash_topics", formData.flash_topics);

      if (formData.flashImage) {
        payload.append("flashImage", formData.flashImage);
      }

      payload.append("frontTitle", formData.frontTitle);

      if (formData.frontImage) {
        payload.append("frontImage", formData.frontImage);
      }

      payload.append("backTitle", formData.backTitle);

      if (formData.backImage) {
        payload.append("backImage", formData.backImage);
      }

      const response = await ApiPostRequest("/create-flash-card", payload);
      console.log(response, "CreateFlashCardTopic response");

      if (response?.status === 200) {
        setFormData({
          title: "",
          description: "",
          hint: "",
          subject: "",
          masteryLevel: "",
          confidance_level: "",
          flash_topics: "",
          flashImage: "",
          frontTitle: "",
          frontImage: "",
          backTitle: "",
          backImage: "",
        });
      }
    } catch (error) {
      console.error("flashcard error:", error);
    }
  };
  return (
    <div className="flex min-h-screen bg-[#f6f8fb]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-8 overflow-y-scroll h-200">
        <div className="flex items-center justify-between w-[80%]">
          <NavLink to={"teacherFlashCard"} className="text-xl font-semibold">
            &larr; back
          </NavLink>
        </div>
        <form className="w-full max-w-5xl bg-white rounded-2xl shadow p-8 space-y-5 mt-5">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Create Flash Card</h2>
            <button
              type="button"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-lg"
              onClick={handleCreateFlashCard}
            >
              Create
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
              placeholder="Write question here"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
              placeholder="Write description here"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hint
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
              placeholder="Write Hint here"
              name="hint"
              value={formData.hint}
              onChange={handleChange}
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
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mastery Level
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                placeholder="0"
                name="masteryLevel"
                value={formData.masteryLevel}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex-1 flex gap-2 items-center">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confidence Level
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-2 py-2.5"
                name="confidance_level"
                // value={formData.confidance_level}
                onChange={handleChange}
              >
                <option>Choose Level</option>
                {allFlashCardLevel?.map((flashlevel, index) => (
                  <option key={index} value={flashlevel._id}>
                    {flashlevel.confidance_level}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 flex gap-2 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Topic
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                  name="flash_topics"
                  onChange={handleChange}
                >
                  <option value="">Choose Topics</option>
                  {allFlashCardTopic?.map((topic, index) => (
                    <option key={index} value={topic._id}>
                      {topic.topicFlashName}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="h-10 px-4 py-2.5 bg-purple-50 border-purple-200 rounded-lg text-sm font-semibold"
                onClick={handleShowCreateTopics}
              >
                + Add New Topic
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-1 font-semibold">
              Image
            </div>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-32 bg-gray-50">
              {!cover ? (
                <>
                  <label className="cursor-pointer">
                    <FaUpload className="text-4xl text-gray-400 mb-2 hover:text-purple-500 transition-colors" />
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setCover(URL.createObjectURL(file));
                          setCoverFile(file);
                          setFormData((prev) => ({
                            ...prev,
                            flashImage: file,
                          }));
                        }
                      }}
                    />
                  </label>
                  <span className="text-gray-400 mb-2">
                    Click icon to upload cover image
                  </span>
                  <span className="text-xs text-gray-400">
                    Image should be horizontal, at least 1500 × 500 px
                  </span>
                </>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={cover}
                    alt="Cover"
                    className="w-[30%] m-auto h-full object-cover rounded"
                  />
                  {/* <div className="relative bottom-32 left-132 text-2xl text-purple-600">x</div> */}
                  <label className="absolute inset-0 flex items-center justify-center cursor-pointer">
                    <FaUpload className="text-4xl text-white opacity-0 hover:opacity-100 transition-opacity" />
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setCover(URL.createObjectURL(file));
                          setCoverFile(file);
                          setFormData((prev) => ({
                            ...prev,
                            flashImage: file,
                          }));
                        }
                      }}
                    />
                  </label>
                </div>
              )}
            </div>
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
                      const file = e.target.files[0];
                      if (file) {
                        setFrontImg(URL.createObjectURL(file));
                        setFormData((prev) => ({
                          ...prev,
                          frontImage: file,
                        }));
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
                    name="frontTitle"
                    value={formData.frontTitle}
                    onChange={handleChange}
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
                      const file = e.target.files[0];
                      if (file) {
                        setBackImg(URL.createObjectURL(file));
                        setFormData((prev) => ({
                          ...prev,
                          backImage: file,
                        }));
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
                    name="backTitle"
                    value={formData.backTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Dialog
        open={openModalforCreateToipcs}
        onClose={() => setOpenModalForCreateToipcs(false)}
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
                        className="text-2xl font-semibold text-gray-900"
                      >
                        Create New Topic
                      </Dialog.Title>
                      <button
                        onClick={handleCloseCreateTopics}
                        className="text-2xl cursor-pointer text-neutral-400"
                      >
                        x
                      </button>
                    </div>
                    <div className="mt-2">
                      <p className="font-semibold text-gray-700">Topic Name</p>
                      <div className="mt-2 w-full">
                        <input
                          placeholder="Enter topic name"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3 text-sm"
                          //   rows={4}
                          value={topicFlashName}
                          onChange={(e) => setTopicFlashName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dialog buttons */}
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:ml-3 sm:w-auto"
                  onClick={handleCreateFlashCardTopic}
                >
                  Create
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:mt-0 sm:w-auto"
                  onClick={handleCloseCreateTopics}
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

export default CreateFlashcard;
