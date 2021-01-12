import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function StationMap({ latitude, longitude, name, address }) {
  if (!latitude || !longitude) {
    return null;
  }

  return (
    <MapContainer
      style={{ height: 350 }}
      center={[latitude, longitude]}
      zoom={14}
      // "key" ensures MapContainer re-centers when the latitude/longitude change by re-initialising the MapContainer component
      key={`${latitude}${longitude}`}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          <strong>{name}</strong>
          <div>{address}</div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default StationMap;
