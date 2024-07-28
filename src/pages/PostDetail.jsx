import React from "react";
import Navbar from "../components/Navbar";

const PostDetail = () => {
  const prizes = [
    {
      place: "First Prize",
      amount: "$500 USDC + Member role in Superteam India",
    },
    { place: "Second Prize", amount: "$150 USDC" },
    { place: "Third Prize", amount: "$100 USDC" },
  ];
  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* hero */}

      <div className="flex flex-col items-center justify-start w-full py-[29px] px-[39.5px] relative bg-[#ffe6d56b] h-max overflow-hidden text-left text-[1rem] text-[#ff670073] font-inter">
        {/* first row */}
        <div className="w-full p-[10px] relative rounded-lg bg-white box-border h-max overflow-hidden text-left text-[1rem] text-black font-inter border-[1px] border-solid border-orangered">
          <div className="grid pb-[10px] grid-cols-12 gap-3">
            <div className="col-span-5">
              <div className="flex gap-4">
                <img
                  className=" w-[101px] h-[98px] "
                  src="https://i.imgur.com/oim9Tzo.png"
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <div className="w-max relative text-[1.25rem] capitalize font-semibold font-inter text-[#4d4d4d] text-left inline-block">{`A twitter thread `}</div>
                  <div className="w-max relative text-[1.125rem] capitalize font-medium font-inter text-[#8c8c8c] text-left inline-block">
                    By - Core Connect
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <div className="w-full relative py-3 px-[12px]  rounded-[5px] bg-[#fffaf7] box-border h-max overflow-hidden text-left text-[1rem] text-[#828282] font-inter border-[1px] border-solid border-orangered">
                <div className="mb-2 grid grid-cols-10">
                  <div className=" col-span-7">
                    <div className="flex justify-start items-center gap-[13px]">
                      <img
                        className=" w-[22px] h-[22px]"
                        src="https://i.imgur.com/GUVtQBC.png"
                        alt=""
                      />
                      <div className="w-[3.25rem] relative text-[1.25rem] capitalize font-semibold font-inter text-black text-left inline-block">
                        7000
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-3">
                    <div className="w-[5rem] relative text-[1rem] capitalize font-inter text-black text-left inline-block">
                      Total Prize
                    </div>
                  </div>
                </div>
                {/* divider */}
                <div className=" bg-orangered w-full h-[1.5px] mb-1" />
                <div className="grid grid-cols-10 gap-y-[5px]">
                  {/* first */}
                  <div className=" col-span-7">
                    <div className="flex items-center justify-start gap-[9px]">
                      <img
                        className=" w-5 h-5"
                        src="https://i.imgur.com/osNIDAf.png"
                        alt=""
                      />
                      <div className="w-fit relative text-[1.125rem] capitalize font-inter text-[#5a5a5a] text-left inline-block">
                        500
                      </div>
                      <div className="w-[2.5rem] relative text-[0.875rem] capitalize font-inter text-[#828282] text-left inline-block">
                        USDC
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-3">
                    <div className="w-[4.75rem] relative text-[1rem] capitalize font-inter text-[#828282] text-left inline-block">
                      First Prize
                    </div>
                  </div>
                  {/* 2nd  */}
                  <div className=" col-span-7">
                    <div className="flex items-center justify-start gap-[9px]">
                      <img
                        className=" w-5 h-5"
                        src="https://i.imgur.com/kZoNfO7.png"
                        alt=""
                      />
                      <div className="w-fit relative text-[1.125rem] capitalize font-inter text-[#5a5a5a] text-left inline-block">
                        400
                      </div>
                      <div className="w-[2.5rem] relative text-[0.875rem] capitalize font-inter text-[#828282] text-left inline-block">
                        USDC
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-3">
                    <div className="w-max relative text-[1rem] capitalize font-inter text-[#828282] text-left inline-block">
                      Second Prize
                    </div>
                  </div>
                  {/* 3rd  */}
                  <div className=" col-span-7">
                    <div className="flex items-center justify-start gap-[9px]">
                      <img
                        className=" w-5 h-5"
                        src="https://i.imgur.com/7utYoDb.png"
                        alt=""
                      />
                      <div className="w-fit relative text-[1.125rem] capitalize font-inter text-[#5a5a5a] text-left inline-block">
                        200
                      </div>
                      <div className="w-[2.5rem] relative text-[0.875rem] capitalize font-inter text-[#828282] text-left inline-block">
                        USDC
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-3">
                    <div className="w-max relative text-[1rem] capitalize font-inter text-[#828282] text-left inline-block">
                      Third Prize
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="w-full px-[19px] py-10 relative rounded-[5px] bg-[#fffaf7] box-border h-[7.938rem] overflow-hidden text-left text-[1.25rem] text-black font-inter border-[1px] border-solid border-orangered">
                <div className="flex gap-3 justify-evenly">
                  <div className="flex gap-2">
                    <img
                      className=" w-[35px] h-[35px]"
                      src="https://i.imgur.com/rvn5php.png"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="w-[1.438rem] relative text-[1.25rem] capitalize font-medium font-inter text-black text-left inline-block">
                        10
                      </div>
                      <div className="w-[7.438rem] relative text-[1.25rem] capitalize font-inter text-[#717171] text-left inline-block">
                        submissions
                      </div>
                    </div>
                  </div>
                  {/* divider */}
                  <div className=" bg-orangered w-0.5 h-[4.656rem] "></div>
                  {/* remaining part */}
                  <div className="flex gap-2">
                    <img
                      className=" w-[35px] h-[35px]"
                      src="https://i.imgur.com/qS4wCRs.png"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="w-[1.438rem] relative text-[1.25rem] capitalize font-medium font-inter text-black text-left inline-block">
                        0h:23m:28s
                      </div>
                      <div className="w-[7.438rem] relative text-[1.25rem] capitalize font-inter text-[#717171] text-left inline-block">
                        Remaining
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-orangered w-full h-[1px] mb-1" />
          <div className="flex items-center py-3 px-5 justify-between">
            <div className="w-[4.063rem] relative text-[1rem] capitalize font-inter text-[#8c8c8c] text-left inline-block">
              DETAILS
            </div>

            <div className="w-[73px] flex items-center justify-center relative rounded-[64px] bg-[#a8ff80] box-border h-[1.75rem] overflow-hidden text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-[#a8ff80]">
              <div className=" capitalize">Design</div>
            </div>
          </div>
        </div>

        {/* 2nd row */}
        <div className="grid grid-cols-12 mt-5  gap-2">
          <div className=" col-span-8">
            <div className="w-full pt-[22px] px-5 pb-10 flex flex-col items-start justify-start relative rounded-xl bg-white box-border h-max overflow-hidden text-left text-[1rem] text-darkslategray font-inter border-[1px] border-solid border-orangered">
              <div className="w-[6.5rem] pb-[14px] relative text-[1rem] capitalize font-inter text-[#8c8c8c] text-left inline-block">
                Requirements
              </div>
              <div className="w-[90%] pb-[22px] relative text-[1rem] capitalize font-medium font-inter text-[#373737] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sem ipsum non imperdiet
                orci convallis sodales nunc. Sagittis volutpat justo elit
                libero. Id tellus risus ut euismod lorem elit. Morbi fames
                mollis bibendum sit ultrices placerat donec quis.
              </div>

              <div className="mt-7 text-xl font-semibold text-black max-md:max-w-full">
                <h3>Prizes</h3>
                <ul className="list-none p-0 mt-4">
                  {prizes.map((prize, index) => (
                    <li key={index} className="text-lg mt-2">
                      {index === 0 && "🥇 "}
                      {index === 1 && "🥈 "}
                      {index === 2 && "🥉 "}
                      <span className="font-bold">{prize.place}:</span>{" "}
                      {prize.amount}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className=" col-span-4">
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="w-full relative rounded-xl p-6 bg-white box-border h-max overflow-hidden text-left text-[1rem] text-[#666] font-inter border-[1px] border-solid border-orangered">
                <div className="capitalize pb-4 font-medium">ELIGIBILITY</div>
                <div className=" text-[0.875rem] capitalize font-medium inline-block ">{`Lorem ipsum dolor sit amet consectetur. Sem ipsum non imperdiet orci convallis sodales nunc. Sagittis volutpat justo elit libero. `}</div>
              </div>

              <div className="w-full relative rounded-xl p-6 bg-white box-border h-max overflow-hidden text-left text-[1rem] text-[#666] font-inter border-[1px] border-solid border-orangered">
                <div className="capitalize pb-4 font-medium">Contact</div>
                <div className=" text-[0.875rem] capitalize font-medium inline-block ">{`Lorem ipsum dolor sit amet consectetur. Sem ipsum non imperdiet orci convallis sodales nunc. Sagittis volutpat justo elit libero. `}</div>
                <div className="flex pt-2 gap-2 justify-start items-center">
                  <div className="w-[5rem] relative text-[1rem] capitalize font-medium font-inter text-[#666] text-left inline-block">
                    Reach out
                  </div>
                  <img
                    className=" w-3 h-3"
                    src="https://i.imgur.com/b66GXgF.png"
                    alt=""
                  />
                </div>
              </div>

              {/* submit button */}
              <div className="w-full flex items-center justify-center relative rounded-xl bg-[#ff6700] box-border h-[3.313rem] overflow-hidden text-left text-[1.25rem] text-white font-inter border-[1px] border-solid border-[#FF670073]">
                <div className=" capitalize font-medium">{`Submit `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
