import React,{useState} from 'react'
import Navbar from '../../Navbar';
import SkillSelector from '../../builderIO.jsx/BountySubmission/SkillInput';
import { Context } from "../../../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Reg3 = () => {
  const { registerData, setRegisterData } = React.useContext(Context);
  const notify = (e) => toast(e);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col justify-center mt-24 items-center gap-5">
        {/* how familiar are you with web3 */}
        <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
          <div className="w-max relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
            how familiar are you with web3
          </div>
          <input
            type="text"
            className="w-full p-3 relative rounded bg-white box-border capitalize font-medium h-[2.875rem] overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
            placeholder="Your Experience"
          />
        </div>
        {/* work experience */}
        <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
          <div className="w-max relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
            work experience
          </div>
          <input
            onChange={(e) => {
              
              setRegisterData(
                { ...registerData, based_in: e.target.value }
              )
            }}
            value={
              registerData.based_in
            }
            type="text"
            className="w-full p-3 relative rounded bg-white box-border capitalize font-medium h-[2.875rem] overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
            placeholder="xyz"
          />
        </div>
        {/* work preference */}
        <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
          <div className="w-max relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
            work preference
          </div>
          <input
            onChange={(e) => {
              setRegisterData({ ...registerData, looking_for: e.target.value })
            }}
            value={registerData.looking_for}
            type="text"
            className="w-full p-3 relative rounded bg-white box-border capitalize font-medium h-[2.875rem] overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
            placeholder="Location"
          />
        </div>

        {/*Current employer*/}
        <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
          <div className="w-max relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
            Current employer
          </div>
          <input
            onChange={
              (e) => {
                setRegisterData({ ...registerData, works_at: e.target.value })
              }
            }
            value={
              registerData.works_at
            }
            type="text"
            className="w-full p-3 relative rounded bg-white box-border capitalize font-medium h-[2.875rem] overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
            placeholder="Current employer"
          />
        </div>

        {/* community affiliations  */}
        <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
          <div className="w-max relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
            community affiliations
          </div>
          <input
            type="text"
            className="w-full p-3 relative rounded h-[70px] bg-white box-border capitalize font-medium  overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
            placeholder="community affiliations "
          />
        </div>
        <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
          <SkillSelector />
        </div>

        <div
          onClick={() => {
            console.log("reg3 final", registerData)
            
            if ( 
              registerData.based_in === "" ||
              registerData.looking_for === "" ||
              registerData.works_at === "" 
              
            ) {
              notify("Please fill all the fields");
            }
            else {
              navigate('/reg4')
            }
        }}  className="flex flex-col w-[13rem] mb-6  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 gap-5 items-start justify-center">
          <div className="w-full flex items-center justify-center relative rounded-[5px] bg-[#ff6700] box-border h-[3.313rem] overflow-hidden text-left text-[1.25rem] text-white font-inter border-[1px] border-solid border-[#ff670073]">
            <div className=" capitalize font-medium">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg3
