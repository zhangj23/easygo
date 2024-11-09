import React from "react";

function Signup() {
  return (
    <div className="h-screen bg-gradient-to-t from-[#f4f4f4] to-[#f2d0a4] p-20 font-poppins">
      
      {/* Left side with logo and slogan */}
      <div className="float-left mt-10 ml-32">
        <img src="logo.png" alt="EasyGo Logo" className="w-100 h-auto mb-4" />
        
        <div className="flex flex-col items-start justify-center h-1/3 mt-10 text-[#000]">
          <span className="slogan-text block text-5xl font-bold">Built for Everyone,</span>
          <span className="slogan-text block text-5xl font-bold py-2">Guided by You</span>
        </div>
      </div>

      {/* Right side sign-up box */}
      <div className="signin float-right mt-10 bg-white p-8 rounded-lg w-[520px] mr-32 border border-gray-300">
        <h2 className="text-2xl font-bold text-[#000] mb-6 text-left">Sign up</h2>
        
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#157F1F] placeholder:text-black"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#157F1F] placeholder:text-black"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2 h-4 w-4 text-[#157F1F] border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="text-[#2D406B] text-sm">
                Remember me
              </label>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="bg-[#157F1F] text-white py-2 px-6 rounded-md hover:bg-[#0f6118] transition-colors"
            >
              Sign up
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <p className="text-sm">
              Already have an account? <a href="login" className="text-[#157F1F]"><b>Sign in</b></a>
            </p>
          </div>
          
        </form>
      </div>

    </div>
  );
}

export default Signup;
