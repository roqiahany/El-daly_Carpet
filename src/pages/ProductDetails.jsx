import { useParams } from 'react-router-dom';
import data from '../products.json';

export default function ProductDetails() {
  const slugToArabic = {
    reception: 'استقبال',
    hallway: 'طرقة',
    flowers: 'زهور',
    kids: 'أطفال',
    offers: 'خصومات',
  };

  const { category, id } = useParams();
  const images = data[category] || [];
  const arabicName = slugToArabic[category];
  const productIndex = parseInt(id, 10);
  const productImage = images[productIndex];

  if (!productImage) {
    return (
      <div className="p-10 text-center text-red-500">❌ المنتج غير موجود</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f1ec] pt-15 px-6 flex justify-center items-center ">
      <div className="bg-[#fdfaf8] p-8 rounded-xl shadow-lg flex flex-col lg:flex-row gap-8 max-w-5xl w-full">
        {/* صورة المنتج */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={productImage}
            alt={`${arabicName}-${id}`}
            className="max-h-[500px] w-auto rounded-lg shadow-md object-contain"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#5a3d2b] mb-4">
              سجادة {arabicName} #{parseInt(id) + 1}
            </h1>
            <p className="text-[#5a3d2b] mb-6 leading-loose text-lg">
              تم تصميم هذه السجادة لأحد عملائنا ، ويمكنك طلب نفس التصميم باللون
              والحجم الذي تختاره ليناسب احتياجاتك الخاصة.
              <br />
              تتميز هذه السجادة بأنها تمنح بيتك{' '}
              <span className="font-semibold">فخامة وجاذبية</span>
              وتضيف لمسة راقية على أي مساحة في منزلك.
              <br />
              مصنوعة من{' '}
              <span className="font-semibold"> أجود وأفخم الخامات</span>
              المتوفرة في السوق، وتُعرف بكونها من{' '}
              <span className="font-semibold">
                أكثر أنواع السجاد متانة وثِقلاً
              </span>
              ، مما يجعلها الاختيار الأمثل لعشاق الجودة والفخامة.
              <br />
              الأسعار تبدأ من <span className="font-semibold">450</span> جنيه و
              تختلف حسب المقاسات المطلوبه .
            </p>

            <p className="text-lg font-semibold text-[#7e5a3d] mb-6">
              السعر المبدئي: 450 جنيه
            </p>
          </div>

          {/* أزرار الأكشن */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/201205411686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white py-3 rounded-lg text-center font-semibold transition"
              style={{ fontFamily: 'Tajawal, sans-serif' }}
            >
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
