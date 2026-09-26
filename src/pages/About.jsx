import Navbar from "../components/Navbar";
import Footercomponent from "../components/FooterComponent";
import CoffeeShop from "../assets/coffee-shop.jpg";
export default function About() {
  const values = [
    {
      number: "۰۱",
      title: "قهوه خوب",
      desc: "انتخاب مواد باکیفیت و آماده‌سازی با دقت.",
      color: "#b5614a",
    },
    {
      number: "۰۲",
      title: "فضای صمیمی",
      desc: "جایی که بتوانی راحت باشی و احساس غریبی نکنی.",
      color: "#7a9175",
    },
    {
      number: "۰۳",
      title: "تجربه خوب",
      desc: "از اولین قدم تا آخرین جرعه، همه‌چیز ساده و دلنشین.",
      color: "#c9907a",
    },
  ];

  return (
    <>
      <Navbar />
      <div dir="rtl" className="min-h-screen pt-24 pb-10 overflow-hidden">
        <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl">
              <p className="vazirmatn text-xs font-medium text-[#b5614a] mb-6 tracking-[0.12em]">
                درباره مه نوش
              </p>

              <h1 className="crimson-text-semibold text-[clamp(2.65rem,7vw,5.4rem)] font-bold text-[#2c2420] leading-[1.25] tracking-[-0.035em] mb-8">
                یک فنجان قهوه،
                <br />
                <span className="text-[#b5614a]">یک لحظه خوب.</span>
              </h1>

              <p className="vazirmatn max-w-xl text-base md:text-lg text-[#6b5b52] leading-[2]">
                مه نوش جایی برای قهوه، آرامش و یک مکث کوتاه میان شلوغی روزمره
                است؛ جایی که می‌توانی برای چند دقیقه سرعت زندگی را کم کنی و از
                لحظه‌ات لذت ببری.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            <div className="relative md:order-2">
              <div className="absolute -inset-4 md:-inset-6 rounded-[2rem] -z-10 bg-[#f5f1ea]/70" />

              <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2rem] aspect-[4/5] bg-[#d9d1c6] shadow-[0_20px_50px_rgba(44,36,32,0.12)]">
                <img
                  src={CoffeeShop}
                  alt="فضای گرم و آرام یک کافه با میزهای چوبی"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="md:order-1 py-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#b5614a]" />

                <p className="vazirmatn text-xs font-medium text-[#9c8a82] tracking-[0.1em]">
                  حال‌وهوای مه نوش
                </p>
              </div>

              <h2 className="crimson-text-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#2c2420] leading-[1.55] mb-7">
                ساده، گرم و به دور از هیاهو
              </h2>

              <p className="vazirmatn text-[0.98rem] text-[#6b5b52] leading-[2] mb-5">
                برای ما قهوه خوب از دانه‌های باکیفیت و آماده‌سازی دقیق شروع
                می‌شود؛ اما چیزی که یک فنجان را به خاطره تبدیل می‌کند، فضایی است
                که آن را در آن می‌نوشی.
              </p>

              <p className="vazirmatn text-[0.98rem] text-[#6b5b52] leading-[2]">
                مه نوش برای گفت‌وگوهای طولانی با دوستان، ورق زدن یک کتاب، یا
                همان چند دقیقه آرامی است که گاهی فقط برای خودت لازم داری. اینجا
                قرار نیست عجله کنی؛ صندلی‌ات را پیدا کن و کمی بمان.
              </p>
            </div>
          </div>
        </section>
        <section className="px-6 py-20 md:py-28 bg-[#f0ece4]/70">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 md:mb-16">
              <p className="vazirmatn text-xs font-medium text-[#9c8a82] tracking-[0.12em] mb-3">
                چیزی که برای ما مهم است
              </p>

              <h2 className="crimson-text-semibold text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-[#2c2420]">
                جزئیات ساده، حس خوب
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="relative min-h-[220px] p-7 md:p-8 rounded-2xl overflow-hidden bg-[#f5f1ea] border border-[#2c2420]/[0.06] shadow-[0_8px_30px_rgba(44,36,32,0.055)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-10 text-xs font-semibold vazirmatn"
                    style={{
                      backgroundColor: `${value.color}18`,
                      color: value.color,
                    }}
                  >
                    {value.number}
                  </div>

                  <h3 className="crimson-text-semibold text-[1.25rem] font-bold text-[#2c2420] mb-3">
                    {value.title}
                  </h3>

                  <p className="vazirmatn text-sm text-[#6b5b52] leading-[1.9]">
                    {value.desc}
                  </p>

                  <span
                    className="absolute bottom-0 right-0 left-0 h-1"
                    style={{
                      backgroundColor: value.color,
                      opacity: 0.72,
                    }}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 py-28 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block w-2 h-2 rounded-full mb-9 bg-[#b5614a]" />

            <blockquote className="crimson-text-semibold text-[clamp(1.55rem,3.8vw,2.75rem)] text-[#2c2420] leading-[1.8] font-semibold">
              گاهی یک فنجان قهوه،
              <br className="hidden sm:block" /> تمام چیزی است که برای یک لحظه
              خوب لازم داریم.
            </blockquote>
          </div>
        </section>
      </div>
      <Footercomponent />
    </>
  );
}
