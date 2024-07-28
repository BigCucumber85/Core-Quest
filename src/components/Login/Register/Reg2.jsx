import React, { useRef,useState } from "react";
import Navbar from '../../Navbar'
import { Context } from "../../../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader";

const Reg2 = () => {
  const { registerData, setRegisterData } = React.useContext(Context);
  const [image, setImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const notify = (e) => toast(e);
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);


  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        console.log(file); // Handle the file upload logic here
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async () => {
    setSpinner(true);
console.log("wait")
    try {
      const formData = new FormData();
      formData.append("image", image);
      console.log(formData)
      const response = await axios.post(
        
          `https://memish.onrender.com/uploadimage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setRegisterData(
        { ...registerData, profole_url: response.data.link_preview }
      )
      // console.log("response", response.data.link_preview);

      // setImgUrl(response.data.link_preview);

      // handleUpload();
      setSpinner(false);
console.log("complete");

      return response.data.link_preview;
    } catch (error) {
      setSpinner(false);

      console.error("Error sending POST request:", error);
    }
  };
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
          {/* username */}
          <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
            <div className="w-[5.625rem] relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
              username
            </div>
            <input
              onChange={(e) =>
                setRegisterData({ ...registerData, username: e.target.value })
              }
              value={registerData.username}
              type="text"
              className="w-full p-3 relative rounded bg-white box-border capitalize font-medium h-[2.875rem] overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
              placeholder="Username"
            />
          </div>
          {/* Name */}
          <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
            <div className="w-[5.625rem] relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
              Name
            </div>
            <input
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
              value={registerData.name}
              type="text"
              className="w-full p-3 relative rounded bg-white box-border capitalize font-medium h-[2.875rem] overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
              placeholder="Name"
            />
          </div>
          {/* Location */}
          <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
            <div className="w-[5.625rem] relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
              Location
            </div>
            <input
              type="text"
              className="w-full p-3 relative rounded bg-white box-border capitalize font-medium h-[2.875rem] overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
              placeholder="Location"
            />
          </div>
          {/* image upload */}
          <div
            onClick={handleDivClick}
            className="w-[32rem] cursor-pointer relative flex h-[5.188rem] overflow-hidden  place-items-start"
          >
            <img
              className="w-[255px] "
              src="https://i.imgur.com/9uwyZK3.png"
              alt=""
              draggable={"false"}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
            <img
              src={selectedImage || ""}
              alt="Selected"
              className={`cursor-pointer w-48   object-contain ${
                selectedImage ? "" : "hidden"
              }`}
              // onClick={""}
            />
          </div>
          {/* Bio */}
          <div className="flex flex-col w-[32rem] gap-5 items-start justify-center">
            <div className="w-max relative text-[1.125rem] capitalize font-semibold font-inter text-dimgray text-left inline-block">
              your one line bio
            </div>
            <input
              onChange={(e) =>
                setRegisterData({ ...registerData, bio: e.target.value })
              }
              value={registerData.bio}
              type="text"
              className="w-full p-3 relative rounded h-[70px] bg-white box-border capitalize font-medium  overflow-hidden text-left text-[1rem] text-silver font-inter border-[1px] border-solid border-[#ff670073]"
              placeholder="I am an Artist"
            />
          </div>

          <div
            onClick={async () => {
              if (
                registerData.bio == "" ||
                registerData.username == "" ||
                registerData.name == ""
              ) {
                notify("Please enter all fields");
              } else {
                let c = await uploadImage();
                console.log("uploaded profile", c, registerData);
                navigate("/reg3");
              }
            }}
            className="flex flex-col w-[13rem] mb-6  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 gap-5 items-start justify-center"
          >
            <div className="w-full flex items-center justify-center relative rounded-[5px] bg-[#ff6700] box-border h-[3.313rem] overflow-hidden text-left text-[1.25rem] text-white font-inter border-[1px] border-solid border-[#ff670073]">
              <div className=" capitalize font-medium">Continue</div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Reg2
