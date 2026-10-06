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
    <div className="sticky top-0 z-50 h-16 bg-[#e9e5db] flex items-center justify-between px-6 md:px-10 lg:px-16">
      <h1 className="crimson-text-semibold text-lg md:text-2xl">🌙 مه نوش</h1>

      <nav
        dir="rtl"
        className="flex gap-5 md:gap-10 vazirmatn-light text-sm md:text-base"
      >
        {navItems.map((item) => {
          return (
            <NavLink
              key={item.key}
              to={item.route}
              className={({ isActive }) =>
                isActive
                  ? "text-[#b5614a] border-b-2 border-[#b5614a]"
                  : "text-[#6b5b52]"
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
