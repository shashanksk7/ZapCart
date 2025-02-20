import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // ✅ Correct import
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

<<<<<<< HEAD
const root = createRoot(document.getElementById("root")); // ✅ Correct usage

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
=======
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
>>>>>>> 7d877cf3d6c294d8d5fbc540ed020b1ab6c06262
