export default function Marquee() {
  const items = [
    "دانه‌های اصیل عربیکا",
    "دم‌آوری با محبت",
    "فضای دنج و آرام",
    "شیرینی‌های خانگی",
  ];

  return (
    <section dir="rtl" className="overflow-hidden bg-[#2c2420] py-5">
      <div className="flex w-max animate-marquee">
        {[...items].map((item, index) => (
          <div key={index} className="flex items-center ">
            <span className="vazirmatn text-sm md:text-base text-[#f5f1ea] whitespace-nowrap px-8 ">
              {item}
            </span>

            <span className="text-[#b5614a]">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
