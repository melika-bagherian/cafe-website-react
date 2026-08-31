import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Home /> */}
      <Menu />
    </BrowserRouter>
  </StrictMode>,
);
