import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { memo, useCallback, useContext } from "react";
import { SettingsContext, SettingsDispatchContext } from "./filterReducer";
import { sortParams } from "./DATA";

function FilterSelect() {
  const dispatch = useContext(SettingsDispatchContext);
  const settings = useContext(SettingsContext);

  const handleChangeSort = useCallback(
    (e) => {
      dispatch({
        type: "changePage",
        page: 1,
      });
      dispatch({
        type: "changeSort",
        name: sortParams[e.target.value],
      });
    },
    [settings.sort]
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <FormControl fullWidth variant="standard">
        <InputLabel>Сортировать по:</InputLabel>
        <Select value={settings.sort.id} onChange={handleChangeSort} autoWidth>
          {sortParams.map((param) => (
            <MenuItem key={param.id} value={param.id}>
              {param.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterSelect;
