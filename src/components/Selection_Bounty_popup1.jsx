import React, { useState } from "react";

const SelectionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Design", "Development", "Bounty", "Content Related"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <section className="flex flex-col px-7 py-10 text-xl font-semibold bg-white rounded-xl border border-solid border-orange-500 border-opacity-50 max-w-[531px] max-md:px-5">
      <h2 className="self-center text-black">select what you want to create</h2>
      <label className="mt-14 text-lg text-stone-500 max-md:mt-10 max-md:max-w-full">
        what you want to create today?
      </label>
      <div className="relative mt-2">
        <div
          className="flex justify-between items-center px-3 py-2 text-base font-medium bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-300 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span>{selectedOption || "select one from the dropdown"}</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f8f6dba9b33074254d1e610c8c11103b904e3823752311681d81721f5133458?apiKey=b93734ecdcb94378af862d5b2ec71620&&apiKey=b93734ecdcb94378af862d5b2ec71620"
            alt="Dropdown arrow"
            className={`w-[30px] h-[30px] transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {options.map((option) => (
              <li
                key={option}
                className="px-3 py-2 hover:bg-orange-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="px-16 py-5 mt-40 font-medium text-white whitespace-nowrap bg-orange-500 rounded-md border border-solid border-orange-500 border-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        next
      </button>
    </section>
  );
};

export default SelectionComponent;
