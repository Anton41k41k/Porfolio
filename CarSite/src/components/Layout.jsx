import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <Box>
      <Box
        sx={{
          position: `${pathname === "/" ? "relative" : "static"}`,
          maxWidth: "100%",
        }}
      >
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
}
