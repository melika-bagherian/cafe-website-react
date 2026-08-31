// import { NavLink } from "react-router-dom";
import MenuNav from "../components/Menu/MenuNav";
import Navbar from "../components/Navbar";
// import Items from "../components/Menu/Items";
import HotCoffee from "../components/Menu/HotCoffee";
export default function Menu() {
  return (
    <>
      <Navbar />
      <MenuNav />
      <HotCoffee />
    </>
  );
}
