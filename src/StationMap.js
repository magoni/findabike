import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function StationMap({ latitude, longitude }) {
  if (!latitude || !longitude) {
    return null;
  }

  return (
    <MapContainer
      style={{ height: 350 }}
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>Station</Popup>
      </Marker>
    </MapContainer>
  );
}

export default StationMap;
