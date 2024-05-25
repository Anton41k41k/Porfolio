import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import PropTypes from "prop-types";

Presentation.propTypes = {
  backdrop_path: PropTypes.string,
  model: PropTypes.string,
  overview: PropTypes.string,
  make: PropTypes.string,
  year: PropTypes.number,
  total: PropTypes.number,
};

export default function Presentation({
  backdrop_path,
  model,
  overview,
  make,
  year,
  total,
}) {
  return (
    <Grid component={Paper} elevation={0}>
      <Box
        component={"section"}
        sx={{
          position: "relative",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={"section"}
          className="main-img"
          sx={{
            position: "relative",
            zIndex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ maxWidth: "100%" }} src={backdrop_path} alt="model" />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              textAlign: "left",
              color: "white",
              padding: { xs: "0 2rem", md: "0 6rem" },
              top: { md: "25%", lg: "30%", xl: "30%" },
              bottom: { xs: "10%", sm: "12%" },
            }}
          >
            <Typography
              fontWeight="300"
              lineHeight="1rem"
              variant="p"
              mb={1}
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "1.6rem",
                },
              }}
            >
              {make}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.3rem",
                  sm: "1.8rem",
                  md: "2.5rem",
                  lg: "3rem",
                  xl: "3rem",
                },
              }}
              fontWeight="400"
              variant="h2"
            >
              {`${year} ${model}`}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.2rem",
                  lg: "1.3rem",
                  xl: "1.3rem",
                },
              }}
              fontWeight="400"
              variant="body1"
            >
              {`От ${total.toLocaleString("ru") + "₽"}`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        component={Typography}
        fontWeight="300"
        lineHeight="1.5rem"
        variant="body1"
        paragraph={true}
        mb={1}
        sx={{
          width: "100%",
          textAlign: "justify",
          color: "#262626",
          padding: { xs: "2rem", md: "4rem" },
          fontSize: {
            xs: "1rem",
            sm: "0.8rem",
            md: "1.1rem",
            lg: "1.3rem",
          },
        }}
      >
        {overview}
      </Box>
    </Grid>
  );
}
