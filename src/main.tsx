import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
// Supports weights 300-700
import "@fontsource-variable/quicksand";
import ListProvider from "./context/ListContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <ListProvider>
          <App />
        </ListProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
