import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiFetchRequest } from "../../../../axios/commonRequest";

const flashcardsData = [
  {
    id: 1,
    chapter: "Chest Physiotherapy",
    question:
      "The musculoskeletal system weakens with age, too, increasing the risk of injuries and musculoskeletal diseases like",
    total: 5,
    rating: 4.8,
    ratingsCount: 273,
  },
  {
    id: 2,
    chapter: "Cardiovascular Health",
    question:
      "A healthy cardiovascular system reduces the risk of heart-related diseases like",
    total: 5,
    rating: 4.9,
    ratingsCount: 321,
  },
  {
    id: 3,
    chapter: "Respiratory Therapy",
    question: "Proper respiratory care can prevent diseases like asthma and",
    total: 5,
    rating: 4.7,
    ratingsCount: 180,
  },
  {
    id: 4,
    chapter: "Digestive Care",
    question: "Good digestion practices help prevent issues like ulcers and",
    total: 5,
    rating: 4.6,
    ratingsCount: 220,
  },
  {
    id: 5,
    chapter: "Neurological Health",
    question:
      "Maintaining neurological health helps reduce the risk of diseases like Parkinson's and",
    total: 5,
    rating: 5.0,
    ratingsCount: 450,
  },
];

const FlashcardDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [detailedFlashCard, setDetailedFlashCard] = useState([]);

  const { subject } = useParams();

  useEffect(() => {
    const handleViewFlashCard = async () => {
      try {
        const response = await ApiFetchRequest(`/found-single-card/${subject}`);

        console.log(response, "detaild ViewFlashCard");
        if (response.status === 200) {
          setDetailedFlashCard(response.data.feature_single_blog);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleViewFlashCard();
  }, [subject]);

  const progress = completed
    ? 100
    : ((currentIndex + 1) / flashcardsData.length) * 100;

  const handleNext = () => {
    if (currentIndex < flashcardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-8">
        <div className="h-1 bg-gray-200 rounded">
          <div
            className="h-1 bg-purple-400 rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {completed ? (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-4xl font-bold text-purple-600">🎉 Well Done!</h1>
        </div>
      ) : (
       {
        
       }
      )}
    </div>
  );
};

export default FlashcardDetails;
