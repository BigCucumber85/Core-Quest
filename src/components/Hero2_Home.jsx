import React, { useState } from "react";
import OpenCampaigns from "./OpenCampaigns";
import InReview from "./InReview";
import ClosedCampaigns from "./ClosedCampaigns";

const Hero2_Home = () => {
  const [activeButton, setActiveButton] = useState(1);

  const buttons = ["freelancing gigs", "Open", "In Review", "Closed"];

  const handleClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div className="grid grid-cols-12 w-full">
      {/* 1st column */}
      <div className=" col-span-9 w-full  border-r-[2px] border-solid border-orangered">
        <div className="flex w-full pt-6 pl-5 items-center justify-start">
          {buttons.map((button, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="relative cursor-pointer px-8 max-w-max flex flex-col group items-center justify-center"
            >
              <div className="w-max relative text-[1rem] capitalize font-inter text-black text-left inline-block">
                {button}
              </div>
              <div
                className={`flex items-center justify-center top-[36px] relative transition-all duration-200 ease-linear ${
                  activeButton === index
                    ? "h-[5px] w-max min-w-20 bg-orangered"
                    : "h-0 w-0"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="w-[1018px] ml-[22px] top-[33px] relative box-border h-[0.125rem] border-t-[2px] border-solid border-orangered" />
        {/* cards */}
        <div
          key={1}
          className={`flex pl-[55px] pt-[64px] ${
            activeButton == 1 ? "" : "hidden"
          }`}
        >
          <OpenCampaigns />
        </div>
        {/* cards */}
        <div
          key={2}
          className={`flex pl-[55px] pt-[64px] ${
            activeButton == 2 ? "" : "hidden"
          }`}
        >
          <InReview />
        </div>

        {/* cards */}
        <div
          key={3}
          className={`flex pl-[55px] pt-[64px] ${
            activeButton == 3 ? "" : "hidden"
          }`}
        >
          <ClosedCampaigns />
        </div>
      </div>
      {/* 2nd columns */}
      <div className=" col-span-3 pb-6">
        <div className="flex flex-col items-center justify-start">
          <div className="w-full pt-5 pb-8 pl-3 relative text-[1.125rem] capitalize font-medium font-inter text-black text-left inline-block">{`Ongoing Hackathons & Events`}</div>
          {/* 2nd column post 1 */}
          <div className="w-[96%] pb-2 relative bg-[#ffe6d5] box-border h-max overflow-hidden text-left text-[0.875rem] text-black font-inter border-[1px] border-solid border-orangered">
            <img
              className="w-[100%] mx-auto p-[5px] object-cover "
              src="https://i.imgur.com/NIwgxOp.png"
              alt=""
            />
            <div className="w-max pt-[6px] pl-3 pb-1 relative text-[0.875rem] capitalize font-medium font-inter text-[#8e8e8e] text-left inline-block">
              PRIZE POOL
            </div>

            <div className="flex justify-between items-center pl-3">
              <div className="flex items-center justify-center gap-2">
                <div className="w-[9.188rem] relative text-[1.75rem] capitalize font-medium font-inter text-black text-left inline-block">
                  $ 2,50,000
                </div>
                <div className="w-[1.875rem] relative text-[0.875rem] capitalize font-semibold font-inter text-black text-left inline-block">
                  USD
                </div>
              </div>
              <div className="flex items-center pr-2 justify-center gap-1">
                <img
                  className=" w-[22px] object-cover"
                  src="https://i.imgur.com/rjXGg1z.png"
                  alt=""
                />
                <div className="w-[4.063rem] relative text-[0.875rem] capitalize font-inter text-black text-left inline-block">
                  Core DAO
                </div>
              </div>
            </div>
          </div>

          {/* 2nd column post 1 */}
          <div className="w-[96%] mt-6 pb-2 relative bg-[#ffe6d5] box-border h-max overflow-hidden text-left text-[0.875rem] text-black font-inter border-[1px] border-solid border-orangered">
            <img
              className="w-[100%] mx-auto p-[5px] object-cover "
              src="https://i.imgur.com/7d65NMs.png"
              alt=""
            />
            <div className="w-max pt-[6px] pl-3 pb-1 relative text-[0.875rem] capitalize font-medium font-inter text-[#8e8e8e] text-left inline-block">
              PRIZE POOL
            </div>

            <div className="flex justify-between items-center pl-3">
              <div className="flex items-center justify-center gap-2">
                <div className="w-[9.188rem] relative text-[1.75rem] capitalize font-medium font-inter text-black text-left inline-block">
                  $ 80,000
                </div>
                <div className="w-[1.875rem] relative text-[0.875rem] capitalize font-semibold font-inter text-black text-left inline-block">
                  USD
                </div>
              </div>
              {/* <div className="flex items-center pr-2 justify-center gap-1">
                <img
                  className=" w-[22px] object-cover"
                  src="https://i.imgur.com/rjXGg1z.png"
                  alt=""
                />
                <div className="w-[4.063rem] relative text-[0.875rem] capitalize font-inter text-black text-left inline-block">
                  Core DAO
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2_Home;
