import React from "react";

const Testinomial = () => {
  const data = [
    {
      imageLogo:
        "	https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      description:
        "“This app transformed our support operations. Response time reduced, leading to a rise in customer satisfaction.”",
      ProfileImage: "",
      userName: "Frederic Hill",
      userDesigNation: "Data Engineer at Tailwind",
    },
    {
      imageLogo:
        "	https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      description:
        "“We experienced a significant reduction in support tickets thanks to the intuitive AI features. Support was prompt to assist us.”",
      ProfileImage: "",
      userName: "Safaa Sampson",
      userDesigNation: "Front-end at Hubspot",
    },
    {
      imageLogo:
        "	https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description:
        "“This software integrated seamlessly with our existing tools. It helped us manage a huge increase in customer inquiries.”",
      ProfileImage: "",
      userName: "Brendan Buck",
      userDesigNation: "CEO at Google",
    },
  ];
  return (
    <div>
      <div>
        <div className="text-center mt-10 py-15 pb-10">
          <p className="text-purple-600 font-bold">Testimonials</p>
          <h1 className="text-gray-900 font-bold text-4xl mt-2 w-[40%] m-auto leading-13">
            Hear from Our Happy Users
          </h1>
          <p className="text-[#4a5565] max-w-md mt-4 m-auto">
            Physiohub is a learning platform designed to help budding
            physiotherapists perfect their craft and become industry experts
          </p>
        </div>
        <div className="w-[80%] grid grid-cols-3 m-auto gap-8">
          {data?.map((datas, index) => (
            <div key={index}>
              <div className="bg-gray-50 p-6 h-[300px] rounded-xl">
                <img className="w-[10%]" src={datas.imageLogo} alt="" />
                <p className="text-gray-700 mt-10">{datas.description}</p>
                <div className="mt-10 flex items-center justify-center gap-3">
                  <img src={datas.ProfileImage}/>
                  <div>
                    <p className="font-semibold">{datas.userName}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {datas.userDesigNation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
