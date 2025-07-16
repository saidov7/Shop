import "./index.css";
import "./styles/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
