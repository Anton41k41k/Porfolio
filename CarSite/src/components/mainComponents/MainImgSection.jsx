import { Box, Paper, Typography } from "@mui/material";

export default function MainImgSection() {
  return (
    <Paper elevation={2}>
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
            padding: { xs: "0 2rem", md: "0 6rem" },
            top: { md: "15%", lg: "12%" },
            bottom: { xs: "8%", sm: "8%" },
          }}
        >
          <Typography
            fontWeight="300"
            lineHeight="1rem"
            variant="p"
            mb={1}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "0.8rem",
                md: "1.1rem",
                lg: "1.3rem",
              },
            }}
          >
            <b>С удовольствием</b> за рулем
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.4rem",
                md: "1.6rem",
                lg: "1.8rem",
              },
            }}
            fontWeight="400"
            variant="h2"
          >
            ВСЕ МЕНЯЕТСЯ. ЦЕННОСТИ ОСТАЮТСЯ.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
