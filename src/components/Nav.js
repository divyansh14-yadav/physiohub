import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import webLogo from "../images/webLogo.svg";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isllogedIn,setIsloggedIn] = useState(false)
  const [role,setRole] = useState("")
  console.log(role, "role");

  useEffect(() => {
    const roles = localStorage.getItem("role");
    if(roles){
      setRole(roles)
      setIsloggedIn(true)
    }
  },[isllogedIn]);

  return (
    <div>
      <div className="flex justify-evenly items-center h-20">
        <div className="w-[20%]">
          <img src={webLogo} alt="navlogo" className="w-[60%]" />
        </div>
        <div className="flex items-center gap-7 w-[25%] text-[#364153] font-semibold ">
          <NavLink to={"/features"}>Features</NavLink>
          <NavLink to={"/articles"}>Articles</NavLink>
          <NavLink to={"/aboutUs"}>About Us</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          {/* <NavLink className="hover:text-[#9810fa]" to="/register">Register</NavLink>
          <NavLink className="hover:text-[#9810fa]" to="login">Login</NavLink> */}
        </div>
        {/* <div className="flex gap-7 items-center text-[#9810fa] w-[15%]">
          <NavLink
            className="hover:bg-purple-100 border-1 border-[#9810fa] p-1.5 rounded-md w-[100px] text-center"
            to={role ? "/dashboard" : "/login"}
          >
            {role ? "Student" : "login"}
          </NavLink>
          <NavLink
            className="hover:bg-purple-100 border-1 border-[#9810fa] p-1.5 rounded-md w-[100px] text-center"
            to={role ? "/dashboard" : "/register"}
          >
            {role ? "Teacher" : "Register"}
          </NavLink>
          <FontAwesomeIcon size="2x" icon={faUser} />
        </div> */}

        {role === "Student" ? (
          <NavLink
            className="hover:bg-purple-100 border-1 text-[#9810fa] border-[#9810fa] p-1.5 rounded-md w-[100px] text-center"
            to={"/dashboard"}
          >
            {"Student"}
          </NavLink>
        ) : (
          <div className="flex gap-7 items-center text-[#9810fa] w-[15%]">
            <NavLink
              className="hover:bg-purple-100 border-1 border-[#9810fa] p-1.5 rounded-md w-[100px] text-center"
              to={"/login"}
            >
              {"login"}
            </NavLink>
            <NavLink
              className="hover:bg-purple-100 border-1 border-[#9810fa] p-1.5 rounded-md w-[100px] text-center"
              to={"/register"}
            >
              {"Register"}
            </NavLink>

            <FontAwesomeIcon size="2x" icon={faUser} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
