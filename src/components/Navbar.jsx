import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className=" flex justify-between mt-8 px-4 md:px-10 lg:px-16 
    text-3xl
    crimson-text-regular-italic"
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/location">Location</NavLink>
    </nav>
  );
}
