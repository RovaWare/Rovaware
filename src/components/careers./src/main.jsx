import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../../styles/careers.css";
import App from "./App.jsx";

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
