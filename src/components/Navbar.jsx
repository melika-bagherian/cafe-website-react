import { NavLink } from "react-router-dom";
export default function Navbar() {
  const navItems = [
    {
      title: "خانه",
      key: "home",
      route: "/",
    },
    {
      title: "منو",
      key: "menu",
      route: "/menu",
    },
    {
      title: "درباره ما",
      key: "about",
      route: "/about",
    },

    {
      title: "موقعیت",
      key: "location",
      route: "/location",
    },
  ];
  return (
    <div className="relative flex flex-row ">
      <h1 className="crimson-text-semibold  text-lg md:text-2xl   absolute right-8 mt-8  ">
        🌙 مه نوش
      </h1>
      <nav
        dir="rtl"
        className=" flex gap-10 mt-8 px-4 md:px-10 lg:px-16 
      text-l
      vazirmatn-light 
      "
      >
        {navItems.map((item) => {
          return (
            <NavLink
              key={item.key}
              to={item.route}
              className={({ isActive }) =>
                isActive
                  ? "text-[#b5614a] border-b-2 border-[#b5614a]"
                  : "#6b5b52;"
              }
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
