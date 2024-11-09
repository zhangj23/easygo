import React from "react";

function Login() {
  return (
    <div className="h-screen bg-gradient-to-t from-[#f4f4f4] to-[#f2d0a4] p-10 relative">
      
      {/* Left side with logo and slogan */}
      <div className="float-left mt-10">
        <img src="EasyGo.png" alt="EasyGo Logo" className="w-48 h-auto mb-4" />
        
        <div className="flex flex-col items-start justify-center h-1/3 mt-10 text-[#2D406B]">
          <span className="slogan-text block text-5xl font-medium">Built for Everyone,</span>
          <span className="slogan-text block text-5xl font-medium">Guided by You</span>
        </div>

      </div>

      {/* Right side sign-in box */}
      <div className="signin float-right mt-10 bg-white p-8 rounded-lg shadow-lg w-[520px]">
        <h2 className="text-2xl font-bold text-[#2D406B] mb-6 text-left">Sign in</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#2D406B] mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#157F1F]"
              required
            />
          </div>

          
        </form>

      </div>
    </div>
  );
}

export default Login;
