import React, { useState,useEffect } from "react";
import Post_Home from "./Post_Home";
import { Context } from "../context/ContextProvider";


const InReview = () => {
  const [activeButton, setActiveButton] = useState(0);
  const { setIsLogin, postTypeData, ongoingData, isLogin } =
    React.useContext(Context);
  const [value, setValue] = useState(null);
  


  const buttons = [
    "All Opportunities",
    "Design",
    "Development",
    "Content Related",
    "Bounty"
  ];

  const handleClick = (index) => {
    setActiveButton(index);
  };

  useEffect(() => {
    if (isLogin) {
      if (buttons[activeButton] == "All Opportunities") {
        console.log("value", ongoingData);
        setValue(ongoingData);
      } else {
        console.log(
          "value",
          postTypeData && postTypeData[buttons[activeButton]]?.ongoing
        );

        setValue(postTypeData && postTypeData[buttons[activeButton]]?.ongoing);
      }
    }
  }, [postTypeData, ongoingData, activeButton]);
  return (
    <div className="mb-10">
      <div className="flex gap-11">
        {buttons.map((button, index) => (
          <div
            key={index}
            className={`w-[147px] hover:bg-[#ffe4d1] hover:border-[#ffc9a4] cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 flex justify-center items-center relative rounded-[26px]  h-[1.563rem] overflow-hidden shrink-0 text-left text-[1rem] text-[#717171] font-inter  ${
              activeButton === index
                ? "bg-[#ffe4d1] box-border border-[#ffc9a4] border-[1px] border-solid"
                : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="capitalize">{button}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 w-full pt-9 gap-x-11 gap-y-[18px]">
        {value?.map((item, index) => (
          <div key={index} className="cursor-pointer col-span-6">
            <Post_Home data={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InReview;
