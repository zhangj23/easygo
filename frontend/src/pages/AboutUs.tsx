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
    <div className="h-[120vh] bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
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
      <div className="flex justify-around h-screen items-center">
        <img className="w-1/4" src="hackrpi.webp" alt="hackrpi" />
        <p className="text-xl font-semibold w-2/3">
          Our project started at HackRPI 2024, where the theme was Urban
          Upgrades. Our development team has a passion for making the world a
          better place and we hope to be able to make a lasting impact in the
          future!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
