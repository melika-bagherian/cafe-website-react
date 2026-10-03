import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Marquee from "../components/Home/Marquee";
import MahNoosh from "../components/Home/Mahnoosh";
import FooterComponent from "../components/FooterComponent";
import Popular from "../components/Home/popular";
import { Link } from "react-router-dom";
import barista from "../assets/barista-makingCoffee.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <MahNoosh />
      <Popular />
      <section className="relative overflow-hidden py-28 px-6">
        <img
          src={barista}
          alt="بریستا در حال دم‌کردن قهوه"
          className="absolute  top-0 right-30  h-full object-cover "
        />
        <div className="absolute inset-0  bg-[#2c2420]/40" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="crimson-text-semibold mb-6 text-3xl md:text-4xl lg:text-5xl text-[#f5f1ea]">
            امروز به ما سر بزنید
          </h2>

          <p className="vazirmatn mb-10 text-base leading-7 text-[#f5f1ea]/80">
            هر روز از ساعت ۸ صبح تا ۱۰ شب منتظر شما هستیم. رزرو میز برای
            گروه‌ها.
          </p>

          <Link
            to="/location"
            className="
            inline-block
            rounded-full
            bg-[#f5f1ea]
            px-10
            py-4
            vazirmatn
            text-sm
            font-medium
            text-[#2c2420]
            shadow-[0_4px_24px_rgba(0,0,0,0.25)]
            transition-all
            duration-200
            hover:scale-105
          "
          >
            نقشه و ساعت کار
          </Link>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
