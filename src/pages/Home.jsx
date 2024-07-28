import React from "react";
import Navbar from "../components/Navbar";
import Hero1_Home from "../components/Hero1_Home";
import Hero2_Home from "../components/Hero2_Home";
import { Context } from "../context/ContextProvider";
import AuthInit from "../components/Login/AuthInit";

const Home = () => {
    const { loginModal,  } =
      React.useContext(Context);
  return (
    <div>
      {/* register/login Popup */}
      <div
        className={` top-0 left-0 w-full h-full z-40 backdrop-filter backdrop-blur-sm ${
          loginModal ? "fixed" : "hidden"
        } `}
      >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center min-h-[70vh] ">
          <AuthInit  />
        </div>
      </div>
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      {/* hero 1 */}
      <div>
        <Hero1_Home />
      </div>

      {/* hero 2 */}
      <div className="  ">
        <Hero2_Home />
      </div>
    </div>
  );
};

export default Home;
