import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiPostRequest } from "../../axios/commonRequest";

const OtpScreen = () => {
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(180);

  const navigate = useNavigate();
  const location = useLocation();
  const { email, purpose, forgerPurpose, registerPurpose } =
    location.state || {};

  console.log(purpose, "pruposeotp");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otpArray];
    updatedOtp[index] = value;
    setOtpArray(updatedOtp);

    const joinedOtp = updatedOtp.join(""); // string for API
    setOtp(joinedOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiPostRequest("/user/verify-otp", {
        otp: otp,
        email,
        purpose: purpose || forgerPurpose || registerPurpose,
      });
      console.log(response, "register response");
      if (response.status === 200) {
        if (response.data.isEmail_verification === true) {
          navigate("/login");
        } else if (response.data.isForget === true) {
          navigate("/newPassword");
        }
        setOtp("");
        setOtpArray(["", "", "", "", "", ""]);
      }
    } catch (error) {
      console.log(error);
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
          Maximize your physiotherapy skills with our expert-led courses and
          tailored resources.
        </p>

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

        <div className="bg-white p-4 rounded-xl mt-10 shadow-md w-60 text-center">
          <div className="flex items-end gap-2 h-20 justify-center">
            {[10, 14, 8, 16, 12].map((height, i) => (
              <div
                key={i}
                style={{
                  height: `${height * 4}px`,
                  animationDelay: `${i * 0.5}s`,
                }}
                className="w-2 bg-purple-500 rounded-md animate-bounce"
              ></div>
            ))}
          </div>
          <p className="mt-3 font-medium text-purple-700">
            Performance Overview
          </p>
        </div>
      </div>

      {/* Right Section - OTP Panel */}
      <div className="w-[60%] bg-white p-10 flex flex-col justify-center items-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Verify OTP</h2>
        <p className="text-gray-500 text-center max-w-md">
          Enter the OTP sent to your registered number/email
        </p>

        <input
          type="text"
          name="email"
          value={email}
          readOnly
          className="w-100 h-12 text-xl text-center border-2 border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="flex justify-between gap-2 px-4 w-full max-w-xs">
          {otpArray.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-xl text-center border-2 border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </div>

        <p className="text-sm text-gray-600">
          Time left:{" "}
          <span className="text-purple-600 font-medium">{formatTime()}s</span>
        </p>

        <button
          onClick={handleSubmit}
          className="w-full max-w-xs bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpScreen;
