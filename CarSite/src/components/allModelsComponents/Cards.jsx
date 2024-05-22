import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import CardCar from "./Card";

export default function Cards() {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    fetch("https://66454468b8925626f8916e2a.mockapi.io/db/mainPage/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((result) => setCards(result));
  }, []);

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      {!!cards && cards.map((card) => <CardCar key={card.id} carData={card} />)}
    </Grid>
  );
}
