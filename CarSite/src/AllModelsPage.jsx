import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Filter from "./components/allModelsComponents/Filter";
import Cards from "./components/allModelsComponents/Cards";

export default function AllModelsPage() {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
      justifyContent="center"
    >
      <Filter />
      <Cards />
    </Grid>
  );
}
