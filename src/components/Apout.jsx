export default function About() {
  return (
    <div id="about" className=" bg-[#f8f1ec] py-44 px-6">
      <h2
        className="text-3xl font-bold text-[#5a3d2b] mb-6 text-center pb-12"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        من نحن؟
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
        <div className="flex-1">
          <p
            className="text-gray-700 leading-loose text-lg"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            تم تأسيس هذا المصنع منذ أكثر من{' '}
            <span className="font-semibold">7 سنوات</span> في محافظة الشرقية،
            ونجحنا خلال هذه الفترة في التعاون مع أكثر من{' '}
            <span className="font-semibold">50 محل</span> لبيع السجاد داخل مصر.
            <br />
            كما قمنا بتجهيز أكثر من{' '}
            <span className="font-semibold">200 شقة</span> في جميع أنحاء جمهورية
            مصر العربية، ونسعى قريبًا للتوسع في جميع دول العالم.
            <br />
            اكتسبنا ثقة عملائنا بفضل الجودة العالية، التصميمات العصرية، والخامات
            المتينة التي تليق بمنازلهم. هدفنا دائمًا أن نوفر لك سجادة تُضفي{' '}
            <span className="font-semibold">فخامة</span>،
            <span className="font-semibold">جاذبية</span>، وأجواء راقية في بيتك.
          </p>
        </div>
      </div>
    </div>
  );
}
