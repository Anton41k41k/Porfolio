import { Box } from "@mui/material";
import Filters from "./components/Filters";
import "./components/style/Main.css";
import Cards from "./components/Cards";

export default function Main() {
  return (
    <Box component="main" className="main__content">
      <Filters />
      <Cards />
    </Box>
  );
}
