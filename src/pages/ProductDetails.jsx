import { useParams } from 'react-router-dom';
import data from '../products.json';
import { useEffect, useState } from 'react';
import {
  FaShippingFast,
  FaMoneyBillWave,
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaTimes,
} from 'react-icons/fa';
import Slider from '../components/slider';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function ProductDetails() {
  const { addItem } = useContext(CartContext);
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

  const product = {
    id: `${category}-${id}`,
    name: `سجادة ${arabicName} #${parseInt(id) + 1}`,
    price: 450, // السعر المبدئي
    image: productImage,
  };

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // تختفي بعد ثانية ونصف
  };
  const [added, setAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setAnimate(true);
      setTimeout(() => setAnimate('pop'), 200);
    } else {
      setAnimate(false);
    }
  }, [isModalOpen]);

  if (!productImage) {
    return (
      <div className="p-10 text-center text-red-500">❌ المنتج غير موجود</div>
    );
  }

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setAnimate(true), 50); // تأخير بسيط عشان يشتغل الـ transition
  };

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => setIsModalOpen(false), 300); // نفس زمن الـ transition
  };

  return (
    <>
      <div className="min-h-screen bg-[#f8f1ec] pt-15 px-6 flex justify-center items-center ">
        <div className="bg-[#fdfaf8] p-8 rounded-xl shadow-lg flex flex-col lg:flex-row gap-8 max-w-5xl w-full">
          {/* صورة المنتج */}
          <div className="relative flex-1 flex items-center justify-center">
            <img
              src={productImage}
              alt={`${arabicName}-${id}`}
              className={`rounded-lg shadow-lg transform transition-all duration-300
    ${animate === true ? 'scale-90 opacity-0' : ''}
    ${animate === 'pop' ? 'scale-100 opacity-100' : ''} 
  max-h-[90%] max-w-[90%]`}
              onClick={openModal}
            />
            <button
              onClick={openModal}
              className="absolute bottom-2 right-2 p-3 rounded-full bg-[#fdfaf8] text-[#5a3d2b] shadow hover:bg-[#e8d9cc]"
            >
              اضغط للتكبير
            </button>
          </div>

          {/* تفاصيل المنتج */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#5a3d2b] mb-4">
                سجادة {arabicName} #{parseInt(id) + 1}
              </h1>
              <p className="text-[#5a3d2b] mb-6 leading-loose text-lg">
                تم تصميم هذه السجادة لأحد عملائنا ، ويمكنك طلب نفس التصميم
                باللون والحجم الذي تختاره ليناسب احتياجاتك الخاصة.
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
                الأسعار تبدأ من <span className="font-semibold">450</span> جنيه
                و تختلف حسب المقاسات المطلوبه .
              </p>

              <p className="text-lg font-semibold text-[#7e5a3d] mb-6">
                السعر المبدئي: 450 جنيه
              </p>
            </div>

            {/* أزرار الأكشن */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="https://wa.me/201286178631"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-lg font-semibold transition whitespace-nowrap"
              >
                <FaWhatsapp size={18} /> واتساب
              </a>

              <a
                href="tel:01286178631"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white py-3 rounded-lg font-semibold transition whitespace-nowrap"
              >
                <FaPhoneAlt size={18} /> اتصال
              </a>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center gap-2 bg-[#5a3d2b] hover:bg-[#744f34] text-white py-3 px-4 rounded-lg font-semibold transition"
              >
                أضف للعربة
              </button>

              {added && (
                <div className="fixed top-20 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
                  تم إضافة المنتج للعربة
                </div>
              )}
            </div>

            {/* أيقونات الثقة */}

            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-around gap-2 sm:gap-4 text-[#5a3d2b] text-sm sm:text-lg font-semibold text-center">
              <div className="flex items-center justify-center gap-2">
                <FaShippingFast className="text-[#7e5a3d]" size={20} />
                <span>توصيل سريع</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaMoneyBillWave className="text-[#7e5a3d]" size={20} />
                <span>دفع عند الاستلام</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
                <FaCheckCircle className="text-[#7e5a3d]" size={20} />
                <span>ضمان الجودة</span>
              </div>
            </div>
          </div>
        </div>

        {/* مودال لتكبير الصورة */}
        {isModalOpen && (
          <div
            className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300
    ${
      animate
        ? 'bg-black bg-opacity-75 opacity-100'
        : 'bg-black bg-opacity-0 opacity-0'
    }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-3 rounded-full bg-[#fdfaf8] text-[#5a3d2b] shadow hover:bg-[#e8d9cc]"
            >
              <FaTimes size={20} />
            </button>
            <img
              src={productImage}
              alt="تكبير الصورة"
              className={`rounded-lg shadow-lg transform transition-all duration-300 ${
                animate ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              } max-h-[90%] max-w-[90%]`}
            />
          </div>
        )}

        {/* منتجات مشابهة */}
      </div>
      <Slider />
    </>
  );
}
