import React from "react";
import useStations from "./useStations";
import SearchBox from "./SearchBox";

const stationsURL =
  "http://hamilton.socialbicycles.com/opendata/station_information.json";

function Main() {
  const stations = useStations(stationsURL);

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

  return <SearchBox stations={stations.value} />;
}

export default Main;
