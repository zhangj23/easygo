import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function AboutUs() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="h-screen bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
      <div className="min-h-screen">
        <div className="flex items-center justify-between px-10 py-2 bg-white shadow-lg">
          <a href="/home">
            <img className="w-2/3" src="logo.png" alt="logo" />
          </a>
          <div className="flex space-x-8">
            <a
              className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              href="/aboutus"
            >
              About Us
            </a>
            <button
              onClick={logOut}
              className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Log Out
            </button>
          </div>
        </div>
        <h1 className="text-5xl font-bold justify-center flex p-10">
          Contact Us
        </h1>
        <div className="flex justify-around items-center">
          <div className="bg-white shadow-xl rounded-lg items-center m-auto py-10 w-[26vw] h-[15vw]">
            <div className="*:p-4">
              <p>
                <b>Phone Number:</b> (123)-456-7890
              </p>
              <p>
                <b>Email:</b> easygo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white h-8 flex justify-center items-center">
        MIT License |
        <a
          className="ml-2 relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href="https://github.com/zhangj23/easygo"
        >
          Github |
        </a>
        <a
          className="ml-2 relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href="/contactus"
        >
          Contact Us
        </a>
      </footer>
    </div>
  );
}

export default AboutUs;
