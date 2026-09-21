import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Location from "../pages/Location";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
