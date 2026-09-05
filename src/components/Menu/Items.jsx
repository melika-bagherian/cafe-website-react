export default function Items({ name, price, image, ingredients }) {
  return (
    <>
      <section
        dir="rtl"
        className=" rounded-sm shadow-md
        p-[10px] mx-auto  
        w-[90%]
        md:w-[40%]
        items-ceter 
        grid
        grid-cols-[120px_1fr]
        gap-20

      "
      >
        <div className="w-[150px] h-[150px] shrink-0 overflow-hidden rounded-[10px] ">
          <img
            src={image}
            alt="latte "
            className="w-full h-full object-cover "
          />
        </div>
        <div className="self-center">
          <h1 className="crimson-text-semibold  text-xl ">{name}</h1>
          <h2 className="crimson-text-regular">{ingredients}</h2>
          <br />
          <p className="crimson-text-regular">{price}</p>
        </div>
      </section>
    </>
  );
}
