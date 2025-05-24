import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { ApiFetchRequest } from "../../../axios/commonRequest";
import { FileX2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [publicBlogs, setPublicBlogs] = useState([]);

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
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      {/* Main Row: Sidebar + Main Content + Right Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 flex justify-center py-8">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">Blog Page</h2>
                <p className="text-gray-500 text-sm">
                  Stay informed with our latest articles and updates.
                </p>
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
                <span className="font-medium text-gray-700">
                  Featured Articles
                </span>
              </div>
              <div className="mt-6">
                {publicBlogs.length > 0 ? (
                  publicBlogs.map((blog, idx) => (
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
                        <Link to={`/BlogDetails/${blog.category}`}>
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
      </div>
    </div>
  );
};

export default BlogPage;
