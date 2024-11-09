import React from "react";

function Forgotpwd() {
  return (
    
    <div className="h-screen bg-gradient-to-t from-[#f4f4f4] to-[#f2d0a4] flex items-center justify-center p-20 font-poppins">
        <img className="w-1/6 absolute top-4 left-4" src="logo.png" alt="logo" />
        
        <div className="forgotpwd bg-white p-8 rounded-lg w-[520px] border border-gray-300">
            
        <h2 className="text-2xl font-bold text-[#000] mb-6 text-left">Forgot your password</h2>
        
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

          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="bg-[#157F1F] text-white py-2 px-6 rounded-md hover:bg-[#0f6118] transition-colors"
            >
              Reset password
            </button>
          </div>
          
        </form>
      </div>

    </div>
  );
}

export default Forgotpwd;
