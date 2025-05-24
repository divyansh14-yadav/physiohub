import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiFetchRequest } from "../../../../axios/commonRequest";
import { FileX2 } from "lucide-react";

const BlogDetails = () => {
  const { category } = useParams();

  const [detailedBlog, setDetailedBlog] = useState([]);
  const [publicBlogs, setPublicBlogs] = useState([]);

  console.log(detailedBlog, "detailedBlog");
  console.log(category, "catgory");

  useEffect(() => {
    const fetchDetaiedBlog = async () => {
      try {
        const response = await ApiFetchRequest(
          `/found-blog-category/${category}`
        );
        console.log(response.data, "API Response");

        if (response.status === 200) {
          setDetailedBlog(response.data.feature_blog_detaild || []);
        }
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };
    fetchDetaiedBlog();
  }, [category]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await ApiFetchRequest("/found-all-blogs");
        console.log(response.data, "API Response");

        if (response.status === 200) {
          setPublicBlogs(response.data.publicBlog || []);
        }
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };

    fetchAllBlogs();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="relative py-20 text-center text-white overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to right top, #6a3093, #a044ff)",
        }}
      >
        {/* Add some background shapes/stars if desired, similar to the image */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${detailedBlog[0]?.coverBlogImage})`,
            opacity: 0.1,
          }}
        ></div>{" "}
        {/* Placeholder for a subtle pattern */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg mb-8">{detailedBlog[0]?.shortDescription}</p>
        </div>
      </div>

      {/* Latest Blog Section */}
      <div className="w-full px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">Latest Blog</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Blog Post Card (Large) */}
          <div
            className="relative w-full h-96 bg-gray-300 flex items-end p-6"
            style={{
              backgroundImage: `url(${detailedBlog[0]?.coverBlogImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 text-white">
              <span className="text-sm font-semibold bg-blue-500 px-2 py-1 rounded">
                {detailedBlog[0]?.category}
              </span>
              <h3 className="text-3xl font-bold mt-2 mb-2">
                {detailedBlog[0]?.shortDescription}
              </h3>
              <div className="flex gap-3 text-[15px] font-medium items-center">
                <p className="text-sm">
                  {detailedBlog[0]?.blogCreatedBy?.fullName}
                </p>
                <p className="text-[15px] font-medium">
                  {new Date(detailedBlog[0]?.createdAt).toLocaleDateString(
                    "en-IN",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          </div>
        </div>
      </div>

      {/* Other Blog Posts Section */}
      <div className="w-full px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Smaller Blog Post Card (Repeat this block for multiple posts) */}
          {detailedBlog.map((blogs, index) => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div
                className="relative w-full h-48 bg-gray-300"
                style={{
                  backgroundImage: `url(${blogs?.coverBlogImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-4">
                <span className="text-sm font-semibold text-blue-600">
                  {blogs?.category}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-1">
                  {blogs?.title}
                </h3>
                <div className="flex gap-3 text-[15px] font-medium items-center">
                  <p className="text-sm">{blogs?.blogCreatedBy?.fullName}</p>
                  <p className="text-[15px] font-medium">
                    {new Date(blogs?.createdAt).toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-15">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Top Reads</h2>
            <button className="bg-[#F6F9FC] border p-2 rounded-md border-neutral-200">
              Featured
            </button>
          </div>
            <div className="mt-6">
              {publicBlogs.length > 0 ? (
                publicBlogs.map((blog, idx) => (
                  <div
                    key={blog._id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-b border-neutral-200 last:border-none"
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
                      <Link to={`/BlogSingle/${blog._id}`}>
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
                      </Link>

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
                    There are no blogs available. Start creating content to
                    engage your audience.
                  </p>
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
