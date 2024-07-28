import React, { useEffect, useState } from "react";
// import { ethers, utils } from "ethers";
// import { contractABI, contractAddress } from "../utils/GMBUILDERS";
import axios from "axios";

export const Context = React.createContext();

// eslint-disable-next-line react/prop-types
export const CoreProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userMail, setUserMail] = useState("");
  const [pass, setPass] = useState("")
  const [loginModal, setloginModal] = useState(true)
  const [user, setUser] = useState(null);
  const [registerData, setRegisterData] = useState({
    name: "",
    bio: "",
    username: "",
    looking_for: "", //work preference
    profile_url: "",
    socail_links: {
      twitter: "",
      linkedin: "",
      github: "",
    },
    works_at: "", //current employer
    based_in: "", // work experience
    skills: {
      frontend: [],
      backend: [],
      blockchain: [],
    },
    submited_posts: "",
    "Total Bounty": "0",
    "Total Value Earned": "0",
    password: pass,
    profile_type: "",
  });

   const handleLogin = async (e) => {
    //  e.preventDefault();
     try {
       console.log("haalo")
       const response = await axios.post(
         "https://corequest.onrender.com/login",
         {
          email: userMail,
          password: pass,
         }
       );
      //  if (response.data === "0") {
      //    setMessage("Login successful");
      //  } else if (response.data === "1") {
      //    setMessage("Incorrect password");
      //  } else if (response.data === "-1") {
      //    setMessage("User not found");
       //  }
       console.log("handleLogin",response.data)
       return response.data
     } catch (error) {
       console.error("There was an error logging in:", error);
      //  setMessage("An error occurred. Please try again.");
     }
   };
  return (
    <Context.Provider
      value={{
        isLogin,
        user,
        userMail,
        pass,
        loginModal,
        registerData,
        setRegisterData,
        setUserMail,
        setPass,
        handleLogin,
        setloginModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};
