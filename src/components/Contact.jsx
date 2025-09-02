import { FaWhatsapp, FaFacebookF, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="contact" className="bg-[#fdfaf8] py-24 px-6">
      <h2
        className="text-3xl font-bold text-[#5a3d2b] text-center mb-20"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        تواصل معنا
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* تفاصيل التواصل */}
        <div className="flex flex-col items-center justify-center text-right">
          <p
            className="text-[#5a3d2b]  mb-10 leading-loose text-lg"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            نرحب دائمًا باستفساراتك واقتراحاتك. يمكنك التواصل معنا مباشرة عبر
            الهاتف أو الواتساب أو متابعة صفحتنا على فيسبوك. هدفنا أن نقدم لك
            أفضل خدمة ممكنة، وأن نكون دائمًا قريبين منك.
          </p>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            {/* زر الهاتف */}
            <a
              href="tel:01286178631"
              className="flex items-center justify-center gap-3 bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white px-6 py-3 rounded-lg font-semibold transition"
              style={{ fontFamily: 'Tajawal, sans-serif' }}
            >
              <FaPhoneAlt className="text-xl" />
              تواصل عبر الهاتف
            </a>

            {/* زر واتساب */}
            <a
              href="https://wa.me/201286178631"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white px-6 py-3 rounded-lg font-semibold transition"
              style={{ fontFamily: 'Tajawal, sans-serif' }}
            >
              <FaWhatsapp className="text-xl" />
              تواصل عبر واتساب
            </a>

            {/* زر فيسبوك */}
            <a
              href="https://www.facebook.com/Moderncarpets1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white px-6 py-3 rounded-lg font-semibold transition"
              style={{ fontFamily: 'Tajawal, sans-serif' }}
            >
              <FaFacebookF className="text-xl" />
              صفحتنا على فيسبوك
            </a>
          </div>
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
