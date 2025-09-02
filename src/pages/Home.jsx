import { Link } from 'react-router-dom';
import Slider from '../components/slider';
import About from '../components/Apout';
import Contact from '../components/Contact';
import TestimonialsSlider from '../components/TestimonialsSlider';
import { Typewriter } from 'react-simple-typewriter';

const heroImage =
  'https://res.cloudinary.com/dhhjspn72/image/upload/v1756199273/4_jyhe3i.jpg';

export default function Home() {
  return (
    <div className="bg-[#f8f1ec] ">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#502307]/30"></div>

        {/* Text Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center mb-5">
          <div>
            <h1
              className="text-4xl md:text-6xl font-bold text-[#f8f1ec]"
              style={{
                fontFamily: 'Cairo, sans-serif',
                textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
                direction: 'rtl', // 👈 يخلي الكتابة من اليمين لليسار
                unicodeBidi: 'plaintext',
              }}
            >
              <Typewriter
                words={['أهلاً بيك في مصنع الدالي للسجاد اليدوي']}
                loop={true} // 👈 يخليها تتكرر
                typeSpeed={70} // سرعة الكتابة
                deleteSpeed={50} // سرعة المسح
                delaySpeed={2000} // وقت التوقف قبل إعادة الكتابة
                cursor
                cursorStyle="|"
              />
            </h1>
          </div>
        </div>
      </div>

      <Slider />
      <TestimonialsSlider />
      <About />
      <Contact />
    </div>
  );
}
