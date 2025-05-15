import React, { useState } from "react";
import Sidebar from "../sidebar";
import { ApiPostRequest } from "../../../axios/commonRequest";

const CreateBlog = () => {
  const [cover, setCover] = useState(null);
  const [cover1, setCover1] = useState(null);


  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    contentDetails: "",
    category: "",
    coverBlogImage: "",
    thumbnailBlogImage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleCoverChangeforcoverBlogImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    setCover(URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      coverBlogImage: file,
    }));
  }
};

const handleCoverChangeforthumbnailBlogImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    setCover1(URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      thumbnailBlogImage: file,
    }));
  }
};



  const handleSubmit = async (draft) => {
    // e.preventDefault();
    console.log(draft,"public draft");
    
    try {
      const payload = new FormData();

      payload.append("title", formData.title);
      payload.append("shortDescription", formData.shortDescription);
      payload.append("contentDetails", formData.contentDetails);
      payload.append("category", formData.category);
      payload.append("saveAsBlog", draft);

      // payload.append("coverBlogImage", formData.coverBlogImage);
      // payload.append("thumbnailBlogImage", formData.thumbnailBlogImage);

      if (formData.coverBlogImage) {
        payload.append("coverBlogImage", formData.coverBlogImage);
      }

      if (formData.thumbnailBlogImage) {
        payload.append("thumbnailBlogImage", formData.thumbnailBlogImage);
      }

      const response = await ApiPostRequest("/create-blog", payload);
      if (response.status === 200) {
        setFormData({
          title: "",
          shortDescription: "",
          contentDetails: "",
          category: "",
          coverBlogImage: "",
          thumbnailBlogImage: "",
        });
        setCover("")
        console.log(response.data, "blog response");
      }
    } catch (error) {}
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#f7fafd] flex">
      {/* Sidebar Icon (Top Left) */}
      <Sidebar />
      <div className="w-[70%] m-auto mt-10 bg-white rounded-xl shadow p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Create Blog</h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={()=>handleSubmit("draft")}
              className="px-4 py-2 border border-purple-500 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition"
            >
              Save as Draft
            </button>
            <button
              type="button"
              onClick={()=>handleSubmit("public")}
              className="px-4 py-2 bg-purple-600 cursor-pointer text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center"
            >
              Publish
            </button>
          </div>
        </div>

        {/* Cover */}
        <div className="mb-6">
          <div className="mb-2 block font-medium">Cover</div>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-32 cursor-pointer bg-gray-50">
            <span className="text-gray-400 mb-2">Drag or drop image here</span>
            <span className="text-xs text-gray-400">
              Image should be horizontal, at least 1500 × 500 px
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleCoverChangeforcoverBlogImage}
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
            <span className="text-gray-400 mb-2">Drag or drop image here</span>
            <span className="text-xs text-gray-400">
              Image should be horizontal, at least 1500 × 500 px
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleCoverChangeforthumbnailBlogImage}
            />
            {cover1 && (
              <img
                src={cover1}
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
            value={formData.title}
            onChange={handleChange}
            name="title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Category</label>
          <input
            type="text"
            value={formData.category}
            onChange={handleChange}
            name="category"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
            placeholder="Enter your category here"
          ></input>
        </div>

        {/* Short Description */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Short Description</label>
          <input
            type="text"
            value={formData.shortDescription}
            onChange={handleChange}
            name="shortDescription"
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
            value={formData.contentDetails}
            name="contentDetails"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
