import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <div
        className="absolute inset-0 "
        style={{
          background:
            "linear-gradient(to top, rgba(44,36,32,0.72) 0%, rgba(44,36,32,0.3) 50%, #e9e5db 100%",
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="vazirmatn text-sm md:text-base text-[#f5f1ea] mb-5">
            از سال ۱۴۰۰ در تهران
          </p>

          <h1 className="crimson-text-semibold text-5xl md:text-7xl lg:text-8xl leading-tight text-[#f5f1ea]">
            جایی که هر قهوه
            <br />
            یک داستان دارد
          </h1>

          <p className="vazirmatn text-sm md:text-base leading-8 text-[#f5f1ea]/90 max-w-xl mt-7">
            جایی برای قهوه‌های خوب، لحظه‌های آرام و وقت گذراندن در کنار آدم‌هایی
            که دوستشان دارید.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/menu"
              className="vazirmatn px-7 py-3 rounded-full bg-[#b5614a] text-[#f5f1ea] hover:opacity-90 transition"
            >
              مشاهده منو
            </Link>

            <Link
              to="/location"
              className="vazirmatn px-7 py-3 rounded-full border border-[#f5f1ea] text-[#f5f1ea] hover:bg-[#f5f1ea] hover:text-[#2c2420] transition"
            >
              پیدا کردن ما
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
