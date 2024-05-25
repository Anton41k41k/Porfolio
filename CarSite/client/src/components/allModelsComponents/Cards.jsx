import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CardCar from "./Card";
import PropTypes from "prop-types";
Cards.propTypes = {
  initCards: PropTypes.arrayOf(PropTypes.object),
  filterParams: PropTypes.string,
};

export default function Cards({ initCards, filterParams }) {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      {initCards &&
        !filterParams &&
        initCards.map((card) => <CardCar key={card.id} carData={card} />)}
      {filterParams &&
        initCards
          .filter((card) => card.make === filterParams)
          .map((card) => <CardCar key={card.id} carData={card} />)}
    </Grid>
  );
}
