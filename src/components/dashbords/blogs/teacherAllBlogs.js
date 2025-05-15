import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { Trash2, PenLine, FileX2 } from "lucide-react";
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
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function TeacherBlogs() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [publicBlogs, setPublicBlogs] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [openModalforBlog, setOpenModalForBlog] = useState(false);
  const [blogDeleteId, setBlogDeleteId] = useState("");
  const [updatedData, setUpdatedData] = useState(false);

  const headings = ["draft", "public"];
  const navigate = useNavigate();

  const handleCloseBlog = () => setOpenModalForBlog(false);

  const handleShowBlog = (id) => {
    setBlogDeleteId(id);
    setOpenModalForBlog(true);
  };

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await ApiFetchRequest("/found-all-blogs");
        console.log(response.data, "API Response");

        if (response.status === 200) {
          setAllBlogs(response.data.allBlogs || []);
          setPublicBlogs(response.data.publicBlog || []);
          setUpdatedData(true);
        }
      } catch (error) {
       
        console.error("Error fetching blogs", error);
      }
    };

    fetchAllBlogs();
  }, [updatedData]);

  const handleDeleteBlogs = async () => {
    try {
      const response = await ApiDeleteRequest(`/delete-blog/${blogDeleteId}`);
      if (response.status === 200) {
        setUpdatedData(false)
        handleCloseBlog();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const BlogsData = activeStep === 0 ? allBlogs : publicBlogs;

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="ml-20 py-8 w-full">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Blog Page</h2>
                <p className="text-gray-500 text-sm">
                  Stay informed with our latest articles and updates.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-[#7240FD] text-white p-2 rounded-[12px] font-medium text-[16px] cursor-pointer">
                  featured  
                </button>
                <button
                  className="bg-[#7240FD] text-white p-2 rounded-[12px] font-medium text-[16px] cursor-pointer"
                  onClick={() => navigate("/createBlogs")}
                >
                  + Create New
                </button>
              </div>
            </div>

            {/* Featured Articles */}
            <div className="bg-white rounded-xl shadow p-6 mt-4 overflow-y-scroll h-180">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 text-lg">★</span>
                  <span className="font-medium text-gray-700 text-lg">
                    Featured Articles
                  </span>
                </div>

                <div className="flex gap-3">
                  {headings.map((heading, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`border-2 px-4 py-1 rounded-md text-sm font-medium transition
                        ${
                          activeStep === index
                            ? "border-blue-500 text-blue-600"
                            : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-500"
                        }`}
                    >
                      {heading}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog List */}
              <div className="mt-6">
                {BlogsData.length > 0 ? (
                  BlogsData.map((blog, idx) => (
                    <div
                      key={blog._id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-b last:border-none"
                    >
                      {/* Left: Thumbnail + Content */}
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        {/* Thumbnail */}
                        <img
                          src={blog.coverBlogImage}
                          alt={blog.title}
                          className="w-28 h-28 object-cover rounded-lg shadow"
                        />

                        {/* Blog Info */}
                        <div className="space-y-1 max-w-lg">
                          <div className="text-lg font-semibold text-blue-500">
                            {blog.title}
                          </div>
                          <h3 className="text-xs text-gray-800 font-semibold uppercase">
                            {blog.category}
                          </h3>
                          <p className="text-md text-gray-600 line-clamp-2">
                            {blog.shortDescription}
                          </p>
                          <div className="text-xs text-gray-400 mt-2">
                            By {blog.blogCreatedBy?.fullName} •{" "}
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex gap-2 self-end sm:self-auto">
                        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
                          <PenLine size={18} />
                        </button>
                        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-purple-600">
                          <Trash2
                            onClick={() => handleShowBlog(blog._id)}
                            size={18}
                          />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <div className="bg-gray-100 p-6 rounded-full mb-4">
                      <FileX2 size={40} className="text-gray-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      No Blogs Found
                    </h2>
                    <p className="text-sm text-gray-500 max-w-sm">
                      There are no {headings[activeStep]} blogs available. Start
                      creating content to engage your audience.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={openModalforBlog}
        onClose={() => setOpenModalForBlog(false)}
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
                        onClick={handleCloseBlog}
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
                  onClick={handleDeleteBlogs}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:mt-0 sm:w-auto"
                  onClick={handleCloseBlog}
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
}
