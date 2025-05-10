import React from "react";
import Sidebar from "../sidebar";

const articles = [
  {
    category: "Geriatric",
    categoryColor: "text-blue-500",
    title: "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Sandy Gustman",
    date: "July 23, 2024",
    avatar: null,
  },
  {
    category: "Wellness and Lifestyle",
    categoryColor: "text-blue-500",
    title: "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Albert Flores",
    date: "July 23, 2024",
    avatar: null,
  },
  {
    category: "Sports Rehabilitation",
    categoryColor: "text-blue-500",
    title: "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Kristin Watson",
    date: "July 23, 2024",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    category: "Neurological",
    categoryColor: "text-blue-500",
    title: "Unlocking the Secrets of Movement: Advanced Techniques for Enhancing Physiotherapy Outcomes",
    author: "Jane Cooper",
    date: "July 23, 2024",
    avatar: null,
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      {/* Main Row: Sidebar + Main Content + Right Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
          <Sidebar />
        {/* Main Content */}
        <div className="flex-1 flex justify-center py-8">
          <div className="w-full max-w-3xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Blog Page</h2>
                <p className="text-gray-500 text-sm">Stay informed with our latest articles and updates.</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="border rounded px-3 py-1 text-sm"
                />
                <select className="border rounded px-2 py-1 text-sm">
                  <option>Featured</option>
                  <option>Latest</option>
                </select>
              </div>
            </div>
            {/* Featured Articles */}
            <div className="bg-white rounded-xl shadow p-6 mt-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500 text-lg">★</span>
                <span className="font-medium text-gray-700">Featured Articles</span>
              </div>
              <div>
                {articles.map((a, idx) => (
                  <div
                    key={idx}
                    className={`py-8 ${idx !== articles.length - 1 ? "border-b" : ""} border-gray-100`}
                  >
                    <div className={`text-sm font-semibold mb-1 ${a.categoryColor}`}>
                      {a.category}
                    </div>
                    <div className="font-medium text-gray-800 mb-1 leading-snug">
                      {a.title}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                      {a.avatar && (
                        <img
                          src={a.avatar}
                          alt={a.author}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                      )}
                      <span>{a.author}</span>
                      <span>•</span>
                      <span>{a.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* View All Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded font-medium shadow hover:bg-blue-600 transition">
                View All
              </button>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="ml-8 w-80">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Newsletter"
                className="w-16 h-16 mb-2"
              />
              <h3 className="font-semibold text-md mb-1 text-center">Subscribe to Our Newsletter</h3>
              <p className="text-xs text-gray-500 text-center mb-3">
                Stay up-to-date with the latest news, articles from PhysioHub. Enter your email below to subscribe to our newsletter.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded font-medium shadow hover:bg-blue-600 transition text-sm">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-white border-t mt-8 py-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-blue-500">PhysioHub</span>
            <span className="text-xs text-gray-400">|</span>
            <span className="text-xs text-gray-500">mail@example.com</span>
          </div>
          <div className="flex gap-8 text-xs text-gray-500">
            <div>
              <div className="font-semibold text-gray-700 mb-1">Features</div>
              <div>Quiz</div>
              <div>Flash Card</div>
              <div>Mock Test</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Articles</div>
              <div>Our Blogs</div>
              <div>Rehab Protocols</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Resources</div>
              <div>About Us</div>
              <div>Contact</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Extra</div>
              <div>Customer Support</div>
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-2">
            © Copyright 2024, PhysioHub All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}