import React from "react";
import Navbar from "../../Navbar";
import BackgroundImageDiv from "../../BGImageDiv";
import { Context } from "../../../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const Reg1 = () => {
  const { registerData, setRegisterData } = React.useContext(Context);
  const notify = (e) => toast(e);
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="relative w-full h-[369px]">
        <BackgroundImageDiv
          imageUrl={`https://i.imgur.com/qA6WcFx.png`}
          classs={`h-full w-full flex items-end justify-center`}
        >
          <div className="relative top-[40%]">
            <div className="flex w-full  gap-[75px]">
              <div className="w-[305px] relative rounded-xl bg-white box-border h-[19rem] overflow-hidden text-center text-[1.375rem] text-black font-inter border-[1px] border-solid border-[#ff670073]">
                <div className="absolute top-[10.125rem] left-[1.188rem] capitalize font-semibold inline-block w-[16.688rem]">
                  Looking for a talent?
                </div>
                <div
                  onClick={() => {
                    setRegisterData({ ...registerData, userType: "1" });
                    navigate("/reg2");
                  }}
                  className="  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 absolute top-[13.313rem] left-[2.375rem] rounded bg-[#ff6700] box-border w-[14.313rem] h-[3.313rem] overflow-hidden flex flex-row items-center justify-center py-[1.062rem] px-[0.625rem] text-left text-[1rem] text-white border-[1px] border-solid border-[#ff670073]"
                >
                  <div className="relative capitalize font-semibold">
                    make your sponsor profile
                  </div>
                </div>
                <img
                  className="absolute top-[2.25rem] left-[6.75rem] w-[5.563rem] h-[5.563rem] overflow-hidden object-cover"
                  alt=""
                  src="https://i.imgur.com/5k57z4l.png"
                />
              </div>
              <div className="w-[305px] relative rounded-xl bg-white box-border h-[19rem] overflow-hidden text-center text-[1.375rem] text-black font-inter border-[1px] border-solid border-[#ff670073]">
                <div className="absolute top-[10.125rem] left-[1.188rem] capitalize font-semibold inline-block w-[16.688rem]">
                  Looking To Earn?
                </div>
                <div
                  onClick={() => {
                    setRegisterData({ ...registerData, userType: "0" });
                    navigate("/reg2");
                  }}
                  className="absolute  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 top-[13.313rem] left-[2.375rem] rounded bg-[#ff6700] box-border w-[14.313rem] h-[3.313rem] overflow-hidden flex flex-row items-center justify-center py-[1.062rem] px-[0.625rem] text-left text-[1rem] text-white border-[1px] border-solid border-[#ff670073]"
                >
                  <div className=" relative capitalize font-semibold">
                    make your talent profile
                  </div>
                </div>
                <img
                  className="absolute top-[2.25rem] left-[6.75rem] w-[5.563rem] h-[5.563rem] overflow-hidden object-cover"
                  alt=""
                  src="https://i.imgur.com/WrdSDKU.png"
                />
              </div>
            </div>
          </div>
        </BackgroundImageDiv>
      </div>
    </div>
  );
};

export default Reg1;
