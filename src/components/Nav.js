import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import webLogo from "../images/webLogo.svg";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [token, setToken] = useState("");
  const [userRole, setUserRole] = useState("");
  console.log(userRole,"role");
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to check authentication status
useEffect(()=>{
  const storedToken = localStorage.getItem("token");
  const storedRole = JSON.parse(localStorage.getItem("role"))
  
  if (storedToken) {
    setToken(storedToken);
    setUserRole(storedRole || "");
  } else {
    setToken("");
    setUserRole("");
  }
},[])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken("");
    setUserRole("");
  };

  return (
    <div className="w-full shadow-sm bg-white">
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        {/* Logo */}
        <div className="w-[150px]">
          <NavLink to="/">
            <img src={webLogo} alt="Logo" className="w-full" />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#364153]"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Navigation Links - Desktop */}
        {
          token ? null :
        <div className="hidden md:flex items-center gap-6 text-[#364153] font-semibold">
          <NavLink to="/features" className="hover:text-[#9810fa]">Features</NavLink>
          <NavLink to="/articles" className="hover:text-[#9810fa]">Articles</NavLink>
          <NavLink to="/aboutUs" className="hover:text-[#9810fa]">About Us</NavLink>
          <NavLink to="/contact" className="hover:text-[#9810fa]">Contact</NavLink>
        </div>
        }

        {/* Auth Section - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {token ? (
            <>
              {userRole === "Teacher" && (
                <NavLink
                  to="/TeacherBlogs"
                  className="hover:bg-purple-100 text-[#9810fa] border border-[#9810fa] px-4 py-1.5 rounded-md text-center"
                >
                  Teacher
                </NavLink>
              )}
              {userRole === "Student" && (
                <NavLink
                  to="/dashboard"
                  className="hover:bg-purple-100 text-[#9810fa] border border-[#9810fa] px-4 py-1.5 rounded-md text-center"
                >
                  Student
                </NavLink>
              )}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                />
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4 text-[#9810fa]">
              <NavLink
                to="/login"
                className="hover:bg-purple-100 border border-[#9810fa] px-4 py-1.5 rounded-md text-center"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="hover:bg-purple-100 border border-[#9810fa] px-4 py-1.5 rounded-md text-center"
              >
                Register
              </NavLink>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <NavLink to="/features" className="hover:text-[#9810fa] text-[#364153] font-semibold">Features</NavLink>
            <NavLink to="/articles" className="hover:text-[#9810fa] text-[#364153] font-semibold">Articles</NavLink>
            <NavLink to="/aboutUs" className="hover:text-[#9810fa] text-[#364153] font-semibold">About Us</NavLink>
            <NavLink to="/contact" className="hover:text-[#9810fa] text-[#364153] font-semibold">Contact</NavLink>
            
            {token ? (
              <>
                {userRole === "Teacher" && (
                  <NavLink
                    to="/dashboard"
                    className="hover:bg-purple-100 text-[#9810fa] border border-[#9810fa] px-4 py-1.5 rounded-md text-center"
                  >
                    Teacher Dashboard
                  </NavLink>
                )}
                {userRole === "Student" && (
                  <NavLink
                    to="/dashboard"
                    className="hover:bg-purple-100 text-[#9810fa] border border-[#9810fa] px-4 py-1.5 rounded-md text-center"
                  >
                    Student Dashboard
                  </NavLink>
                )}
                <button
                  onClick={handleLogout}
                  className="text-[#9810fa] hover:bg-purple-100 px-4 py-1.5 rounded-md text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/login"
                  className="hover:bg-purple-100 border border-[#9810fa] px-4 py-1.5 rounded-md text-center text-[#9810fa]"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="hover:bg-purple-100 border border-[#9810fa] px-4 py-1.5 rounded-md text-center text-[#9810fa]"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav; 