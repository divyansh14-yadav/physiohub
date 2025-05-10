import React from "react";
import webLogo from "../images/webLogo.svg";
import messageIcon from "../images/messageIcon.svg";

const Footer = () => {
  return (
    <div>
      <div className="p-10 w-[90%] m-auto flex justify-evenly mt-10 py-5">
        <div className="w-[40%]">
          <img src={webLogo} alt="" />
          <div className="flex gap-2 items-center mt-15">
            <img src={messageIcon} alt="" />
            <p>mail@example.com</p>
          </div>
        </div>
        <div className="w-[60%] flex  justify-between">
          <div> 
            <h3 className="font-bold">Features</h3>
            <p className="mt-2">Quiz</p>
            <p className="mt-2">Flash Card</p>
            <p className="mt-2">Mock Test</p>
          </div>

          <div>
            <h3 className="font-bold">Articles</h3>
            <p className="mt-2">Our Blogs</p>
            <p className="mt-2">Rehab Protocols</p>
          </div>

          <div>
            <h3 className="font-bold">Resource</h3>
            <p className="mt-2">About Us</p>
            <p className="mt-2">Contact</p>
          </div>

          <div>
            <h3 className="font-bold">Extra</h3>
            <p className="mt-2">Customer Support</p>
            <p className="mt-2">Privacy Policy</p>
            <p className="mt-2">Terms & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
