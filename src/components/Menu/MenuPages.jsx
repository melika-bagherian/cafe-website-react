import { useState } from "react";
import Items from "./Items";
import MenuNav from "./MenuNav";
import { menuData } from "../../data/MenuData";

export default function MenuPages() {
  const [selectedCategory, setSelectedCategory] = useState("hotCoffee");
  const [selectedIcon, setSelectedIcon] = useState();
  const [selectedtitle, setSelectedTitle] = useState(
    "نوشیدنی های گرم برپایه قهوه",
  );

  const selectedItems = menuData[selectedCategory];

  const handleCategoryChange = (category, title, icon) => {
    setSelectedCategory(category);
    setSelectedTitle(title);
    setSelectedIcon(icon);
  };

  return (
    <div>
      <MenuNav
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section
        key={selectedCategory}
        className=" animate-[fadeIn_0.6s_ease-out]  w-[90%]
        md:w-[40%]  mx-auto p-[10px]
        
        "
      >
        <div dir="rtl" className="flex items-center w-full">
          <img src={selectedIcon} alt="icon" className="w-[60px] shrink-0" />

          <div className="flex items-center flex-1">
            <h1 className="vazirmatn-dark whitespace-nowrap ml-2">
              {selectedtitle}
            </h1>

            <div className="h-[1px] bg-[#9c8a82] flex-1" />
          </div>
        </div>
        {selectedItems.map((item) => (
          <Items
            key={item.id}
            name={item.name}
            ingredients={item.ingredients}
            price={item.price}
            image={item.image}
          />
        ))}
      </section>
    </div>
  );
}
