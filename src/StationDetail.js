import React from "react";
import StationMap from "./StationMap";

function StationDetail({ station }) {
  return (
    <React.Fragment>
      Station detail <pre>{JSON.stringify(station, null, 2)}</pre>
      <p>Name: {station.name}</p>
      <p>Address: {station.address}</p>
      <p>Region: {station.region_id}</p>
      <StationMap latitude={station.lat} longitude={station.lon} />
    </React.Fragment>
  );
}

export default StationDetail;
