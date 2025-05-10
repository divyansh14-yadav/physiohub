import React from "react";
import { Trash2, PenLine, FileX2 } from "lucide-react";
import Sidebar from "../sidebar";
import { useNavigate } from "react-router-dom";

const flashcards = [
  {
    id: 1,
    category: "Geriatric",
    title: "Musculoskeletal Physiology Anatomy",
    cards: 120,
    duration: 20,
    image: null,
  },
  {
    id: 2,
    category: "Geriatric",
    title: "Ligament Physiotherapy",
    cards: 120,
    duration: 20,
    image:
      "https://img.freepik.com/free-photo/3d-medical-background-with-male-figure-painful-shoulder_1048-10649.jpg",
  },
];

export default function TeacherFlashCard() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <div className="ml-20 py-8 w-full">
          <div className="w-full max-w-4xl">
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
            <div className="bg-white rounded-xl shadow p-6 mt-4">
              <div className="max-w-2xl mx-auto space-y-6">
                {flashcards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white border-b border-neutral-200 p-6 flex gap-4 items-center"
                  >
                    {/* Image (if present) */}
                    {card.image && (
                      <img
                        src={card.image}
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
                        <span>
                          <svg
                            className="inline w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <path d="M16 2v4M8 2v4" />
                          </svg>
                          {card.cards} cards
                        </span>
                        <span>
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
                          {card.duration} min
                        </span>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 h-10 rounded-md hover:bg-gray-100 text-gray-600 border border-gray-300">
                        <PenLine size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
