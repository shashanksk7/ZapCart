import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // ✅ Correct import
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById("root")); // ✅ Correct usage

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
