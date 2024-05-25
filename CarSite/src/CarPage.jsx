import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Presentation from "./components/carPageComponents/Presentation";
import Design from "./components/carPageComponents/Desing";
import { CircularProgress } from "@mui/material";
import Features from "./components/carPageComponents/Features";
import Characteristics from "./components/carPageComponents/Characteristics";
import CallbackPopup from "./components/carPageComponents/CallbackPopup";

export default function CarPage() {
  const { carId } = useParams();
  const [information, setInformation] = useState();
  useEffect(() => {
    fetch(
      `https://66454468b8925626f8916e2a.mockapi.io/db/mainPage/makes/${carId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setInformation(result));
  }, [carId]);
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
      justifyContent="center"
    >
      {information ? (
        <Presentation
          backdrop_path={information.backdrop_path}
          model={information.model}
          overview={information.overview}
          make={information.make}
          year={information.year}
          total={information.total}
        />
      ) : (
        <CircularProgress sx={{ mt: "15%" }} />
      )}
      {information && (
        <Features features={information.features} model={information.model} />
      )}
      {information && (
        <Characteristics characteristics={information.characteristics} />
      )}
      {information && <Design design={information.design} />}
      {information && (
        <CallbackPopup
          make={information.make}
          model={information.model}
          total={information.total}
        />
      )}
    </Grid>
  );
}
