import React from "react";
import StationMap from "./StationMap";
import "./StationDetail.css";

function StationDetail({ station }) {
  if (!station) {
    return null;
  }

  return (
    <React.Fragment>
      <h2>Station details</h2>
      <dl>
        <dt>Name</dt>
        <dd>{station.name}</dd>
        <dt>Address</dt>
        <dd>{station.address}</dd>
        <dt>Rental methods</dt>
        <dd>{station.rental_methods.join(", ")}</dd>
      </dl>
      <StationMap
        latitude={station.lat}
        longitude={station.lon}
        name={station.name}
        address={station.address}
      />
    </React.Fragment>
  );
}

export default StationDetail;
