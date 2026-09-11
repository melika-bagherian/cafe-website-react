export default function Items({ name, price, image, ingredients }) {
  return (
    <>
      <section
        dir="rtl"
        className="
        rounded-xl
        shadow-[0_5px_15px_rgba(120,90,60,0.22)]
        p-[10px]
        mx-auto
        mb-5
        mt-5
        w-[90%]
        md:w-[40%]
        grid
        grid-cols-[150px_1fr]
        gap-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_20px_rgba(90,80,65,0.25)]
        
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
