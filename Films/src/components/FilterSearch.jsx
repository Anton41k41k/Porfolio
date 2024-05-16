import { Box, TextField } from "@mui/material";
import { SettingsContext, SettingsDispatchContext } from "./filterReducer";
import { memo, useContext } from "react";

function FilterSearch() {
  const settings = useContext(SettingsContext);
  const dispatch = useContext(SettingsDispatchContext);
  function handleChangeQuery(e) {
    dispatch({
      type: "changePage",
      page: 1,
    });
    dispatch({
      type: "changeQuery",
      query: e.target.value,
    });
  }
  return (
    <Box className="Search input" sx={{ padding: "10px 20px 0 20px" }}>
      <TextField
        label="Название фильма"
        variant="standard"
        value={settings.query}
        fullWidth
        onChange={handleChangeQuery}
      />
    </Box>
  );
}

export default FilterSearch;
