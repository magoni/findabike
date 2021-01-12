import React, { useState } from "react";
import useStations from "../hooks/useStations";
import SearchBox from "../SearchBox";
import StationDetail from "../Station/StationDetail";

const stationsURL =
  "http://hamilton.socialbicycles.com/opendata/station_information.json";

function Main() {
  const stations = useStations(stationsURL);
  const [selectedStation, setSelectedStation] = useState("");

  if (stations.state === "pending") {
    return <div>Loading stations...</div>;
  }

  if (stations.state === "rejected") {
    return (
      <div>
        Something went wrong when fetching stations:
        {" " + stations.error}
      </div>
    );
  }

  return (
    <React.Fragment>
      <SearchBox
        stations={stations.value}
        setSelectedStation={setSelectedStation}
      />
      <StationDetail station={selectedStation} />
    </React.Fragment>
  );
}

export default Main;
