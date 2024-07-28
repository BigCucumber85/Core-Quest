import React from 'react'
import Navbar from '../components/Navbar'
import GrantPostCard from '../components/builderIO.jsx/BountySubmission/GrantPostCard';

const Grants = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="w-full relative mb-4  h-max ">
        <img draggable={"false"} src="https://i.imgur.com/L5TuU7Y.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-max mx-auto relative text-[2.625rem] font-bebas-neue text-black text-left inline-block">
          Need funds to build out your idea?
        </div>
        <div className="w-max mb-[35px] relative text-[1.125rem] uppercase font-battambang text-[#444444] text-left inline-block">
          Discover the complete list of crypto grants available to support your
          project.
        </div>
      </div>

      <div className="grid grid-cols-12 mb-10 w-full px-11 gap-x-14 gap-y-11">
        <div className=" col-span-4">
          <GrantPostCard />
        </div>
        <div className=" col-span-4">
          <GrantPostCard />
        </div>
        <div className=" col-span-4">
          <GrantPostCard />
        </div>
        <div className=" col-span-4">
          <GrantPostCard />
        </div>
      </div>
    </div>
  );
}

export default Grants
