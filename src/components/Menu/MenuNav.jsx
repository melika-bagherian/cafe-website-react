import icedCoffe from "../../assets/menu icons/iced-coffee-1.png";
import CoffeCup from "../../assets/menu icons/coffee.png";
import Teacup from "../../assets/menu icons/tea-cup.png";
import Milkshake from "../../assets/menu icons/milkshake.png";
import drink from "../../assets/menu icons/drink.png";
import cookie from "../../assets/menu icons/cookie.png";

export default function MenuNav({ onCategoryChange }) {
  const navItems = [
    {
      title: "نوشیدنی های گرم بر پایه قهوه",
      key: "hotCoffee",
      icon: CoffeCup,
      alt: "coffee cup",
    },
    {
      title: "نوشیدنی های سرد بر پایه قهوه",
      key: "coldCoffee",
      icon: icedCoffe,
      alt: "iced coffee",
    },
    {
      title: "چای و دمنوش",
      key: "teaAndHerbalTea",
      icon: Teacup,
      alt: "tea",
    },
    {
      title: "بستنی و شیک",
      key: "shakesAndIceCream",
      icon: Milkshake,
      alt: "milkshake",
    },
    {
      title: "نوشیدنی های سرد",
      key: "coldDrinks",
      icon: drink,
      alt: "drink",
    },
    {
      title: "کیک و کوکی",
      key: "cakesAndCroissants",
      icon: cookie,
      alt: "cookie",
    },
  ];

  return (
    <nav
      dir="rtl"
      className="
        crimson-text-regular
        flex
        gap-4 lg:gap-17
        mt-8
        px-4 md:px-10 lg:px-16
        py-2
        overflow-x-auto
        overflow-y-hidden
        no-scrollbar
      "
    >
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onCategoryChange(item.key)}
          className="
            p-[10px]
            flex flex-row
            shrink-0
            items-center
            rounded-xl
            shadow-[0_4px_10px_rgba(190,185,174,0.45)]
            transition-all duration-200 ease-out
            hover:-translate-y-1
            cursor-pointer
             active:scale-[0.97]
             
          "
        >
          <img src={item.icon} alt={item.alt} className="w-[50px]" />

          <span className="leading-[50px]">{item.title}</span>
        </button>
      ))}
    </nav>
  );
}
