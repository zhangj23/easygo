import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent.tsx";
import { baseUrl } from "../config";
import polyline from "polyline";

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
    <div className="h-screen">
      <h1>Simple Map Example</h1>
      <div className="map-container">
        {currentLat ? (
          <MapComponent lat={currentLat} long={currentLong} route={route} />
        ) : (
          ""
        )}
      </div>
      <button onClick={getLocation}>Fetch Your Location</button>
    </div>
  );
}

export default Home;
