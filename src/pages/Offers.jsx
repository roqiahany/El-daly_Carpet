import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import data from '../products.json';

export default function Offers() {
  const images = data.offers || [];

  // عدد المنتجات في كل صفحة (صفين × عمودين = 4)
  const getItemsPerPage = () => {
    if (window.innerWidth < 768) return 4; // موبايل صف واحد
    return 4; // ديسكتوب صفين × عمودين
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = images.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-[#f8f1ec] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-8 text-center text-[#5a3d2b]"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          العروض الخاصة
        </h2>

        {images.length === 0 ? (
          <p className="text-gray-500 text-center">لا توجد عروض حالياً</p>
        ) : (
          <>
            {/* Grid of offers */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {currentItems.map((img, index) => (
                <div
                  key={index}
                  className="bg-[#fdfaf8] shadow-md rounded-lg overflow-hidden hover:scale-105 transition flex flex-col"
                >
                  <div className="w-full aspect-[3/4] bg-white flex items-center justify-center">
                    <img
                      src={img}
                      alt={`offer-${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h3
                      className="text-sm sm:text-base font-semibold text-[#5a3d2b]"
                      style={{ fontFamily: 'Cairo, sans-serif' }}
                    >
                      عرض {startIndex + index + 1}
                    </h3>
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
                <FiChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>

              <span
                className="text-[#5a3d2b] text-sm sm:text-base whitespace-nowrap"
                style={{ fontFamily: 'Tajawal, sans-serif' }}
              >
                صفحة {currentPage} من {totalPages}
              </span>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-[#fdfaf8] text-[#5a3d2b] shadow hover:bg-[#e8d9cc] disabled:opacity-50"
              >
                <FiChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
