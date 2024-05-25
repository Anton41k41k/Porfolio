import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import PropTypes from "prop-types";
Filter.propTypes = {
  initCards: PropTypes.arrayOf(PropTypes.object),
  handleChangeFilter: PropTypes.func,
  params: PropTypes.string,
};

export default function Filter({ initCards, params, handleChangeFilter }) {
  const marks = [];
  initCards.filter(({ make }) => !marks.includes(make) && marks.push(make));
  return (
    <Grid
      mt={3}
      xs={4}
      sm={8}
      md={12}
      lg={16}
      xl={18}
      sx={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(7px)",
        background: "hsla(0, 0%, 100%, .1)",
        display: "flex",
        justifyContent: "center",
        zIndex: "7",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <FormControl
          size="small"
          sx={{
            minWidth: { xs: "100vw", md: "30vw" },
          }}
        >
          <InputLabel
            sx={{
              color: "#666666",
              "&.Mui-focused": { color: "#666666" },
            }}
          >
            Выберите марку
          </InputLabel>
          <Select
            value={params}
            label="Выберите марку"
            onChange={(e) => handleChangeFilter(e.target.value)}
            sx={{ "& fieldset": { border: "none" } }}
          >
            <MenuItem value="">Все</MenuItem>
            {marks.map((mark, index) => (
              <MenuItem key={index} value={mark}>
                {mark}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>
    </Grid>
  );
}
