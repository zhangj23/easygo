import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent(props) {
  return (
    <MapContainer
      center={[props.lat, props.long]}
      zoom={props.zoom}
      style={{ height: "100vh", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.route && <Polyline positions={props.route} color="blue" />}
    </MapContainer>
  );
}

export default MapComponent;
