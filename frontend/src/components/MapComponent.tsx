import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent(props) {
  return (
    <MapContainer
      center={[props.lat, props.long]} // Example coordinates for RPI, Troy, NY
      zoom={15}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.route && <Polyline positions={props.route} color="blue" />}
    </MapContainer>
  );
}

export default MapComponent;
