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
          <p className="text-lg py-4 w-3/4">Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla pretium torquent, consectetur fringilla sem lobortis. Sed nascetur tincidunt potenti facilisis molestie?</p>
        </div>
        <img className="flex" src="woman.jpg" alt="woman in wheelchair" />
      </div>
      <MdKeyboardDoubleArrowDown className="flex m-auto text-7xl text-green-700 animate-bounce"/>
      <div className="flex justify-evenly m-auto py-14 *:w-[26vw] *:h-[28vw] *:bg-white *:shadow-xl *:rounded-lg">
        <div>
          <h1 className="flex justify-center font-semibold text-4xl pt-6 pb-4">Our Mission</h1>
          <p className="flex justify-center w-80 m-auto">Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla pretium torquent, consectetur fringilla sem lobortis. Sed nascetur tincidunt potenti facilisis molestie? Lobortis purus laoreet molestie est neque urna dignissim. Varius erat lobortis elit integer sodales metus. Neque aenean netus efficitur mattis potenti inceptos. Sodales placerat ex facilisis augue venenatis elementum!</p>
        </div>
        <div>
          <h1 className="flex justify-center font-semibold text-4xl pt-6 pb-4">How Does It Work?</h1>
          <p className="flex justify-center w-80 m-auto">Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla pretium torquent, consectetur fringilla sem lobortis. Sed nascetur tincidunt potenti facilisis molestie? Lobortis purus laoreet molestie est neque urna dignissim. Varius erat lobortis elit integer sodales metus. Neque aenean netus efficitur mattis potenti inceptos. Sodales placerat ex facilisis augue venenatis elementum!</p>
        </div>
        <div>
          <h1 className="flex justify-center font-semibold text-4xl pt-6 pb-4">Our Team</h1>
          <p className="flex justify-center w-80 m-auto">Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla pretium torquent, consectetur fringilla sem lobortis. Sed nascetur tincidunt potenti facilisis molestie? Lobortis purus laoreet molestie est neque urna dignissim. Varius erat lobortis elit integer sodales metus. Neque aenean netus efficitur mattis potenti inceptos. Sodales placerat ex facilisis augue venenatis elementum!</p>
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
