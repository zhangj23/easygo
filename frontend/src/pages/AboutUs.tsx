import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function AboutUs() {
  return (
    <div className="h-[175vh] bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
      <div className="flex items-center justify-between px-10 py-2 bg-white shadow-lg">
        <img className="w-1/6" src="logo.png" alt="logo" />
        <div className="flex space-x-8">
          <a className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="/login">Log In</a>
          <a className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="/signup">Sign Up</a>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
