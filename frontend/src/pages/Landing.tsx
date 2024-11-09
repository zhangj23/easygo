import React from "react";

function Landing() {
  return (
    <>
      <div className="h-screen bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
        <img className="h-20 w-70" src="logo.png" alt="logo" />
        <a className="" href="/login">Sign In</a>
      </div>
    </>
  );
}

export default Landing;
