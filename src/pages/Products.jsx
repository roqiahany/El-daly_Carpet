import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // 👈 الأيقونات
import data from '../products.json';

export default function Products() {
  const navigate = useNavigate();
  const slugMap = {
    استقبال: 'reception',
    طرقة: 'hallway',
    زهور: 'flowers',
    أطفال: 'kids',
    خصومات: 'offers',
  };

  const { category } = useParams();
  const images = data[slugMap[category]] || [];

  // عدد المنتجات لكل صفحة
  const getItemsPerPage = () => {
    if (window.innerWidth < 768) return 6; // موبايل: 3×3
    return 9; // ديسكتوب: 4×3
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [currentPage, setCurrentPage] = useState(1);

  // تحديث عند تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Slice المنتجات حسب الصفحة الحالية
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = images.slice(startIndex, startIndex + itemsPerPage);

  // تغيير الصفحة
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-[#f8f1ec] py-10 px-10">
      <div className="p-6 max-w-7xl mx-auto ">
        <h1
          className="text-3xl font-bold mb-8 text-center text-[#5a3d2b] pt-10"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          سجاد {category}
        </h1>

        {images.length === 0 ? (
          <p className="text-gray-500 text-center">
            لا توجد منتجات في هذا القسم
          </p>
        ) : (
          <>
            {/* Grid of products */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3">
              {currentItems.map((img, index) => (
                <div
                  key={index}
                  className="bg-[#fdfaf8] shadow-md rounded-lg overflow-hidden hover:scale-105 transition flex flex-col"
                >
                  {/* الصورة */}
                  <div className="w-full aspect-[3/4] bg-white flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${category}-${startIndex + index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* الاسم + زر */}
                  <div className="pt-4 flex flex-col items-center gap-3 flex-1 justify-between">
                    <h3
                      className="text-lg font-semibold text-[#5a3d2b]"
                      style={{ fontFamily: 'Cairo, sans-serif' }}
                    >
                      {category} {startIndex + index + 1}
                    </h3>
                    <button
                      onClick={() =>
                        navigate(
                          `/product/${slugMap[category]}/${startIndex + index}`
                        )
                      }
                      className="bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white w-full py-2 rounded-lg text-sm transition"
                      style={{ fontFamily: 'Tajawal, sans-serif' }}
                    >
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 rounded-full bg-[#fdfaf8] text-[#5a3d2b] shadow hover:bg-[#e8d9cc] disabled:opacity-50"
              >
                <FiChevronLeft size={24} />
              </button>

              <span
                className="text-[#5a3d2b]"
                style={{ fontFamily: 'Tajawal, sans-serif' }}
              >
                صفحة {currentPage} من {totalPages}
              </span>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-[#fdfaf8] text-[#5a3d2b] shadow hover:bg-[#e8d9cc] disabled:opacity-50"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
