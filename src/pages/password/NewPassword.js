import React, { useState } from 'react'
import { ApiPostRequest } from '../../axios/commonRequest';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiPostRequest("/user/reset-password", formData);
      console.log(response, "passwordreset response");

      if (response?.status === 200) {
        navigate("/login");
        setFormData("");
      }
    } catch (error) {
      // if (
      //   error?.response?.data?.message === "Please verify your email address."
      // ) {
      //   navigate("/verifyEmail", { state: { purpose: "emailVerification" } });
      // }
      console.log(error, "1234");

    }
  };

    return (
        <div className="flex justify-between min-h-screen font-sans w-full bg-gray-50">
          {/* Left Section */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-10 w-[40%] relative rounded-r-3xl">
            <h1 className="text-3xl font-bold mb-4 leading-tight">
              Master Your Physiotherapy Skills Now!
            </h1>
            <p className="text-lg mb-10">
              Maximize your physiotherapy skills with our expert-led courses and tailored resources.
            </p>
      
            {/* Cards Section */}
            <div className="flex gap-6">
              {/* Earnings Card */}
              <div className="bg-white text-black p-4 rounded-xl shadow-lg w-48">
                <p className="text-sm font-semibold">Over time</p>
                <p className="text-2xl font-bold">$40K</p>
                <p className="text-xs text-gray-500">Last 7 days</p>
                <img className="rounded-md mt-2" src="https://via.placeholder.com/100x60" alt="shoulder" />
              </div>
      
              {/* Quiz Score */}
              <div className="bg-white p-4 rounded-xl shadow-lg w-40 relative text-center ml-4">
                <p className="text-black font-medium mb-2">Quiz Score</p>
                <div className="w-20 h-20 mx-auto relative">
                  <div className="w-full h-full border-[6px] border-green-400 border-t-transparent rounded-full rotate-[250deg]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-black text-sm font-bold">
                    70%
                  </div>
                </div>
              </div>
            </div>
      
            {/* Performance Tubes */}
            <div className="bg-white p-4 rounded-xl mt-10 shadow-md w-60 text-center">
              <div className="flex items-end gap-2 h-20 justify-center">
                <div className="w-2 h-10 bg-purple-400 rounded-md animate-bounce-tube [animation-delay:0.1s]"></div>
                <div className="w-2 h-14 bg-purple-500 rounded-md animate-bounce-tube [animation-delay:0.3s]"></div>
                <div className="w-2 h-8 bg-purple-400 rounded-md animate-bounce-tube [animation-delay:0.5s]"></div>
                <div className="w-2 h-16 bg-purple-600 rounded-md animate-bounce-tube [animation-delay:0.7s]"></div>
                <div className="w-2 h-12 bg-purple-500 rounded-md animate-bounce-tube [animation-delay:0.9s]"></div>
              </div>
              <p className="mt-3 font-medium text-purple-700">Performance Overview</p>
            </div>
          </div>
      
          {/* Right Section */}
          <div className="w-[60%] bg-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create New Password</h2>
      
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name='email'
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
      
              {/* Password Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name='newPassword'
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
      
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-200"
              >
                Create Password
              </button>
      
            </form>
          </div>
        </div>
      );
}

export default NewPassword