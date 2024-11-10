import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Landing() {
  return (
    <div className="h-[175vh] bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
      <div className="flex items-center justify-between px-10 py-2 bg-white shadow-lg">
        <img className="w-1/6" src="logo.png" alt="logo" />
        <div className="flex space-x-8">
          <a className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="/login">Log In</a>
          <a className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full" href="/signup">Sign Up</a>
        </div>
      </div>
      <div className="flex items-center justify-between px-28 py-20">
        <div className="flex-col">
          <h1 className="text-5xl font-bold">Built for Everyone,</h1>
          <h1 className="text-5xl font-bold py-2">Guided by You</h1>
          <p className="text-lg py-4 w-3/4">Find easy-to-navigate wheelchair accessible routes throughout your city. Our route planner highlights barrier-free paths, ramps, and smooth surfaces to help you travel confidently and independently.</p>
        </div>
        <img className="flex" src="woman.jpg" alt="woman in wheelchair" />
      </div>
      <MdKeyboardDoubleArrowDown className="flex m-auto text-7xl text-green-700 animate-bounce"/>
      <div className="flex justify-evenly m-auto py-14 *:w-[26vw] *:h-[28vw] *:bg-white *:shadow-xl *:rounded-lg">
        <div>
          <h1 className="flex justify-center font-semibold text-4xl pt-6 pb-4">Our Mission</h1>
          <p className="flex justify-center w-80 m-auto text-lg">Our mission is to make navigation easier and safer for everyone, especially those with accessibility needs. We aim to provide accessible routes, minimizing obstacles and enhancing independence for individuals with mobility challenges.</p>
        </div>
        <div>
          <h1 className="flex justify-center font-semibold text-4xl pt-6 pb-4">How Does It Work?</h1>
          <p className="flex justify-center w-80 m-auto text-lg">Using data on path accessibility, this tool identifies routes that are wheelchair-friendly by avoiding stairs. Simply input your start and final destination, and our route finder will suggest the most accessible path for you.</p>
        </div>
        <div>
          <h1 className="flex justify-center font-semibold text-4xl pt-6 pb-4">Why it Matters</h1>
          <p className="flex justify-center w-[40vh] m-auto text-lg">Over 1.3 billion people worldwide live with some form of disability, many of whom face daily challenges with mobility in public spaces. Accessible routes not only improve independence and safety but also foster a sense of belonging and inclusion.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
