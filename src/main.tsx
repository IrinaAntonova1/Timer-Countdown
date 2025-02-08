import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Coutdown from "./components/Coutdown.tsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <Coutdown />
    </ThemeProvider>
  </React.StrictMode>
);
