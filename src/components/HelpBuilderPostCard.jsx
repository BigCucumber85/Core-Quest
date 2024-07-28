import React from "react";

function HelpBuilderPostCard() {
  return (
    <article className="flex flex-col pb-3 bg-white border border-solid border-orange-500 border-opacity-50 max-w-[410px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e5ff415a780c58b4ffe218c9c49cd835ccbb3d471f127a52a79f60824d2fdd?apiKey=b93734ecdcb94378af862d5b2ec71620&&apiKey=b93734ecdcb94378af862d5b2ec71620"
        alt=""
        className="w-full aspect-[2.04]"
      />
      <header className="flex gap-5 justify-between self-center px-5 mt-1.5 w-full text-black max-w-[424px]">
        <h1 className="my-auto text-xl font-semibold">We care</h1>
        <span className="px-3.5 py-2 text-base whitespace-nowrap border border-solid bg-orange-200 bg-opacity-50 border-yellow-400 border-opacity-40 rounded-[64px]">
          Medtech
        </span>
      </header>
      <p className="mt-3 w-[97%] mx-auto text-base font-medium text-neutral-600">
        A platform that optimize the appointment in Hospitals to create a
        seamless process
      </p>
      <footer className="flex gap-5 ml-2 justify-between mt-2">
        <div className="flex gap-5 justify-between items-center">
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-base text-black">2,000 USD</div>
            <div className="mt-1.5 text-sm text-neutral-600">Funding Ask</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f6d89d13e97cfaf5b0f0cfe9be14950d73e487b4a221e13079e360950320ed7?apiKey=b93734ecdcb94378af862d5b2ec71620&&apiKey=b93734ecdcb94378af862d5b2ec71620"
            alt=""
            className="shrink-0 self-stretch w-px border border-solid aspect-[0.02] border-zinc-500"
          />
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-base text-black">22 Jun, 2024</div>
            <div className="mt-1.5 text-sm text-neutral-600">Submitted on</div>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f6d89d13e97cfaf5b0f0cfe9be14950d73e487b4a221e13079e360950320ed7?apiKey=b93734ecdcb94378af862d5b2ec71620&&apiKey=b93734ecdcb94378af862d5b2ec71620"
            alt=""
            className="shrink-0 w-px border border-solid aspect-[0.02] border-zinc-500"
          />
          <div className="flex flex-col px-5 my-auto">
            <div className="text-base text-black">Team #Builders</div>
            <div className="mt-2 text-sm text-neutral-600">Submitted By</div>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default HelpBuilderPostCard;
