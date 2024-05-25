import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Filter from "./components/allModelsComponents/Filter";
import Cards from "./components/allModelsComponents/Cards";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function AllModelsPage() {
  const [initCards, setInitCards] = useState(null);
  const [filterParams, setFilterParams] = useState("");
  useEffect(() => {
    fetch("https://66454468b8925626f8916e2a.mockapi.io/db/mainPage/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((result) => setInitCards(result));
  }, []);

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
      justifyContent="center"
    >
      {!initCards && <CircularProgress sx={{ marginTop: "13%" }} />}
      {initCards && (
        <Filter
          initCards={initCards}
          params={filterParams}
          handleChangeFilter={setFilterParams}
        />
      )}
      {initCards && <Cards initCards={initCards} filterParams={filterParams} />}
    </Grid>
  );
}
