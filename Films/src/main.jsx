import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <Provider store={store}>
          <App />
        </Provider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
