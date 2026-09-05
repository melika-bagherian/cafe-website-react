import Items from "./Items";
import { menuData } from "../../data/MenuData";

export default function MenuPages() {
  return (
    <div>
      {menuData.hotCoffee.map((item) => (
        <Items
          key={item.id}
          name={item.name}
          ingredients={item.ingredients}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}
