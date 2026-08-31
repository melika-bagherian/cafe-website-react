import Items from "./Items";
export default function HotCoffee() {
  const coffeeItems = [
    {
      name: " اسپرسو",
      ingredients: " ",
      price: "110،000 تومان",

      id: 1,
    },
    {
      name: "امریکانو ",
      ingredients: " اسپرسو + اب ",
      price: "130،000 تومان ",
      id: 2,
    },
    {
      name: "لاته ",
      ingredients: "اسپرسو + شیر ",
      price: "150،000 تومان ",
      id: 3,
    },
    {
      name: "کاپوچینو ",
      ingredients: "اسپرسو + فوم شیر ",
      price: "150،000 تومان",
      id: 4,
    },
    {
      name: " موکا ",
      ingredients: "اسپرسو + فوم شیر + شکلات ",
      price: "160،000 تومان ",
      id: 5,
    },
  ];

  return coffeeItems.map((item) => (
    <Items name={item.name} price={item.price} key={item.id} />
  ));
}
