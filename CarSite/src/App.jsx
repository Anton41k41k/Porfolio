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

let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              {/* {cookies.token && <Route path=":filmId" element={<FilmPage />} />}
            <Route path="authorization" element={<AuthorizationPage />} /> */}
              <Route path="*" element={<p>Not found</p>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}
