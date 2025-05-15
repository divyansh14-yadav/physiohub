import React, { useEffect, useState } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import Sidebar from "../sidebar";
import {
  ApiFetchRequest,
  ApiPostRequest,
  ApiPutRequest,
} from "../../../axios/commonRequest";
import { NavLink } from "react-router-dom";

const ProfileEdit = () => {
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [reminders, setReminders] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    birthDay: "",
    mobileNumber:"",
    profileImage: null,
    previewImage: "",
    address: {
      city: "",
      state: "",
      profilePic: "",
      country: "",
    },
    interest: {
      goal: "",
      preferences: "",
      level: "",
      area_of_interest:[]
    },
  });

  console.log(formData, "formdata 1458");

  const [isLoading, setIsLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails, "userdetails");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = new FormData();

      payload.append("fullName", formData.fullName);
      payload.append("username", formData.username);
      payload.append("email", formData.email);
      payload.append("birthDay", formData.birthDay);

      // Append address fields
      payload.append("address.city", formData.address.city);
      payload.append("address.state", formData.address.state);
      payload.append("address.country", formData.address.country);

      // Append interest fields
      payload.append("interest.goal", formData.interest.goal);
      payload.append("interest.preferences", formData.interest.preferences);
      payload.append("interest.level", formData.interest.level);
      payload.append("interest.area_of_interest", formData.interest.area_of_interest);


      // Append profilePic only if it's a File
      if (formData.profileImage) {
        payload.append("profileImage", formData.profileImage);
      }

      const response = await ApiPutRequest(
        "/user/update-user-details",
        payload
      );

      console.log(response, "Profile Updated");

      // Reset FormData after submission
      setFormData({
        fullName: "",
        username: "",
        email: "",
        birthDay: "",
    mobileNumber:"",

        address: {
          city: "",
          state: "",
          country: "",
        },
        interest: {
          goal: "",
          preferences: "",
          level: "",
          area_of_interest:""
        },
        profileImage: null,
        previewImage: "",
      });
    } catch (error) {
      console.error("Profile update error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await ApiFetchRequest("/user/found-auth-details");

        if (response.status === 200) {
          setUserDetails(response.data.authDetails);
          setFormData({
            fullName: response.data.authDetails.fullName,
            email: response.data.authDetails.email,
            birthDay: response.data.authDetails.birthDay,
            profileImage: null,
            previewImage: response.data.authDetails.profileImage || "",
            address: {
              city: response.data.authDetails.address.city,
              state: response.data.authDetails.address.state,
              country: response.data.authDetails.address.country,
            },
            interest: {
              goal: response.data.authDetails.interest.goal,
              preferences: response.data.authDetails.interest.preferences,
              level: response.data.authDetails.interest.level,
              // area_of_interest:response.data.authDetails.area_of_interest
            },
          });
        } else {
          console.log("Error fetching userDetails");
        }
      } catch (error) {
        console.error("Error fetching userDetails", error);
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <div className="flex gap-20 min-h-screen bg-[#f6f8fb]">
      {/* Sidebar */}
      <Sidebar />
      <div className="mt-5 max-w-6xl overflow-y-scroll h-200">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="text-gray-500">&larr;</span> Back
        </h2>
        {/* Personal Info */}
        <div className="bg-white rounded-xl shadow p-8 mb-6 ">
          <h2 className="text-2xl font-bold">Edit Profile</h2>

          <div className="mt-10 mb-8 ml-90">
            {/* Left: Text */}
            <img
              src={formData.previewImage}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border"
            />
            {/* Right: Buttons */}
            <div className="flex gap-4 mt-7 ml-2">
              <label className="flex items-center gap-2 px-6 py-2 border-2 border-purple-400 text-purple-600 rounded-lg cursor-pointer font-medium hover:bg-purple-50">
                <FaUpload /> Select Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFormData((prev) => ({
                        ...prev,
                        profileImage: file,
                        previewImage: URL.createObjectURL(file),
                      }));
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* Form */}
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Username
              </label>
              <input
                name="username"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your username here"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-neutral-300"
                placeholder="Enter your valid email here"
                readOnly
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Birthday
              </label>
              <input
                type="date"
                name="birthday"
                value={formData.birthDay}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your birthday"
              />
            </div>
            {/* Address Fields */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                City
              </label>
              <input
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your city"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                State
              </label>
              <input
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your state"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Country
              </label>
              <input
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your country"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Goal
              </label>
              <input
                name="interest.goal"
                value={formData.interest.goal}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your goal"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Preferences
              </label>
              <input
                name="interest.preferences"
                value={formData.interest.preferences}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your preferences"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
               Skill level
              </label>
              <input
                name="interest.level"
                value={formData.interest.level}
                // onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-neutral-300"
                placeholder="Enter your level"
                readOnly
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Area of interest
              </label>
              <input
                name="interest.level"
                // value={formData.interest.level}
                // onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your level"
              />
            </div>
          </form>
          <div className="flex gap-2 justify-end mt-6">
            <button
              type="button"
              className="px-6 py-2 rounded bg-gray-100 text-gray-700 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 lg:px-6 py-2 rounded bg-purple-600 cursor-pointer text-white font-semibold text-sm lg:text-base flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
        {/* Email Notifications */}
        <div className="bg-white rounded-xl shadow p-8 mb-6">
          <h3 className="font-semibold text-xl mb-4">Email Notifications</h3>
          {/* Marketing Emails */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-medium">Marketing Emails</div>
              <div className="text-gray-400 text-sm">
                Notifications about product updates, company notes, etc.
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={marketingEmails}
                onChange={() => setMarketingEmails(!marketingEmails)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#9400ff] transition-colors"></div>
              <div
                className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  marketingEmails ? "translate-x-5" : ""
                }`}
              ></div>
            </label>
          </div>
          {/* Reminders / General */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Reminders / General</div>
              <div className="text-gray-400 text-sm">
                Reminders to encourage you to keep studying
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={reminders}
                onChange={() => setReminders(!reminders)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#9400ff] transition-colors"></div>
              <div
                className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                  reminders ? "translate-x-5" : ""
                }`}
              ></div>
            </label>
          </div>
        </div>
        {/* Account */}
        <div className="bg-white rounded-xl shadow p-8 mb-6">
          <h3 className="font-semibold text-xl mb-4">Account</h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-medium">Reset Password</div>
              <div className="text-gray-400 text-sm">
                Need to update your password? Click the button on the right to
                reset it easily.
              </div>
            </div>
            <NavLink
              to={"/verifyEmail"}
              className="w-[18.5%] p-2 text-center bg-purple-600 text-white rounded border border-gray-300 font-medium"
            >
              Reset password
            </NavLink>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Delete account</div>
              <div className="text-gray-400 text-sm">
                We will archive your accounts for 30 days before permanently
                deleting it, and all information associated with your account.
              </div>
            </div>
            <button className="w-[18.5%] p-2 rounded border border-red-400 text-red-500 font-medium bg-red-50">
              Delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
