import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function SearchBox({ stations }) {
  return (
    <Autocomplete
      options={stations.map((option) => `${option.name} (${option.address})`)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Find a station"
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
}

export default SearchBox;
