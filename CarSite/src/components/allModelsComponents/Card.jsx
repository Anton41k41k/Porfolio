import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
CardCar.propTypes = {
  carData: PropTypes.shape({
    poster_path: PropTypes.string,
    model: PropTypes.string,
    make: PropTypes.string,
    total: PropTypes.number,
    year: PropTypes.number,
    id: PropTypes.string,
    types_engine: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default function CardCar({ carData }) {
  return (
    <Grid
      component={Card}
      mt={2.5}
      xs={3.5}
      sm={3}
      md={3}
      lg={3.5}
      xl={4}
      m={"1rem"}
    >
      <CardMedia
        component="img"
        image={carData.poster_path}
        title={carData.model}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontSize: {
              xs: "0.6rem",
              sm: "0.7rem",
              md: "1rem",
              lg: "1.2rem",
            },
          }}
        >
          {`${carData.make} ${carData.model}`}
        </Typography>
        <Box sx={{ display: "flex" }}>
          {carData.types_engine.map((type, index) => (
            <Box key={type.id}>
              {index > 0 && <Divider orientation="vertical" flexItem />}
              <Typography
                key={type.id}
                variant="body2"
                color="text.secondary"
                px={1}
              >
                {type.type}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography variant="subtitle1" color="text.secondary" px={1}>
          {carData.total.toLocaleString("ru") + "₽"}
        </Typography>
        <Button size="small" component={Link} to={`/${carData.id}`}>
          Подробнее
        </Button>
      </CardActions>
    </Grid>
  );
}
