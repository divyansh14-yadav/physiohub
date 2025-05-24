import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiPostRequest } from "../axios/commonRequest";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAttendance = async () => {
    try {
      const response = await ApiPostRequest("/user/attendance");
    } catch (error) {
      console.error("attendance error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiPostRequest("/user/login", formData);
      console.log(response, "login response");

      if (response?.status === 200) {
        const { token, role,authId } = response.data;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("role", JSON.stringify(role));
        localStorage.setItem("id", JSON.stringify(authId));
        setFormData({ email: "", password: "" });
        navigate("/");
      }
      handleAttendance();
    } catch (error) {
      const message = error?.response?.data?.message || "";
      if (message.includes("verify")) {
        navigate("/verifyEmail", {
          state: { purpose: "emailVerification", email: formData.email },
        });
        return;
      }
      console.error("Login error:", error);
    }
  };

  const handleForgotPassword = () => {
    navigate("/verifyEmail", {
      state: { purpose: "passwordReset", email: formData.email },
    });
  };

  return (
    <div className="flex justify-between min-h-screen font-sans w-full bg-gray-50">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-10 w-[40%] relative rounded-r-3xl">
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Master Your Physiotherapy Skills Now!
        </h1>
        <p className="text-lg mb-10">
          Maximize your physiotherapy skills with our expert-led courses and
          tailored resources.
        </p>

        {/* Cards */}
        <div className="flex gap-6">
          <div className="bg-white text-black p-4 rounded-xl shadow-lg w-48">
            <p className="text-sm font-semibold">Over time</p>
            <p className="text-2xl font-bold">$40K</p>
            <p className="text-xs text-gray-500">Last 7 days</p>
            <img
              className="rounded-md mt-2"
              src="https://via.placeholder.com/100x60"
              alt="shoulder"
            />
          </div>

          <div className="bg-white p-4 rounded-xl shadow-lg w-40 text-center ml-4">
            <p className="text-black font-medium mb-2">Quiz Score</p>
            <div className="w-20 h-20 mx-auto relative">
              <div className="w-full h-full border-[6px] border-green-400 border-t-transparent rounded-full rotate-[250deg]"></div>
              <div className="absolute inset-0 flex items-center justify-center text-black text-sm font-bold">
                70%
              </div>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white p-4 rounded-xl mt-10 shadow-md w-60 text-center">
          <div className="flex items-end gap-2 h-20 justify-center">
            <div className="w-2 h-10 bg-purple-400 rounded-md animate-bounce-tube [animation-delay:0.1s]" />
            <div className="w-2 h-14 bg-purple-500 rounded-md animate-bounce-tube [animation-delay:0.3s]" />
            <div className="w-2 h-8 bg-purple-400 rounded-md animate-bounce-tube [animation-delay:0.5s]" />
            <div className="w-2 h-16 bg-purple-600 rounded-md animate-bounce-tube [animation-delay:0.7s]" />
            <div className="w-2 h-12 bg-purple-500 rounded-md animate-bounce-tube [animation-delay:0.9s]" />
          </div>
          <p className="mt-3 font-medium text-purple-700">
            Performance Overview
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[60%] bg-white p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Login to Your Account
        </h2>
        <p className="text-gray-500 mb-6">
          Access your personalized dashboard by logging in below.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <div className="text-right mt-1">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-200"
          >
            Login
          </button>

          <div className="text-center text-gray-400 mt-4 mb-2">or</div>

          {/* Google Login */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 w-full transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
