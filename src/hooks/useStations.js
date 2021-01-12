import { useState, useEffect } from "react";

export default function useStations(stationsURL) {
  const [stations, setStations] = useState({ state: "pending" });

  useEffect(() => {
    function handleError(error) {
      setStations({
        state: "rejected",
        error: error.message,
      });
    }

    async function fetchData() {
      const response = await fetch(stationsURL);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const responseBody = await response.json();
      setStations({ state: "resolved", value: responseBody.data.stations });
    }

    fetchData().catch(handleError);
  }, [stationsURL]);

  return stations;
}
