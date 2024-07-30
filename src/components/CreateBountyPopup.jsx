import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BountyForm({set}) {
  const [formData, setFormData] = useState({
    headline: "",
    deadline: new Date(),
    details: "",
    totalPrize: "",
    subPrizes: [],
    eligibility: "",
    contact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      deadline: date,
    }));
  };

  const handleSubPrizesChange = (e) => {
    const subPrizes = e.target.value.split(",").map((prize) => prize.trim());
    setFormData((prevState) => ({
      ...prevState,
      subPrizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col h-[90vh] overflow-y-scroll py-8 bg-white rounded-xl border border-solid border-orange-500 border-opacity-50 max-w-[531px]">
      <div
        onClick={() => {
          set(false)
      }}  className=" p-3 h-1 w-2 text-[30px]  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200">
        x
      </div>
      <div className="self-center text-xl font-semibold text-black">
        Add Details
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-7 mt-3.5 w-full max-md:px-5 max-md:max-w-full"
      >
        <div className="flex gap-5 whitespace-nowrap max-md:flex-wrap">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="headline"
              className="text-lg font-semibold text-stone-500"
            >
              Headline
            </label>
            <input
              type="text"
              id="headline"
              name="headline"
              value={formData.headline}
              onChange={handleInputChange}
              className="px-2.5 py-4 mt-2 text-base font-medium bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-500 max-md:pr-5"
              placeholder="Enter headline"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="deadline"
              className="text-lg font-semibold text-stone-500"
            >
              Deadline
            </label>
            <DatePicker
              selected={formData.deadline}
              onChange={handleDateChange}
              className="px-3 py-4 mt-2 text-base font-medium bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-500 max-md:pr-5"
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>

        <label
          htmlFor="details"
          className="mt-5 text-lg font-semibold text-stone-500 max-md:max-w-full"
        >
          Details
        </label>
        <input
          type="text"
          id="details"
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          className="px-2.5 py-4 mt-2 text-base font-medium bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter details"
        />

        <label
          htmlFor="totalPrize"
          className="mt-5 text-lg font-semibold text-stone-500 max-md:max-w-full"
        >
          Total Prize
        </label>
        <input
          type="text"
          id="totalPrize"
          name="totalPrize"
          value={formData.totalPrize}
          onChange={handleInputChange}
          className="px-2.5 py-4 mt-2 text-base font-medium bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter total prize"
        />

        <label
          htmlFor="subPrizes"
          className="mt-6 capitalize text-lg font-semibold text-stone-500 max-md:max-w-full"
        >
          sub prizes
        </label>
        <div className="flex gap-1.5 self-start mt-3">
          <input
            type="text"
            id="subPrizes"
            name="subPrizes"
            value={formData.subPrizes.join(", ")}
            onChange={handleSubPrizesChange}
            className="shrink-0 bg-white rounded border border-solid border-orange-500 border-opacity-50 h-[46px] w-[126px] px-2"
            placeholder="Enter sub prizes"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3022c4ecb91c420b200b65944ab7d65ef3e054baeac4e0295c86f9075ef4be16?apiKey=b93734ecdcb94378af862d5b2ec71620&&apiKey=b93734ecdcb94378af862d5b2ec71620"
            className="shrink-0 my-auto aspect-square w-[33px]"
            alt="Add sub prize"
          />
        </div>

        <label
          htmlFor="eligibility"
          className="mt-5 text-lg font-semibold text-stone-500 max-md:max-w-full"
        >
          Eligibility for this bounty submission
        </label>
        <input
          type="text"
          id="eligibility"
          name="eligibility"
          value={formData.eligibility}
          onChange={handleInputChange}
          className="px-2.5 py-4 mt-2 text-base font-medium bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter eligibility criteria"
        />

        <label
          htmlFor="contact"
          className="mt-5 capitalize text-lg font-semibold text-stone-500 max-md:max-w-full"
        >
          share your Contact
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="px-2.5 py-4 mt-2 text-base font-medium bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter contact information"
        />

        <button
          onClick={() => {
            if (
              formData.headline !== "" &&
              formData.details !== "" &&
              formData.totalPrize !== "" &&
              formData.eligibility !== "" &&
              formData.contact !== ""
            ) {
              handleSubmit();
            }
          }}
          type="submit"
          className="px-16 capitalize py-5 mt-9 text-xl font-medium text-white whitespace-nowrap bg-orange-500 rounded-md border border-solid border-orange-500 border-opacity-50 max-md:px-5 max-md:max-w-full"
        >
          create
        </button>
      </form>
    </div>
  );
}

export default BountyForm;
