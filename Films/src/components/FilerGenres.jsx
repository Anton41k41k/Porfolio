import { useContext, useEffect, useState } from "react";
import { Autocomplete, Box, Checkbox, Chip, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { SettingsContext, SettingsDispatchContext } from "./filterReducer";
import { useCookies } from "react-cookie";
import { URLContext } from "./DATA";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FilerGenres() {
  const [cookies] = useCookies();
  const token = cookies.token;
  const URL = useContext(URLContext);
  const settings = useContext(SettingsContext);
  const dispatch = useContext(SettingsDispatchContext);

  const [genres, setGenres] = useState([]);

  function handleChangeGenres(newValue) {
    dispatch({
      type: "changeGenres",
      genres: newValue,
    });
  }
  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setGenres(json.genres);
      });
  }, [token]);
  return (
    <Box sx={{ padding: "0 20px" }}>
      <Autocomplete
        disablePortal
        value={settings.genres}
        onChange={(event, newValue) => {
          handleChangeGenres(newValue);
          console.log(genres);
        }}
        limitTags={2}
        multiple
        size="small"
        options={genres}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props} key={option.id} style={{ padding: "1% 0" }}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Жанры"
            placeholder="Выберите жанры"
            variant="standard"
          />
        )}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option.id}
              label={option.name}
            />
          ));
        }}
      />
    </Box>
  );
}
