import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Autoplay, Scrollbar, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Box, Card, CardContent, Typography } from "@mui/material";

import PropTypes from "prop-types";

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  model: PropTypes.string,
};

export default function Features({ features, model }) {
  return (
    <>
      <Grid
        xs={4}
        sm={8}
        md={12}
        lg={16}
        xl={18}
        justifyContent="center"
        alignItems="center"
        display={{ xs: "flex", md: "none" }}
        flexDirection="column"
      >
        <Typography
          sx={{
            fontSize: {
              xs: "1.1rem",
              sm: "1.8rem",
              md: "2.2rem",
              lg: "2.4rem",
              xl: "2.4rem",
            },
            color: "#262626",
          }}
          fontWeight="400"
          variant="h5"
          mb={1}
        >
          ОСОБЕННОСТИ {model}
        </Typography>
        <Swiper
          initialSlide={1}
          scrollbar={{
            hide: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1110: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Scrollbar, FreeMode]}
          centeredSlides={true}
          freeMode={true}
          spaceBetween={40}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          style={{
            padding: "1rem 1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          {features &&
            features.map((slide) => (
              <SwiperSlide
                key={slide.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <Box
                  className="newItemsInfo__item"
                  display="flex"
                  p={2}
                  sx={{
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "400px",
                  }}
                >
                  <img src={slide.img} alt={slide.title} loading="lazy" />
                  <Typography
                    variant="h4"
                    mt={1.5}
                    fontWeight="500"
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1rem",
                        md: "1.1rem",
                        lg: "1.3rem",
                        xl: "1.5rem",
                      },

                      color: "#262626",
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="p"
                    textAlign="justify"
                    pt={1}
                    sx={{
                      fontSize: {
                        xs: "0.9rem",
                        sm: "1rem",
                        md: "1.1rem",
                        lg: "1.2rem",
                        xl: "1.3rem",
                      },
                      color: "#666666",
                    }}
                  >
                    {slide.text}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
      </Grid>
      <Grid
        xs={4}
        sm={8}
        md={12}
        lg={16}
        xl={18}
        justifyContent="center"
        alignItems="center"
        display={{ xs: "none", md: "flex" }}
        flexDirection="column"
      >
        <Typography
          sx={{
            fontSize: {
              xs: "1.1rem",
              sm: "1.8rem",
              md: "2.2rem",
              lg: "2.4rem",
              xl: "2.4rem",
            },
            color: "#262626",
          }}
          fontWeight="400"
          variant="h5"
          mb={1}
        >
          ОСОБЕННОСТИ {model}
        </Typography>
        <Box
          my={2}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          width="100%"
          px={2}
          gap={3}
        >
          {features.map((card) => (
            <Card
              key={card.id}
              sx={{ maxWidth: 345, margin: "0 1rem" }}
              elevation={0}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{ width: "100%" }}
                loading="lazy"
              />
              <CardContent>
                <Typography
                  variant="h4"
                  mt={1.5}
                  fontWeight="500"
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1rem",
                      md: "1.1rem",
                      lg: "1.3rem",
                      xl: "1.5rem",
                    },
                    color: "#262626",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="p"
                  textAlign="justify"
                  pt={1}
                  sx={{
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1rem",
                      md: "1.1rem",
                      lg: "1.2rem",
                      xl: "1.3rem",
                    },
                    color: "#666666",
                  }}
                >
                  {card.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>
    </>
  );
}
