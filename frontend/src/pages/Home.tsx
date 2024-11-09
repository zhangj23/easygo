import React from "react";
import { FaSearchLocation } from "react-icons/fa";

function Home() {
  return (
    <div className="h-[60vw] bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
      <div className="flex items-center justify-between px-10 py-2 bg-white shadow-lg">
        <a href="/home"><img className="w-2/3" src="logo.png" alt="logo" /></a>
        <div className="flex space-x-8">
          <a className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="/login">Log Out</a>
        </div>
      </div>

      <div className="pt-8 pb-6">
        <div className="flex space-x-4 justify-center *:flex *:rounded-full *:px-4 *:py-3 *:border-2 *:border-gray-400 *:max-w-lg *:overflow-hidden *:bg-white *:w-full *:sm:w-1/2">
          <div>
            <input className="w-full outline-none bg-transparent text-black-600 text-sm" type="email" placeholder="From"/>
            <FaSearchLocation className="text-gray-500"/>
          </div>
          <div>
            <input className="w-full outline-none bg-transparent text-black-600 text-sm" type="email" placeholder="To"/>
            <FaSearchLocation className="text-gray-500"/>
          </div>  
        </div>
      </div>

      <div className="py-2">
        <div className="flex m-auto h-[40vw] w-[70vw] bg-white"></div>
      </div>
      
      
    </div>
  );
}

export default Home;


