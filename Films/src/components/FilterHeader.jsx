import { Box, IconButton, Typography } from "@mui/material";
import { memo, useContext } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { SettingsDispatchContext } from "./filterReducer";

function FilterHeader() {
  const dispatch = useContext(SettingsDispatchContext);
  function handleResetFilter() {
    dispatch({
      type: "resetFilter",
    });
  }
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: "0 20px" }}
    >
      <Typography variant="h6">
        <b>Фильтры</b>
      </Typography>
      <IconButton onClick={handleResetFilter} sx={{ padding: "0" }}>
        <CloseIcon fontSize="medium" sx={{ color: "#000" }} />
      </IconButton>
    </Box>
  );
}

export default memo(FilterHeader);
