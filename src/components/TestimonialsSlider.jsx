import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../products.json';
import { FaStar } from 'react-icons/fa';

export default function TestimonialsSlider() {
  const testimonials = data.testimonials || [];

  return (
    <div className=" bg-[#fdfaf8] py-10">
      <section
        id="testimonials"
        className="py-16 px-6 max-w-7xl rounded-xl mx-auto relative"
      >
        {/* العنوان */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-bold text-[#5a3d2b] mb-6"
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            آراء عملاؤنا
          </h2>
          <p
            className="text-xl text-[#7e5a3d]"
            style={{ fontFamily: 'Tajawal, sans-serif' }}
          >
            ثقة عملاؤنا هي سر نجاحنا
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
          slidesPerView={3}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#fdfaf8] shadow-md rounded-lg overflow-hidden hover:scale-105 transition flex flex-col my-5">
                <div className="w-full aspect-square bg-white flex items-center justify-center">
                  <img
                    src={testimonial.img}
                    alt={`testimonial-${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col items-center text-center">
                  <div className="flex mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-[#5a3d2b] text-lg mb-2">
                    {testimonial.comment}
                  </p>
                  <span className="text-[#7e5a3d] font-semibold">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* الباجيناشن */}
        <div className="custom-pagination mt-6 flex justify-center [&>.swiper-pagination-bullet]:bg-[#d6c0b3] [&>.swiper-pagination-bullet-active]:bg-[#7e5a3d]"></div>
      </section>
    </div>
  );
}
