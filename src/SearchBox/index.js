import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function SearchBox({ stations, setSelectedStation }) {
  return (
    <Autocomplete
      options={stations}
      getOptionLabel={(option) => `${option.name} (${option.address})`}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Find a station"
          margin="normal"
          variant="outlined"
        />
      )}
      onChange={(event, value, reason) => {
        if (reason === "select-option") {
          setSelectedStation(value);
        }
      }}
    />
  );
}

export default SearchBox;
