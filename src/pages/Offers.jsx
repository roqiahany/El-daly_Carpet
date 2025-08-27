// Offers.jsx
import { useState } from 'react';
import data from '../products.json';

export default function Offers() {
  const images = data.offers || [];

  // Pagination
  const itemsPerPage = 3; // عدد الصور لكل صفحة
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = images.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-[#f8f1ec] py-32 px-6">
      <div className="max-w-7xl mx-auto">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentItems.map((img, index) => (
                <div
                  key={index}
                  className="bg-[#fdfaf8] shadow-md rounded-lg overflow-hidden hover:scale-105 transition"
                >
                  <div className="w-full aspect-[3/4] bg-white flex items-center justify-center">
                    <img
                      src={img}
                      alt={`offer-${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-[#fdfaf8] text-[#5a3d2b] shadow hover:bg-[#e8d9cc] disabled:opacity-50"
              >
                السابق
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
                className="px-4 py-2 rounded-lg bg-[#fdfaf8] text-[#5a3d2b] shadow hover:bg-[#e8d9cc] disabled:opacity-50"
              >
                التالي
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
