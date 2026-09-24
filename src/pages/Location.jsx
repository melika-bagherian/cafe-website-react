import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/Navbar";
export default function Location() {
  const contactInfo = [
    {
      icon: "📍",
      title: "آدرس",
      content: "تهران، خیابان ولیعصر، نرسیده به میدان ونک، پلاک ۰۰۰، طبقه همکف",
    },
    {
      icon: "🕐",
      title: "ساعت کار",
      content: "شنبه تا پنج‌شنبه: ۸ صبح تا ۱۰ شب\nجمعه: ۹ صبح تا ۱۱ شب",
    },
    {
      icon: "📞",
      title: "تلفن تماس",
      content: "۰۲۱ – ۸۸۷۷۶۶۵۵\n۰۹۱۲ – ۳۴۵ – ۶۷۸۹",
    },
    {
      icon: "📧",
      title: "ایمیل",
      content: "hello@mahnoush.ir",
    },
  ];

  const transport = [
    {
      icon: "🚇",
      title: "مترو",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است",
    },
    {
      icon: "🚌",
      title: "اتوبوس",
      desc: "خطوط ۱۴۲، ۷۶، و ۱۸۵ در ایستگاه میدان ونک",
    },
    {
      icon: "🚗",
      title: "ماشین شخصی",
      desc: "دارای پارکینگ عمومی در کوچه، ۵۰ متری کافه ",
    },
  ];

  const socialLinks = ["اینستاگرام", "تلگرام", "توییتر"];

  return (
    <>
      <Navbar></Navbar>
      <div dir="rtl" className="min-h-screen px-6 pb-20 pt-24">
        <div className="mx-auto max-w-5xl">
          <header className="mb-14 text-center">
            <p className="mb-3 vazirmatn text-xs tracking-[0.2em] text-[#9c8a82]">
              پیدا کردن ما
            </p>

            <h1 className=" crimson-text-regular text-[clamp(2rem,4vw,3rem)]  ">
              موقعیت و تماس
            </h1>
          </header>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="flex flex-col gap-6 md:col-span-2">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex gap-4 rounded-2xl border border-[rgba(44,36,32,0.06)] bg-[#f5f1ea] p-5 shadow-[0_2px_12px_rgba(44,36,32,0.04)]"
                >
                  <span className="mt-0.5 text-2xl">{info.icon}</span>

                  <div>
                    <p className="mb-1.5 vazirmatn text-[0.9rem] text-[#2c2420]">
                      {info.title}
                    </p>

                    <p
                      dir="ltr"
                      className="whitespace-pre-line vazirmatn text-sm leading-[1.8] text-[#6b5b52]"
                    >
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[rgba(44,36,32,0.08)] bg-[#ddd8ce] shadow-[0_4px_24px_rgba(44,36,32,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&auto=format"
                  alt="نقشه محل"
                  className="h-full w-full object-cover opacity-60"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-2xl bg-[rgba(245,241,234,0.92)] px-6 py-4 text-center shadow-[0_4px_20px_rgba(44,36,32,0.15)] backdrop-blur-[8px]">
                    <div className="mb-2 text-3xl">📍</div>

                    <p className="mb-1  crimson-text-regular text-l ">مه نوش</p>

                    <p className="vazirmatn text-xs text-[#9c8a82]">
                      ولیعصر، تهران
                    </p>

                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-full bg-[#b5614a] px-4 py-1.5 vazirmatn text-xs font-medium text-[#f5f1ea] no-underline transition-colors hover:bg-[#9f503d]"
                    >
                      باز کردن در نقشه
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[rgba(44,36,32,0.06)] bg-[#f5f1ea] p-7">
            <h2 className="mb-6 crimson-text-regular  text-2xl">نحوه دسترسی</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {transport.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-0.5 text-2xl">{item.icon}</span>

                  <div>
                    <p className="mb-1 vazirmatn text-[0.9rem] font-semibold text-[#2c2420]">
                      {item.title}
                    </p>

                    <p className="font-vazirmatn text-sm leading-[1.7] text-[#9c8a82]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 text-center">
            <p className="mb-6 vazirmatn text-sm text-[#9c8a82]">
              ما را در شبکه‌های اجتماعی دنبال کنید
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <button
                  key={social}
                  className="cursor-pointer rounded-full border border-[rgba(44,36,32,0.12)] bg-[#f5f1ea] px-6 py-2.5 vazirmatn-dark text-sm  shadow-[0_2px_10px_rgba(44,36,32,0.06)] transition-all duration-200 hover:scale-105"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
}
