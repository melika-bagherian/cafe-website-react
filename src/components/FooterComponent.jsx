export default function Footer({ onNav }) {
  const pages = [
    ["home", "خانه"],
    ["menu", "منو"],
    ["about", "درباره ما"],
    ["location", "موقعیت"],
  ];

  return (
    <footer dir="rtl" className="bg-[#2c2420] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <h2 className="mb-4 crimson-default text-[1.6rem] text-[#f5f1ea]">
              مه نوش
            </h2>

            <p className="vazirmatn-slight text-sm leading-[1.8] ">
              جایی برای لحظه‌هایی که اهمیت دارند. از سال ۱۴۰۰ در قلب تهران.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <p className="mb-4 vazirmatn text-xs tracking-[0.15em] text-[rgba(245,241,234,0.4)]">
                صفحات
              </p>

              {pages.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => {
                    onNav(id);
                    window.scrollTo({ top: 0 });
                  }}
                  className="mb-3 block cursor-pointer vazirmatn text-sm text-[rgba(245,241,234,0.6)] transition-colors duration-200 hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <p className="mb-4 vazirmatn text-xs tracking-[0.15em] text-[rgba(245,241,234,0.4)]">
                تماس
              </p>

              <p className="mb-3 vazirmatn-slight text-sm ">ولیعصر، تهران</p>

              <p className="mb-3 vazirmatn-slight text-sm ">۰۲۱ – ۸۸۷۷۶۶۵۵</p>

              <p className="mb-3 vazirmatn-slight text-sm ">
                hello@mahnoush.ir
              </p>
              <a
                className="vazirmatn-slight text-sm  "
                href="https://instagram.com/mahnoush.cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(245,241,234,0.1)] pt-8 sm:flex-row">
          <p className="vazirmatn-light text-xs ]">
            © ۱۴۰۳ مه نوش — تمامی حقوق محفوظ است
          </p>

          <p className="vazirmatn-light text-xs ">
            ساخته‌شده با ☕ و عشق در تهران
          </p>
        </div>
      </div>
    </footer>
  );
}
