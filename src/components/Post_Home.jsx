import React from "react";

const Post_Home = () => {
  return (
    <div className="w-full gap-6 flex items-center justify-start relative box-border h-[7.75rem] overflow-hidden shrink-0 text-left text-[0.875rem] text-gray-100 font-inter border-[1px] border-solid border-[#ffbc8f] p-[9px]">
      <div className=" w-[109px] h-[106px]">
        <img
          className=" object-cover"
          src="https://i.imgur.com/oim9Tzo.png"
          alt=""
        />
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center justify-start gap-[22px]">
          <div className="w-[10.063rem] relative text-[1.25rem] capitalize font-medium font-inter text-black text-left inline-block">{`A twitter thread `}</div>

          <div className="w-[109px] flex items-center justify-evenly relative rounded-[53px] box-border h-[1.625rem] overflow-hidden text-left text-[0.875rem] text-[#7D7D7D] font-inter border-[0.8px] border-solid border-[#ffbc8f]">
            <img
              className=" w-[1.063rem] h-[1.063rem] object-cover"
              alt=""
              src="https://i.imgur.com/GUVtQBC.png"
            />
            <div className=" text-[1rem] font-medium text-black">1000</div>
            <div className="capitalize font-medium">USDC</div>
          </div>
        </div>
        <div className="w-[9.938rem] pb-9 relative text-[1.125rem] capitalize font-medium font-inter text-[#8c8c8c] text-left inline-block">
          By - Core Connect
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-[3.938rem] relative text-[0.875rem] font-inter text-[#8C8C8C] text-left inline-block">
            Due in 3h
          </div>
          <div className="w-[1.5px] relative bg-[#8C8C8C] h-[0.99905rem]  inline-block" />
          <div className="w-[3.938rem] relative text-[0.875rem] font-inter text-[#8C8C8C] text-left inline-block">
            Subs - 10
          </div>
          <div className="w-[1.5px] relative bg-[#8C8C8C] h-[0.99905rem]  inline-block" />

          <div className="flex gap-1 items-center justify-center">
            <img
              className=" w-2 h-2 object-cover"
              src="https://i.imgur.com/A1vmuoV.png"
              alt=""
            />
            <div className="w-[0.563rem] relative text-[0.875rem] font-inter text-[#8C8C8C] text-left inline-block">
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post_Home;
