import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <Box>
      <Box sx={{ position: "relative", maxWidth: "100%" }}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
}
