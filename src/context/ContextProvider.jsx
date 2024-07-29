import React, { useEffect, useState } from "react";
// import { ethers, utils } from "ethers";
// import { contractABI, contractAddress } from "../utils/GMBUILDERS";
import axios from "axios";

export const Context = React.createContext();

// eslint-disable-next-line react/prop-types
export const CoreProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userMail, setUserMail] = useState("");
  const [pass, setPass] = useState("");
  const [openData, setOpenData] = useState([]);
  const [ongoingData, setOngoingData] = useState([]);
  const [closeData, setCloseData] = useState([]);
  
  const [postTypeData, setPostTypeData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [loginModal, setloginModal] = useState(true);
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
      console.log("haalo");
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
      console.log("handleLogin", response.data);
      if (response.data == 0) {
        setIsLogin(true);
      }
      return response.data;
    } catch (error) {
      console.error("There was an error logging in:", error);
      //  setMessage("An error occurred. Please try again.");
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLogin) {
          const response = await fetch(
            "https://corequest.onrender.com/getdata",
            {
              method: "POST", // or 'POST' if required
            }
          );
          const response1 = await fetch(
            "https://corequest.onrender.com/get_post_type_data",
            {
              method: "POST", // or 'POST' if required
            }
          );
          const response2 = await fetch(
            "https://corequest.onrender.com/get_project_data",
            {
              method: "POST", // or 'POST' if required
            }
          );
        //  const response3 = await fetch(
        //    "https://corequest.onrender.com/profiledata",
        //    {
        //      method: "POST",
        //      headers: {
        //        "Content-Type": "application/json",
        //      },
        //      body: JSON.stringify({key: "sage" }),
        //    }
        //  );
          if (!response.ok) {
            console.log("Network response was not ok");
          }

          const data = await response.json();
          const data1 = await response1.json();
          const data2 = await response2.json();
          // const data3 =await response3;
          console.log("inside usefect", data);
          console.log("inside usefect1", data1);
          console.log("inside usefect2", data2);
          console.log("key", userMail);
          const response4 = await axios.post(
            "https://corequest.onrender.com/profiledata",
            {
              key: userMail,
            }
          );

          console.log("Profile Data:",response4.data[1]);
          setOpenData(data.open);
          setOngoingData(data.ongoing);
          setCloseData(data.close);
          setProjectData(data2)
          setPostTypeData(data1)
          setUser(response4.data[1]);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [isLogin]);

  return (
    <Context.Provider
      value={{
        isLogin,
        user,
        userMail,
        pass,
        loginModal,
        registerData,
        closeData,
        ongoingData,
        openData,
        projectData,
        postTypeData,
        setProjectData,
        setPostTypeData,
        setOngoingData,
        setCloseData,
        setOpenData,
        setRegisterData,
        setIsLogin,
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
