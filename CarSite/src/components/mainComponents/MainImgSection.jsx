import { Box, Typography } from "@mui/material";

export default function MainImgSection() {
  return (
    <Box
      component={"section"}
      className="main-img"
      sx={{ position: "relative", zIndex: "-1" }}
    >
      <img
        style={{ maxWidth: "100%" }}
        src={
          "https://bmw.scene7.com/is/image/BMW/banner_new?wid=1920&amp;hei=1080"
        }
        alt=""
      />
      <Typography
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "600",
          width: "100%",
          textAlign: "center",
          color: "white",
        }}
        variant="h2"
      >
        С удовольствием за рулем
      </Typography>
    </Box>
  );
}
