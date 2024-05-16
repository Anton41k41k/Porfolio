import { Box } from "@mui/material";
import "./mainPage.css";
import MainImgSection from "./components/mainComponents/MainImgSection";
import MainPageInformaton from "./components/mainComponents/MainPageInformation";

export default function MainPage() {
  return (
    <Box
      component={"main"}
      className="main"
      sx={{ position: "absolute", maxWidth: "100vw" }}
    >
      <MainImgSection />
      <MainPageInformaton />
    </Box>
  );
}
