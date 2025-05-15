import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { ApiFetchRequest } from "../../../axios/commonRequest";
import { useNavigate } from "react-router-dom";

const UserFlashcard = () => {
  const [allFlashCard, setAllFlashCard] = useState([]);
  console.log(allFlashCard, "all flashcard");

  const navigate = useNavigate()
  useEffect(() => {
    const fetchAllFlashCard = async () => {
      try {
        const response = await ApiFetchRequest("/found-all-card");
        console.log(response.data, "API Response");

        if (response.status === 200) {
          setAllFlashCard(response.data.allFleshCard || []);
        }
      } catch (error) {
        console.error("Error fetching AllFlashCard", error);
      }
    };

    fetchAllFlashCard();
  }, []);

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <div className="min-h-screen px-2 py-8 flex flex-col ml-10">
          {/* Header */}
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              All Flashcards
            </h1>
            <p className="text-gray-700 mb-6 line-clamp-3">
              A perfect tool for quick revisions and reinforcing your learning,
              making complex information easy to remember.
            </p>
          </div>

          {/* Flashcard */}
          <div className="grid grid-cols-3 gap-5">
            {allFlashCard.map((userFlashCard, index) => (
              <div className="w-full max-w-sm mt-10 bg-white rounded-2xl shadow border border-gray-100 p-4 md:p-6 flex flex-col  mb-4">
                <div className="relative w-full">
                  {/* Image */}
                  <img
                    src={userFlashCard.flashImage}
                    alt="Ankle Sprain"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                {/* Content */}
                <div className="w-full mt-4">
                  <h2 className="text-lg font-bold mb-1">
                    {userFlashCard.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">
                    {`${userFlashCard.description?.substring(0,60)}...`}
                  </p>
                  {/* Stars */}
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={
                          i < userFlashCard.averageRating
                            ? "text-yellow-400 w-5 h-5"
                            : "text-gray-300 w-5 h-5"
                        }
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-gray-500 text-xs mb-3">Rating {userFlashCard.numReviews}</div>
                  {/* Button */}
                  <button className="w-full border border-purple-500 cursor-pointer text-purple-600 font-medium rounded-lg py-2 transition hover:bg-purple-50"
                  onClick={()=>navigate(`/flashCardDetails/${userFlashCard.subject}`)}
                  >
                    View FlashCards
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFlashcard;
