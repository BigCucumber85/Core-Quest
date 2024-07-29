import React, { useState } from "react";
import { Context } from "../../context/ContextProvider";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";


const AuthInit = () => {
  const { handleLogin, setUserMail, setPass, userMail, pass, setloginModal } =
    React.useContext(Context);
  const notify = (e) => toast(e);
  const navigate = useNavigate()
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-[345px] relative rounded-xl bg-white box-border overflow-hidden flex flex-col items-center justify-start pt-[3.437rem] px-[2.375rem] pb-[4.687rem] gap-[1.5rem] text-left text-[1rem] text-black font-inter border-[1px] border-solid border-[#ff670073]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem] text-center text-[1.375rem]">
          <div className="self-stretch relative font-semibold">
            <span className="capitalize">{`You’re `}</span>one step away
          </div>
          <div className="self-stretch relative text-[1rem] capitalize font-medium text-[#747474]">
            From earning in global standards
          </div>
        </div>
        <div className="self-stretch rounded bg-white overflow-hidden flex flex-row items-center justify-center py-[1.062rem] px-[0.625rem] text-[#c6c6c6] border-[1px] border-solid border-[#ff670073]">
          <input
            value={userMail}
            onChange={(e) => {
              setUserMail(e.target.value);
            }}
            placeholder="Enter your email address"
            className="relative outline-none w-full h-full text-black  font-medium"
          />
        </div>

        <div className="self-stretch rounded bg-white overflow-hidden flex flex-row items-center justify-center py-[1.062rem] px-[0.625rem] text-[#c6c6c6] border-[1px] border-solid border-[#ff670073]">
          <input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            placeholder="Enter Password"
            type="password"
            className="relative outline-none w-full h-full text-black  font-medium"
          />
        </div>
        <div
          onClick={async () => {
            setSpinner(true);
            console.log(pass,userMail)
            if (userMail === "" || pass === "") {
              notify("Please fill all the fields");
            } else {
              const req = await handleLogin();
              if (req == 0) {
                notify("Logged in successfully");
                setloginModal(false);
              }
              if (req == -1) {
                notify("Does not have account");
                setloginModal(false);
                navigate("/reg1")
              }
              if (req == 1) {
                notify("Invalid Password");
              }
            }
            setSpinner(false);

          }}
          className="self-stretch rounded bg-[#ff6700] overflow-hidden flex flex-row items-center justify-center py-[1.062rem] px-[0.625rem] text-white border-[1px] border-solid border-[#ff670073]"
        >
          <div className="  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 relative capitalize font-semibold">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthInit;
