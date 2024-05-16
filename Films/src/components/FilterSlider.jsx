import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { SettingsContext, SettingsDispatchContext } from "./filterReducer";

export default function FilterSlider() {
  const settings = React.useContext(SettingsContext);
  const dispatch = React.useContext(SettingsDispatchContext);
  const handleChange = (event, newValue) => {
    dispatch({
      type: "changeAge",
      ages: newValue,
    });
  };

  function valuetext(value) {
    return `${value}`;
  }
  const marks = [
    {
      value: 1930,
      label: "",
    },
    {
      value: 1948,
      label: "",
    },
    {
      value: 1968,
      label: "",
    },
    {
      value: 1988,
      label: "",
    },
    {
      value: 2008,
      label: "",
    },
    {
      value: 2024,
      label: "",
    },
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography paddingBottom={"2em"}>Год релиза:</Typography>
      <Slider
        value={settings.age}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        shiftStep={1}
        step={1}
        min={1930}
        max={2024}
      />
    </Box>
  );
}
