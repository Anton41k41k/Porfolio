import { Paper } from "@mui/material";
import FilterSelect from "./FilterSelect.jsx";
import FilterSlider from "./FilterSlider.jsx";
import FilerGenres from "./FilerGenres.jsx";
import { memo } from "react";
import FilterPagination from "./FilterPagination.jsx";
import FilterHeader from "./FilterHeader.jsx";
import FilterSearch from "./FilterSearch.jsx";

function Filters() {
  return (
    <Paper
      elevation={1}
      style={{ height: "85vh", display: "flex", flexDirection: "column" }}
    >
      <FilterHeader />
      <FilterSearch />
      <FilterSelect />
      <FilterSlider />
      <FilerGenres />
      <FilterPagination />
    </Paper>
  );
}

export default Filters;
