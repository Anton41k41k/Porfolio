import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function MainPageInformaton() {
  const [newItems, setNewItems] = useState([]);
  useEffect(() => {
    fetch("https://66454468b8925626f8916e2a.mockapi.io/db/mainPage/newItems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((result) => setNewItems(result));
  }, []);
  return (
    <Box
      component={"section"}
      className="newItemsInfo"
      p={2}
      sx={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
      maxWidth={"1200px"}
    >
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {newItems &&
          newItems.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                className="newItemsInfo__item"
                display="flex"
                p={2}
                sx={{ flexDirection: "column", maxWidth: "60%" }}
              >
                <img src={item.img} alt={item.title} />
                <Typography
                  variant="h3"
                  className="newItemsInfo_title"
                  mt={1.5}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="p"
                  className="newItemsInfo_text"
                  textAlign="justify"
                >
                  {item.text}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}
