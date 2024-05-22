import { Box, Button, Typography } from "@mui/material";
import { Autoplay, Scrollbar, FreeMode } from "swiper/modules";
import Grid from "@mui/material/Unstable_Grid2";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import { newItems } from "../../DATA/newItems";

export default function MainPageInformaton() {
  return (
    <Box
      component={"section"}
      className="newItemsInfo"
      sx={{ display: "block", margin: "0 auto" }}
    >
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
        justifyContent="center"
        sx={{
          margin: "1rem 0",
        }}
      >
        <Grid xs={4} sm={8} md={12} lg={16} xl={18}>
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
              delay: 3500,
              disableOnInteraction: false,
            }}
            style={{
              padding: "1rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            {newItems &&
              newItems.map((item) => (
                <SwiperSlide
                  key={item.id}
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
                    <img src={item.img} alt={item.title} />
                    <Typography
                      variant="h4"
                      className="newItemsInfo_title"
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
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="p"
                      className="newItemsInfo_text"
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
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
        </Grid>
      </Grid>
      <Box
        component="section"
        className="checkNewCar"
        maxWidth="100%"
        position="relative"
        display="flex"
      >
        <img
          src="https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/teaserpool/large/bmw-ix-m60-onepager-sp-desktop_1680x756_V33.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1641460066695.jpg"
          style={{
            maxWidth: "100%",
            zIndex: "-1",
          }}
        />
        <Box
          component={Typography}
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1.4rem",
              md: "2rem",
              lg: "2rem",
            },
            position: "absolute",
            color: "white",
            padding: { xs: "0 0.5rem", md: "0 2rem" },
            top: { xs: "10%", md: "12%", lg: "12%" },
            bottom: { sm: "10%" },
          }}
          variant="h3"
        >
          ЭЛЕКТРИЧЕСКАЯ ДИНАМИКА ДВИЖЕНИЯ ВЫСОЧАЙШЕГО УРОВНЯ
        </Box>
        <Box
          sx={{
            position: "absolute",
            color: "white",
            padding: { xs: "0 0.5rem", md: "0 2rem" },
            bottom: { xs: "7%", sm: "10%", lg: "12%", md: "5%" },
          }}
        >
          <Typography
            pb={{ lg: 2, md: 2, sm: 1.5, xs: 1 }}
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1.4rem",
                md: "2rem",
                lg: "2rem",
              },
            }}
            variant="h4"
          >
            Выбери подходящий электромобиль
          </Typography>
          <Button
            component={Link}
            to="allModels"
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              fontSize: {
                xs: "0.6rem",
                sm: "0.7rem",
                md: "1rem",
                lg: "1.2rem",
              },
              ":hover": { borderColor: "gray" },
            }}
          >
            Подробнее
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
