import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MainPage from "./MainPage";
import { ConnectProvider } from "./components/DATA";
import { SettingsProvider } from "./components/filterReducer";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import FilmPage from "./FilmPage";
import AuthorizationPage from "./AuthorizationPage";
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies();
  return (
    <React.Fragment>
      <CssBaseline>
        <SettingsProvider>
          <ConnectProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                {cookies.token && <Route index element={<MainPage />} />}
                {cookies.token && (
                  <Route path=":filmId" element={<FilmPage />} />
                )}
                <Route path="authorization" element={<AuthorizationPage />} />
                <Route path="*" element={<p>Not found</p>} />
              </Route>
            </Routes>
          </ConnectProvider>
        </SettingsProvider>
      </CssBaseline>
    </React.Fragment>
  );
}

export default React.memo(App);
