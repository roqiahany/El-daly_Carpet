export default function About() {
  return (
    <div id="about" className=" bg-[#f8f1ec] py-24 px-6">
      <h2
        className="text-3xl font-bold text-[#5a3d2b] mb-6 text-center pb-12"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        عن مصنع الدالى للسجاد
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* الصورة */}
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/dhhjspn72/image/upload/v1756199273/4_jyhe3i.jpg"
            alt="about"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* التفاصيل */}
        <div className="flex-1 text-right">
          <p
            className="text-[#5a3d2b] leading-loose text-lg"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            <span className="font-semibold">
              مصنع الدالي للسجاد اليدوي – بلبيس
            </span>
            <br />
            نقدم لكم أحدث وأفضل أنواع{' '}
            <span className="font-semibold">السجاد المودرن</span> الذي يتميز
            بألوانه الجذّابة وتصميماته العصرية، مع ضمان جودة عالية وخامات متينة.
            <br />
            تتميز منتجاتنا بأنها بأسعار{' '}
            <span className="font-semibold">المصنع المباشرة</span> وليست أسعار
            التجار، لأننا نحن المصنعون الذين نورد للتجار والموردين.
            <br />
            هدفنا أن نمنح كل بيت لمسة من{' '}
            <span className="font-semibold">الفخامة</span> والراحة مع إمكانية
            تنفيذ المقاسات الخاصة بك.
          </p>
        </div>
      </div>
    </div>
  );
}
