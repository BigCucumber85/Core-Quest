import React from "react";
import { Context } from "../context/ContextProvider";

const Navbar = () => {
   const {  setIsLogin,isLogin } =
     React.useContext(Context);
  return (
    <div className="flex justify-between bg-white  items-center p-1 px-[25px]  h-[62px]  pt-3.5 ">
      <div>
        <img
          src="https://i.imgur.com/KjP0iHX.png"
          className="w-[140px] relative text-[1.75rem] pt-3.5 pb-[17px] font-array text-orangered text-left inline-block"
        />
      </div>
      {/* menu */}
      <div className="flex overflow-hidden items-center justify-evenly gap-12 pt-[16px] ">
        <div className="relative cursor-pointer  w-[85px] overflow-hidden flex flex-col group items-center justify-center ">
          <div className="relative text-[1rem] pb-[11px] capitalize font-inter text-black text-left">
            Bounties
          </div>

          <div className="flex items-center justify-center relative group-hover:h-[3px] h-0 w-0 transition-all duration-200 ease-linear group-hover:w-[100px] group-hover:min-w-20 bg-orangered"></div>
        </div>

        <div className="relative cursor-pointer  w-[80px] overflow-hidden flex flex-col group items-center justify-center ">
          <div className="relative text-[1rem] pb-[11px] capitalize font-inter text-black text-left">
            Projects
          </div>

          <div className="flex items-center justify-center relative group-hover:h-[3px] h-0 w-0 transition-all duration-200 ease-linear group-hover:w-[100px] group-hover:min-w-20 bg-orangered"></div>
        </div>

        <div className="relative cursor-pointer  overflow-hidden w-[67px] flex flex-col group items-center justify-center ">
          <div className="relative text-[1rem] pb-[11px] capitalize font-inter text-black text-left">
            Grants
          </div>

          <div className="flex items-center justify-center relative group-hover:h-[3px] h-0 w-0 transition-all duration-200 ease-linear group-hover:w-[100px] group-hover:min-w-20 bg-orangered"></div>
        </div>
        <div className="relative cursor-pointer  overflow-hidden w-[62px] flex flex-col group items-center justify-center ">
          <div className="relative text-[1rem] pb-[11px] capitalize font-inter text-black text-left">
            Funds
          </div>

          <div className="flex items-center justify-center relative group-hover:h-[3px] h-0 w-0 transition-all duration-200 ease-linear group-hover:w-[100px] group-hover:min-w-20 bg-orangered"></div>
        </div>
        <div className="relative cursor-pointer  overflow-hidden w-[52px] flex flex-col group items-center justify-center ">
          <div className="relative text-[1rem] pb-[11px] capitalize font-inter text-black text-left">
            Jobs
          </div>

          <div className="flex items-center justify-center relative group-hover:h-[3px] h-0 w-0 transition-all duration-200 ease-linear group-hover:w-[100px] group-hover:min-w-20 bg-orangered"></div>
        </div>
      </div>

      {/* login/signup */}
      <div className="flex gap-4 pt-[16px]">
       {isLogin?<div className="relative text-[1rem]  pb-[11px] capitalize font-inter cursor-pointer hover:text-blue-600 text-black text-left">
          Logged In
        </div> : <div onClick={() => {
          setIsLogin(true);
        }} className="relative text-[1rem]  pb-[11px] capitalize font-inter cursor-pointer hover:text-blue-600 text-black text-left">
          Login / Signup
        </div>}
        
      </div>
    </div>
  );
};

export default Navbar;
