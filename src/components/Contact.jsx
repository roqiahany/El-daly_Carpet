export default function Contact() {
  return (
    <div id="contact" className="  bg-[#fdfaf8] py-44 px-6">
      <h2
        className="text-3xl font-bold text-[#5a3d2b]  text-center mb-20"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        تواصل معنا
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* تفاصيل التواصل */}
        <div>
          <p
            className="text-gray-700 mb-6 leading-loose text-lg"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            نرحب دائمًا باستفساراتك واقتراحاتك. يمكنك التواصل معنا مباشرة عبر
            رقم الواتساب الخاص بنا للرد على جميع أسئلتك بسرعة واحترافية.
            <br />
            هدفنا أن نقدم لك أفضل خدمة ممكنة، وأن نكون دائمًا قريبين منك.
          </p>
          <a
            href="https://wa.me/201205411686" // ← رقمك
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white px-6 py-3 rounded-lg font-semibold inline-block transition"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            تواصل عبر واتساب
          </a>
        </div>

        {/* الفورم */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="الاسم"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#7e5a3d]"
            />
            <input
              type="email"
              placeholder="الإيميل"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#7e5a3d]"
            />
            <textarea
              placeholder="رسالتك"
              rows="4"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#7e5a3d]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white py-3 rounded-lg font-semibold transition"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
