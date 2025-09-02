import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    name: 'استقبال',
    image:
      'https://res.cloudinary.com/dhhjspn72/image/upload/v1755679076/reception-34_a9rukk.jpg',
    slug: 'استقبال',
  },
  {
    name: 'زهور',
    image:
      'https://res.cloudinary.com/dhhjspn72/image/upload/v1755678919/flower-12_p45pfi.jpg',
    slug: 'زهور',
  },
  {
    name: 'طرقة',
    image:
      'https://res.cloudinary.com/dhhjspn72/image/upload/v1755678951/hallway-7_l8lrjt.jpg',
    slug: 'طرقة',
  },
  {
    name: 'أطفال',
    image:
      'https://res.cloudinary.com/dhhjspn72/image/upload/v1755679069/reception-44_idfcqa.jpg',
    slug: 'أطفال',
  },
  {
    name: '50%خصومات',
    image:
      'https://res.cloudinary.com/dhhjspn72/image/upload/v1755679045/offer-7_qv9rz5.jpg',
    slug: 'خصومات',
  },
];

export default function Slider() {
  return (
    <div className="bg-[#f8f1ec] py-10">
      <section
        id="products"
        className="py-16 px-6 max-w-7xl rounded-xl mx-auto relative  "
      >
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-bold text-[#5a3d2b] mb-6"
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            منتجاتنا
          </h2>
          <p
            className="text-xl text-[#7e5a3d]"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            عندنا كل اللي هتحتاجه على ذوقك
          </p>
        </div>

        {/* السهم الشمال */}
        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 bg-[#fdfaf8] text-[#7e5a3d] hover:text-[#5a3d2b] rounded-full w-14 h-14 flex items-center justify-center shadow-md z-10">
          <ChevronLeft size={28} />
        </button>

        {/* السهم اليمين */}
        <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 bg-[#fdfaf8] text-[#7e5a3d] hover:text-[#5a3d2b] rounded-full w-14 h-14 flex items-center justify-center shadow-md z-10">
          <ChevronRight size={28} />
        </button>

        {/* السلايدر */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.slug}>
              <div className="bg-[#fdfaf8] shadow-md rounded-lg overflow-hidden hover:scale-105 transition flex flex-col my-5 ">
                <div className="w-full aspect-[3/4] bg-white flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-4 pb-0 pe-0 ps-0 flex flex-col items-center flex-grow gap-3">
                  <h3
                    className="text-sm sm:text-base font-semibold text-[#5a3d2b] text-center truncate"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                  >
                    {cat.name}
                  </h3>

                  <Link
                    to={`/products/${cat.slug}`}
                    style={{ fontFamily: 'Tajawal, sans-serif' }}
                    className="bg-[#7e5a3d] hover:bg-[#5a3d2b] text-white w-full block text-center py-2 rounded-lg text-sm sm:text-base lg:text-lg transition m-0"
                  >
                    عرض
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-6 flex justify-center [&>.swiper-pagination-bullet]:bg-[#d6c0b3] [&>.swiper-pagination-bullet-active]:bg-[#7e5a3d]"></div>
      </section>
    </div>
  );
}
