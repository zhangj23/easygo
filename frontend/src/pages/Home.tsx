import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent.tsx";
import { baseUrl } from "../config";
import polyline from "polyline";
import { FaSearchLocation } from "react-icons/fa";

function Home() {
  const [currentLat, setLat] = useState<Number>();
  const [currentLong, setLong] = useState<Number>();
  const [route, setRoute] = useState();
  const [key, setKey] = useState();
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log(position);
      fetchRoute(position);
    });
  };

  const fetchRoute = async (position) => {
    const start = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }; // Berlin (example)
    const end = { lat: 42.7308903, lon: -73.687679 }; // Another point in Berlin (example)

    const url = `https://graphhopper.com/api/1/route?point=${start.lat},${start.lon}&point=${end.lat},${end.lon}&vehicle=foot&key=${key}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const encodedPoints = data.paths[0].points;
      const decodedPoints = polyline
        .decode(encodedPoints)
        .map(([lat, lon]) => [lat, lon]);
      setRoute(decodedPoints);
      console.log(route);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  useEffect(() => {
    fetch(`${baseUrl}/graph/api/get-graph-key`)
      .then((response) => response.json())
      .then((data) => {
        setKey(data.GRAPH_KEY);
      })
      .catch((error) => console.error("Error fetching the key:", error));
  }, []);

  return (
    <div className="h-[60vw] bg-gradient-to-t from-blue-300 to-white-400 font-poppins">
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
        <div className="flex space-x-4 justify-center *:flex *:rounded-full *:px-4 *:py-3 *:border-2 *:border-gray-400 *:max-w-lg *:overflow-hidden *:bg-white *:w-full *:sm:w-1/2">
          <div>
            <input
              className="w-full outline-none bg-transparent text-black-600 text-sm"
              type="email"
              placeholder="From"
            />
            <FaSearchLocation className="text-gray-500" />
          </div>
          <div>
            <input
              className="w-full outline-none bg-transparent text-black-600 text-sm"
              type="email"
              placeholder="To"
            />
            <FaSearchLocation className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="py-2">
        <div className="flex m-auto h-[40vw] w-[70vw] bg-white"></div>
      </div>
    </div>
  );
}

export default Home;
