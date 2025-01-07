import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import "./css/index.css";
import "./css/generated-tailwind.css";
import App from "./components/App";
import { TouchContextProvider } from "./hooks/touchContent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TouchContextProvider>
      <Router>
        <App />
      </Router>
    </TouchContextProvider>
  </StrictMode>
);
