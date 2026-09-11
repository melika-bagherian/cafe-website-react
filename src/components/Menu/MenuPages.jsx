import { useState } from "react";
import Items from "./Items";
import MenuNav from "./MenuNav";
import { menuData } from "../../data/MenuData";

export default function MenuPages() {
  const [selectedCategory, setSelectedCategory] = useState("hotCoffee");

  const selectedItems = menuData[selectedCategory];

  return (
    <div>
      <MenuNav
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div key={selectedCategory} className="animate-[fadeIn_0.6s_ease-out] ">
        {selectedItems.map((item) => (
          <Items
            key={item.id}
            name={item.name}
            ingredients={item.ingredients}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
