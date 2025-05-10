import React, { useState } from "react";
import landind1 from "../images/svgviewer-output.svg";
import emoji from "../images/emoji.svg";

const Faq = () => {
  const faqData = [
    {
      question: "How do I create a new task?",
      answer:
        "Click on the 'Add Task' button and fill out the form to create a new task.",
    },
    {
      question: "Can I edit a task after creating it?",
      answer:
        "Yes, click on the edit icon next to any task to update its details.",
    },
    {
      question: "How do I mark a task as completed?",
      answer:
        "Simply click the checkbox next to the task name to mark it as completed.",
    },
    {
      question: "Can I set due dates for tasks?",
      answer:
        "Yes, when creating or editing a task, you can set a due date to stay on schedule.",
    },
    {
      question: "Is there a way to prioritize tasks?",
      answer:
        "You can use tags or custom fields to prioritize tasks based on urgency.",
    },
    {
      question: "Can I delete a task permanently?",
      answer:
        "Yes, click the delete icon next to the task, and confirm the deletion.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 mt-20">
      <div className="w-[90%] flex flex-col lg:flex-row gap-16 p-10 py-20 m-auto">
        <div className="lg:w-[40%] w-full">
          <div className="flex gap-2 items-center mb-4">
            <img src={landind1} alt="FAQ icon" className="w-6 h-6" />
            <p className="text-purple-600 font-semibold">FAQ</p>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h1>
          <p className="text-gray-600">
            Visit our{" "}
            <a href="#" className="text-purple-600 underline">
              Help Center
            </a>{" "}
            for more information.
          </p>
          <div className="mt-50">
          <img src={emoji} alt="" className="w-[25%]" />
          </div>
        </div>

        <div className="lg:w-[60%] w-full">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer mt-5 bg-white shadow-sm transition-all duration-300"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
