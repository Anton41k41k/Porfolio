import { Box, Typography } from "@mui/material";

export default function MainImgSection() {
  return (
    <Box
      component={"section"}
      className="main-img"
      sx={{
        position: "relative",
        zIndex: "-1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{ maxWidth: "100%" }}
        src={
          "https://bmw.scene7.com/is/image/BMW/banner_new?wid=1920&amp;hei=1080"
        }
        alt=""
      />
      <Box
        className="mainImageText"
        sx={{
          position: "absolute",
          width: "100%",
          textAlign: "left",
          color: "white",
          padding: "0 4rem",
          bottom: "14%",
        }}
      >
        <Typography
          fontSize="1rem"
          fontWeight="300"
          lineHeight="1rem"
          variant="h4"
          sx={{ marginBottom: "1rem" }}
          component="p"
        >
          <b>С удовольствием</b> за рулем
        </Typography>
        <Typography fontSize="1rem" fontWeight="300" variant="h2">
          ВСЕ МЕНЯЕТСЯ. ЦЕННОСТИ ОСТАЮТСЯ.
        </Typography>
      </Box>
    </Box>
  );
}
