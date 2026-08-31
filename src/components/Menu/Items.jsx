import latte from "../../assets/latte.jpeg";
export default function Items({ name, price }) {
  return (
    <>
      <section
        dir="rtl"
        className=" rounded-sm shadow-md p-[10px] mx-auto flex flex-row 
        w-[50%]
      items-center
      justify-center 
      gap-20
    
      "
      >
        <div className="w-[40%] max-w-[200px]  ">
          <img src={latte} alt="latte " className="rounded-[10px] " />
          {/* <button className="bg-[#eff]  w-[40px] h-[40px] rounded-[10px] mt-4 ">
            +
          </button> */}
        </div>
        <div>
          <h1 className="crimson-text-semibold  text-xl ">{name}</h1>
          <p>{price}</p>
        </div>
      </section>
    </>
  );
}
