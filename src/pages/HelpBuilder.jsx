import React,{useState,useEffect} from 'react'
import Navbar from "../components/Navbar";
import HelpBuilderPostCard from '../components/HelpBuilderPostCard';
import { Context } from "../context/ContextProvider";



const HelpBuilder = () => {
  const [activeButton, setActiveButton] = useState(0);
  const { setIsLogin, projectData } = React.useContext(Context);

     const buttons = [
       "All Projects",
       "DEFI",
       "Gaming",
         "Social Media",
         "Meditech",
       "Gamblefi"
     ];

     const handleClick = (index) => {
       setActiveButton(index);
  };
    useEffect(() => {
      // console.log(projectData && projectData[buttons[activeButton]]);
    }, [projectData, activeButton]);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <img
          className="w-full relative max-w-full overflow-hidden h-[29.688rem] object-cover"
          alt=""
          draggable={"false"}
          src="https://i.imgur.com/Cz5pkVq.png"
        />
      </div>

      {/* options */}
      <div className="flex gap-11 mt-6 ml-[55px]">
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
      <div className="w-[1330px] ml-[55px] top-[33px] relative box-border h-[0.125rem] border-t-[2px] border-solid border-orangered" />

      <div className="grid grid-cols-12 p-[55px] gap-x-[52px] gap-y-[30px] ">
        {projectData && projectData[buttons[activeButton]].map((item, index) => (
          <div key={index} className="col-span-4">
            <HelpBuilderPostCard data={item} index={index} />
          </div>
        ))}
        {/* <div className=" col-span-4">
          <HelpBuilderPostCard />
        </div>
        <div className=" col-span-4">
          <HelpBuilderPostCard />
        </div>
        <div className=" col-span-4">
          <HelpBuilderPostCard />
        </div> */}
      </div>
    </div>
  );
}

export default HelpBuilder
