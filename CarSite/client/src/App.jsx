import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./MainPage";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import AllModelsPage from "./AllModelsPage";
import ContactsPage from "./ContactsPage";
import CarPage from "./CarPage";

let theme = createTheme({
  typography: {
    color: "#262626",
  },
});
theme = responsiveFontSizes(theme);
export default function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="allModels" element={<AllModelsPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path=":carId" element={<CarPage />} />
              <Route path="*" element={<p>Not found</p>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}
