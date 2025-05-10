import React from "react";
import dash from "../images/dash.png";
const OnDashbord = () => {
  return (
    <div>
      <div className="bg-[#F6F9FC]">
        <div className="text-center mt-10 py-15">
          <p className="text-purple-600 font-bold">YOUR OWN DASHBOARD</p>
          <h1 className="text-gray-900 font-bold text-4xl mt-2 w-[30%] m-auto leading-13">
            The Tools You Really Need
          </h1>
          <p className="text-[#4a5565] max-w-md mt-4 m-auto">
            Physiohub is a learning platform designed to help budding
            physiotherapists perfect their craft and become industry experts.
          </p>
        </div>
        <div className="w-[80%] m-auto pb-10">
          <img className="w-full" src={dash} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnDashbord;
