import React, { useState } from "react";
import Navbar from '../../Navbar'
import { Context } from "../../../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

const Reg4 = () => {
   const { registerData, setRegisterData, userMail, pass } =
     React.useContext(Context);
   const notify = (e) => toast(e);
   const navigate = useNavigate();
   const [spinner, setSpinner] = useState(false);
  return (
    <div>
      {/* loader */}
      <div
        className={` top-0 left-0 w-full h-full z-40 backdrop-filter backdrop-blur-sm ${
          spinner ? "fixed" : "hidden"
        } `}
      >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center min-h-[70vh] ">
          <Loader run={spinner} />
        </div>
      </div>
      <ToastContainer />
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col justify-center mt-24 items-center gap-5">
        {/* how familiar are you with web3 */}
        <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
          <div className="w-full relative rounded bg-white box-border h-[2.875rem] overflow-hidden text-left text-[0.875rem] text-silver font-inter border-[1px] border-solid border-orangered">
            <input
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  socail_links: {
                    ...registerData.socail_links,
                    twitter: e.target.value,
                  },
                });
              }}
              value={registerData.socail_links.twitter}
              className="absolute top-[0rem] h-full w-full outline-none left-[9.688rem] capitalize font-medium"
              placeholder="satoshi#816"
              type="text"
            />
            <img
              className="absolute top-[0.063rem] left-[8.484rem] max-w-full overflow-hidden h-[2.75rem]"
              alt=""
              src="https://i.imgur.com/bNWuCu6.png"
            />
            <img
              className="absolute top-[0.75rem] left-[0.625rem] w-[1.375rem] h-[1.375rem] object-cover"
              alt=""
              src="https://i.imgur.com/LevEJzr.png"
            />
            <div className="absolute top-[0.75rem] left-[2.75rem] text-[1.125rem] capitalize font-medium text-black">
              Twitter
            </div>
          </div>

          <div className="w-full relative rounded bg-white box-border h-[2.875rem] overflow-hidden text-left text-[0.875rem] text-silver font-inter border-[1px] border-solid border-orangered">
            <input
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  socail_links: {
                    ...registerData.socail_links,
                    linkedin: e.target.value,
                  },
                });
              }}
              value={registerData.socail_links.linkedin}
              className="absolute top-[0rem] h-full w-full outline-none left-[9.688rem] capitalize font-medium"
              placeholder="satoshi#816"
              type="text"
            />
            <img
              className="absolute top-[0.063rem] left-[8.484rem] max-w-full overflow-hidden h-[2.75rem]"
              alt=""
              src="https://i.imgur.com/bNWuCu6.png"
            />
            <img
              className="absolute top-[0.75rem] left-[0.625rem] w-[1.375rem] h-[1.375rem] object-cover"
              alt=""
              src="https://i.imgur.com/ncm13L3.png"
            />
            <div className="absolute top-[0.75rem] left-[2.75rem] text-[1.125rem] capitalize font-medium text-black">
              LinkedIn
            </div>
          </div>

          <div className="w-full relative rounded bg-white box-border h-[2.875rem] overflow-hidden text-left text-[0.875rem] text-silver font-inter border-[1px] border-solid border-orangered">
            <input
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  socail_links: {
                    ...registerData.socail_links,
                    github: e.target.value,
                  },
                });
              }}
              value={registerData.socail_links.github}
              className="absolute top-[0rem] h-full w-full outline-none left-[9.688rem] capitalize font-medium"
              placeholder="satoshi#816"
              type="text"
            />
            <img
              className="absolute top-[0.063rem] left-[8.484rem] max-w-full overflow-hidden h-[2.75rem]"
              alt=""
              src="https://i.imgur.com/bNWuCu6.png"
            />
            <img
              className="absolute top-[0.75rem] left-[0.625rem] w-[1.375rem] h-[1.375rem] object-cover"
              alt=""
              src="https://i.imgur.com/Zt4LEI5.png"
            />
            <div className="absolute top-[0.75rem] left-[2.75rem] text-[1.125rem] capitalize font-medium text-black">
              Github
            </div>
          </div>
          <div
            onClick={async () => {
              console.log("reg4 final", registerData);
              setSpinner(true);
              const response = await fetch(
                "https://corequest.onrender.com/reg",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ [userMail]: pass }),
                }
              );
              const data = await response.json();
              notify(data);
              const response1 = await fetch(
                "https://corequest.onrender.com/insert_profile",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ [userMail]: registerData }),
                }
              );
              const data1 = await response1.json();
              notify(data1);
              console.log("response 1", response, "response2", response1);
              setSpinner(false);
              navigate("/");
            }}
            className="flex flex-col w-[13rem] mx-auto mb-6  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 gap-5 items-start justify-center"
          >
            <div className="w-full flex items-center justify-center relative rounded-[5px] bg-[#ff6700] box-border h-[3.313rem] overflow-hidden text-left text-[1.25rem] text-white font-inter border-[1px] border-solid border-[#ff670073]">
              <div className=" capitalize font-medium">Finish Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg4
