import { menuData } from "../../data/MenuData";
import Items from "../Menu/Items";
import { Link } from "react-router-dom";

export default function Popular() {
  const popularItemsId = [7, 13, 16, 22];

  const popularItems = Object.values(menuData)
    .flat()
    .filter((item) => popularItemsId.includes(item.id));

  return (
    <section dir="rtl" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className=" text-center mb-12">
          <p className="vazirmatn text-xs tracking-widest text-[#9c8a82] mb-3">
            از منوی ما
          </p>
          <h2 className="crimson-text-semibold text-4xl md:text-5xl text-[#2c2420]">
            محبوب‌ترین‌ها
          </h2>
          <Link
            to="/menu"
            className="vazirmatn text-xl text-[#b5614a] hover:underline "
          >
            مشاهده همه ←
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          {popularItems.map((item) => (
            <Items
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              ingredients={item.ingredients}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
