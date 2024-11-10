import React, { useState, useEffect } from "react";
import { baseUrl } from "../config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="h-screen bg-gradient-to-t from-[#f4f4f4] to-[#f2d0a4] p-20 font-poppins">
      {/* Left side with logo and slogan */}
      <div className="float-left mt-10 ml-32">
        <img src="logo.png" alt="EasyGo Logo" className="w-100 h-auto mb-4" />

        <div className="flex flex-col items-start justify-center h-1/3 mt-10 text-[#000]">
          <span className="slogan-text block text-5xl font-bold">
            Built for Everyone,
          </span>
          <span className="slogan-text block text-5xl font-bold py-2">
            Guided by You
          </span>
        </div>
      </div>

      {/* Right side sign-in box */}
      <div className="signin float-right mt-10 bg-white p-8 rounded-lg w-[520px] mr-32 border border-gray-300">
        <h2 className="text-2xl font-bold text-[#000] mb-6 text-left">
          Log in
        </h2>

        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={changeEmail}
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
              value={password}
              onChange={changePassword}
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

            <a
              href="forgotpassword"
              className="text-[#157F1F] text-sm hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <div className="flex justify-center mb-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-[#157F1F] text-white py-2 px-6 rounded-md hover:bg-[#0f6118] transition-colors"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="signup" className="text-[#157F1F]">
                <b>Sign up</b>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
