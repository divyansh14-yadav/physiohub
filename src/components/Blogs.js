import React from "react";
import blogIcon from "../images/blogIcon.svg";
import blogImage from "../images/blogImage.svg";
import sectionImage from "../images/sectionImage.svg"
const blogData = [
        {
          "image": blogImage,
          "title": "Muscel",
          "description": "In this blog, we will dive deep into ReactJS",
          "name": "Amit Sharma"
        },
        {
          "image": blogImage,
          "title": "CardioVascular",
          "description": "Node.js is a powerful JavaScript runtime",
          "name": "Priya Verma"
        },
        {
          "image": blogImage,
          "title": "Muscel",
          "description": "MongoDB is a document-based NoSQL database",
          "name": "Rohit Mehta"
        }
      
];

const Blogs = () => {
  return (
    <div>
      <div className="w-[90%] m-auto mt-20">
        <div className="flex gap-2  items-center">
          <img src={blogIcon} alt="" />
          <h5 className="text-purple-600 font-semibold">BLOGS</h5>
        </div>
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-3xl font-bold">Explore all our insight</h1>
          <button className="bg-[#f4f5f7] w-25 text-[#7240FD] rounded-md border border-[#7240FD1A] p-2">
            View All
          </button>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10 w-[90%] m-auto">
          {blogData.map((blogs, index) => (
            <div key={index} className="bg-[#F0F5FA] pb-4 rounded-xl">
              <img src={blogs.image} alt="" className="w-full" />
             <div className="p-2">
             <p className="mt-2 text-sm text-purple-600">{blogs.title}</p>
              <p className="font-semibold mt-2 text-[19px]">{blogs.description}</p>
              <p className="mt-3 border-1 rounded-2xl w-[30%] text-center border-[#DDE1E3]">{blogs.name}</p>
             </div>
            </div>
          ))}
        </div>
        <div className="mt-20 w-[90%] m-auto">
            <img src={sectionImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
