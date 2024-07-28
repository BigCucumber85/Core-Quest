import React from "react";

const GrantPostCard = () => {
  return (
    <div className="flex flex-col px-2 py-2 font-semibold rounded-md border border-solid border-zinc-400 max-w-[422px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/546a16c9d3df60485f9c0572d1f935f033f53a73fdd72db21d98e7ac8cd71438?apiKey=b93734ecdcb94378af862d5b2ec71620&&apiKey=b93734ecdcb94378af862d5b2ec71620"
        className="w-full rounded-md aspect-[1.64]"
        alt="Core Connect Grants"
      />
      <div className="mt-3 text-xl text-black">Core Connect Grants</div>
      <div className="mt-3 text-base font-medium text-stone-500">
        Get up to $20k to make memes on core connect
      </div>
      <div className="flex justify-evenly gap-1.5 mt-5 text-lg whitespace-nowrap">
        <button className="px-16 py-3.5 text-white bg-orange-500 rounded-md border border-solid border-neutral-400 transition-all duration-300 hover:bg-orange-600">
          Apply
        </button>
        <button className="px-16 py-3.5 bg-white rounded-md border border-solid border-neutral-400 text-neutral-500 transition-all duration-300 hover:bg-gray-100">
          Details
        </button>
      </div>
    </div>
  );
};

export default GrantPostCard;
