import React, { useEffect, useState } from "react";
import { Trash2, PenLine, FileX2 } from "lucide-react";
import Sidebar from "../sidebar";
import { useNavigate } from "react-router-dom";
import {
  ApiDeleteRequest,
  ApiFetchRequest,
} from "../../../axios/commonRequest";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const TeacherFlashCard = () => {
  const [allFlashCard, setAllFlashCard] = useState([]);
  const [flashCardDeleteId, setFlashCardDeleteId] = useState("");
  const [updatedData, setUpdatedData] = useState(false);
  const [openModalforCourse, setOpenModalForCourse] = useState(false);

  useEffect(() => {
    const fetchAllFlashCard = async () => {
      try {
        const response = await ApiFetchRequest("/found-all-card");
        console.log(response.data, "API Response");

        if (response.status === 200) {
          setAllFlashCard(response.data.allFleshCard || []);
          setUpdatedData(true);
        }
      } catch (error) {
        console.error("Error fetching AllFlashCard", error);
      }
    };

    fetchAllFlashCard();
  }, [updatedData]);

  const handleDeleteflashCard = async () => {
    try {
      const response = await ApiDeleteRequest(
        `/delete-flash-card/${flashCardDeleteId}`
      );
      if (response.status === 200) {
        setUpdatedData(false);
        setOpenModalForCourse(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <div className="ml-20 py-8 w-full">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">&larr; FlashCard</h2>
              </div>
              <div className="flex items-center gap-2">
                {/* <button className="bg-gray-400 text-white p-2 rounded-[12px] font-medium text-[16px]">
                  Featured
                </button> */}
                <button
                  className="bg-[#7240FD] text-white p-2 rounded-[12px] font-medium text-[16px]"
                  onClick={() => navigate("/createFlashCard")}
                >
                  + Create New
                </button>
              </div>
            </div>

            {/* Articles Section */}
            <div className="bg-white rounded-xl shadow p-6 mt-4 overflow-y-scroll h-180">
              <div className="max-w-6xl mx-auto space-y-6">
                {allFlashCard.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white border-b border-neutral-200 p-6 flex gap-4 items-center"
                  >
                    {/* Image (if present) */}
                    {card.flashImage && (
                      <img
                        src={card.flashImage}
                        alt={card.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <div className="text-sm text-blue-500 font-semibold mb-1">
                        {card.category}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">
                        {card.title}
                      </div>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-2">
                          <svg
                            className="inline w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                          </svg>

                          {card.subject}
                        </span>
                        <span className="flex gap-2 items-center">
                          <svg
                            className="inline w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          <p className="text-[15px] text-[#495D79] font-medium">
                            {new Date(card.createdAt).toLocaleDateString(
                              "en-IN",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </span>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                        <PenLine size={18} />
                      </button>
                      <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                        <Trash2
                          size={18}
                          onClick={() => {
                            setOpenModalForCourse(true);
                            setFlashCardDeleteId(card._id);
                          }}
                        />
                      </button>
                    </div>
                  </div>
                ))}
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
                        onClick={() => setOpenModalForCourse(false)}
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
                  onClick={handleDeleteflashCard}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:mt-0 sm:w-auto"
                  onClick={() => setOpenModalForCourse(false)}
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

export default TeacherFlashCard;
