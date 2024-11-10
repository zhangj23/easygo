import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent.tsx";
import { baseUrl } from "../config";
import { FaSearchLocation } from "react-icons/fa";
import SearchDropdown from "../components/SearchDropdown.tsx";

function Home() {
  const [currentLat, setLat] = useState<Number>();
  const [currentLong, setLong] = useState<Number>();
  const [route, setRoute] = useState();
  const [startLat, setStartLat] = useState<Number>();
  const [endLat, setEndLat] = useState<Number>();
  const [startLon, setStartLon] = useState<Number>();
  const [endLon, setEndLon] = useState<Number>();

  const fetchAccessible = async () => {
    const end = { lat: 42.7308903, lon: -73.687679 };
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (startLat && endLat && startLon && endLon) {
      fetchAccessible();
      console.log("asd");
    }
  }, [startLat, endLat, startLon, endLon]);
  return (
    <div className="h-[200vh] bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
      <div className="flex items-center justify-between px-10 py-2 bg-white shadow-lg">
        <a href="/home">
          <img className="w-2/3" src="logo.png" alt="logo" />
        </a>
        <div className="flex space-x-8">
          <a
            className="text-2xl font-semibold relative after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            href="/login"
          >
            Log Out
          </a>
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
          />

          <SearchDropdown
            placeholder={"To"}
            lat={currentLat}
            lon={currentLong}
            outLat={setEndLat}
            outLon={setEndLon}
          />
        </div>
      </div>

      <div className="py-2 w-2/3 m-auto">
        {currentLat ? (
          <MapComponent lat={currentLat} long={currentLong} route={route} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
