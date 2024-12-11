import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent.tsx";
import { baseUrl } from "../config";
import { FaSearchLocation } from "react-icons/fa";
import SearchDropdown from "../components/SearchDropdown.tsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [currentLat, setLat] = useState<Number>();
  const [currentLong, setLong] = useState<Number>();
  const [route, setRoute] = useState();
  const [startLat, setStartLat] = useState<Number>();
  const [endLat, setEndLat] = useState<Number>();
  const [startLon, setStartLon] = useState<Number>();
  const [endLon, setEndLon] = useState<Number>();
  const [checked, setChecked] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const changeChecked = () => {
    setChecked((val) => !val);
  };
  const fetchAccessible = async () => {
    try {
      fetch(`${baseUrl}/graph/api/route/wheelchair`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startLat: startLat,
          startLon: startLon,
          endLat: endLat,
          endLon: endLon,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setRoute(data.route);
          console.log(data.route);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchWalking = async () => {
    try {
      fetch(`${baseUrl}/graph/api/route/normal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startLat: startLat,
          startLon: startLon,
          endLat: endLat,
          endLon: endLon,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setRoute(data.route);
          console.log(data.route);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (startLat && endLat && startLon && endLon) {
      if (checked) {
        fetchAccessible();
      } else {
        fetchWalking();
      }
    }
  }, [startLat, endLat, startLon, endLon, searchClick]);
  return (
    <div className="h-[200vh] bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
      <div className="flex items-center justify-between px-10 py-2 bg-white shadow-lg">
        <a href="/home">
          <img className="w-2/3" src="logo.png" alt="logo" />
        </a>
        <div className="flex space-x-8">
          <a
            className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href="/aboutus"
          >
            About Us
          </a>
          <button
            onClick={logOut}
            className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="pt-8 pb-6">
        <div className="flex space-x-4 justify-center *:rounded-full *:px-4 *:py-3 *:border-2 *:border-gray-400 *:max-w-lg *:overflow-hidden *:bg-white *:w-full *:sm:w-1/2">
          <SearchDropdown
            placeholder={"From"}
            lat={currentLat}
            lon={currentLong}
            outLat={setStartLat}
            outLon={setStartLon}
            setSearchClick={setSearchClick}
          />

          <SearchDropdown
            placeholder={"To"}
            lat={currentLat}
            lon={currentLong}
            outLat={setEndLat}
            outLon={setEndLon}
            setSearchClick={setSearchClick}
          />
        </div>
      </div>
      <div className="flex">
        <div className="py-2 w-3/4 ml-8">
          {currentLat ? (
            <MapComponent
              lat={endLat ? endLat : currentLat}
              long={endLon ? endLon : currentLong}
              zoom={endLon ? 16 : 15}
              key={endLon}
              route={route}
            />
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center h-1/3 m-4">
          <label className="items-center" htmlFor="wheelchair">
            Wheelchair accessible:
          </label>
          <input
            type="checkbox"
            className="w-8 m-2 h-8"
            id="wheelchair"
            onChange={changeChecked}
          />
        </div>
      </div>

      <footer className="bg-white h-8 flex justify-center items-center">
        MIT License |
        <a
          className="ml-2 relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href="https://github.com/zhangj23/easygo"
        >
          Github |
        </a>
        <a
          className="ml-2 relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          href="/contactus"
        >
          Contact Us
        </a>
      </footer>
    </div>
  );
}

export default Home;
