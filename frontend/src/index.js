import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./pages/Landing.tsx";
import Home from "./pages/Home.tsx";

import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Forgotpwd from "./pages/Forgotpwd.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgotpassword",
    element: <Forgotpwd />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
