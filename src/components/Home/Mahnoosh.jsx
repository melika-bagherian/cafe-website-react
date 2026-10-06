import coffeeTable from "../../assets/coffee-table.jpg";
import coffeeBean from "../../assets/coffee-beans.jpg";
import cake from "../../assets/plain-cake.jpg";

export default function WhyMeNoosh() {
  const cards = [
    {
      img: coffeeBean,
      tag: "قهوه اصیل",
      title: "از دانه تا فنجان",
      desc: "قهوه‌ای که با دقت انتخاب می‌شود تا هر فنجان، طعم و عطر خودش را داشته باشد.",
    },
    {
      img: coffeeTable,
      tag: "فضای دنج",
      title: "جایی برای مکث کردن",
      desc: "فضایی گرم و صمیمی برای چند لحظه فاصله گرفتن از شلوغی روزمره.",
    },
    {
      img: cake,
      tag: "شیرینی تازه",
      title: "تازه و دوست‌داشتنی",
      desc: "کیک‌ها و شیرینی‌هایی که کنار قهوه، لحظه‌ات را کمی شیرین‌تر می‌کنند.",
    },
  ];

  return (
    <section dir="rtl" className="py-24 px-6">
      <div className="max-w-6xl mx-auto items-center ">
        <div className="mb-12">
          <p className="vazirmatn text-xs tracking-widest text-[#9c8a82] mb-3">
            تجربه مه نوش
          </p>

          <h2 className="crimson-text-semibold text-4xl md:text-5xl text-[#2c2420]">
            چیزی بیشتر از یک فنجان قهوه
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                cursor-pointer
                rounded-[1.25rem]
              "
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
                <div
                  className="
                    absolute
                    inset-0
                  "
                  style={{
                    background:
                      "linear-gradient(to top, rgba(44,36,32,0.72) 0%, rgba(44,36,32,0.25) 50%, transparent 75%)",
                  }}
                />

                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <span
                    className="
                      inline-block
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      mb-3
                    "
                    style={{
                      background: "rgba(181,97,74,0.85)",
                      color: "#f5f1ea",
                    }}
                  >
                    {card.tag}
                  </span>

                  <h3 className="crimson-default text-xl md:text-2xl mb-2 text-[#f5f1ea]">
                    {card.title}
                  </h3>

                  <p className="vazirmatn text-sm leading-7 text-[#f5f1ea]/80">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
