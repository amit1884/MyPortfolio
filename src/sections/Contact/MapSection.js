import React from "react";
import L from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapSection() {
  const position = ["23.3441", "85.3096"];

  const markerIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapSection;
