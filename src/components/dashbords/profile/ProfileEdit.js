import React, { useState } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import Sidebar from "../sidebar";

const ProfileEdit = () => {
  const [profilePic, setProfilePic] = useState(
    "https://randomuser.me/api/portraits/men/32.jpg"
  );
  const [cover, setCover] = useState(null);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [reminders, setReminders] = useState(true);

  return (
    <div className="flex gap-20 min-h-screen bg-[#f6f8fb]">
      {/* Sidebar */}
        <Sidebar  />
      <div className="mt-5 w-[60%]">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="text-gray-500">&larr;</span> Edit Profile
        </h2>
        {/* Personal Info */}
        <div className="bg-white rounded-xl shadow p-8 mb-6">
          <div className="flex items-center gap-8 mb-8">
            {/* Left: Text */}
            <div className="min-w-[220px]">
              <div className="text-xl font-semibold">Profile Picture</div>
              <div className="text-gray-400 text-base mt-1">
                This will shown on your profile
              </div>
            </div>
            {/* Center: Profile Image */}
            <img
              src={profilePic}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            {/* Right: Buttons */}
            <div className="flex gap-4">
              <label className="flex items-center gap-2 px-6 py-2 border-2 border-purple-400 text-purple-600 rounded-lg cursor-pointer font-medium transition hover:bg-purple-50">
                <FaUpload /> Upload
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setProfilePic(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
              </label>
              {/* <button
                className="flex items-center gap-2 px-6 py-2 border-2 border-gray-200 text-gray-600 rounded-lg font-medium transition hover:bg-gray-100"
                onClick={() => setProfilePic("")}
              >
                <FaTrash /> Remove
              </button> */}
            </div>
          </div>
          {/* Cover */}
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-1">Cover</div>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-32 cursor-pointer bg-gray-50">
              <span className="text-gray-400 mb-2">
                Drag or drop image here
              </span>
              <span className="text-xs text-gray-400">
                Image should be horizontal, at least 1500 × 500 px
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setCover(URL.createObjectURL(e.target.files[0]));
                  }
                }}
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
          {/* Form */}
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm text-gray-600 mb-1">
                First name
              </label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your first name here"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm text-gray-600 mb-1">
                Last name
              </label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your last name here"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm text-gray-600 mb-1">
                Username
              </label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your username here"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your valid email here"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm text-gray-600 mb-1">
                Birthday
              </label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your birthday"
              />
            </div>
          </form>
          <div className="flex gap-2 justify-end mt-6">
            <button className="px-6 py-2 rounded bg-gray-100 text-gray-700 font-medium">
              Cancel
            </button>
            <button className="px-6 py-2 rounded bg-purple-600 text-white font-semibold">
              Save
            </button>
          </div>
        </div>
        {/* Email Notifications */}
        <div className="bg-white rounded-xl shadow p-8 mb-6">
          <h3 className="font-semibold text-lg mb-4">Email Notifications</h3>
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
          <h3 className="font-semibold text-lg mb-4">Account</h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-medium">Reset Password</div>
              <div className="text-gray-400 text-sm">
                Need to update your password? Click the button on the right to
                reset it easily.
              </div>
            </div>
            <button className="px-4 py-2 rounded border border-gray-300 font-medium">
              Reset password
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Delete account</div>
              <div className="text-gray-400 text-sm">
                We will archive your accounts for 30 days before permanently
                deleting it, and all information associated with your account.
              </div>
            </div>
            <button className="px-4 py-2 rounded border border-red-400 text-red-500 font-medium bg-red-50">
              Delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
