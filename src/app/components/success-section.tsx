import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const successStories = [
  {
    id: 1,
    name: 'Rahul Patil',
    selection: 'NDA 2024',
    image: '/images/soldier1.png',
    bgColor: '#1F3D2B'
  },
  {
    id: 3,
    name: 'Vikram Deshmukh',
    selection: 'SSC 2023',
    image: '/images/download (1).jpg',
    bgColor: '#2E5090'
  },
  {
    id: 5,
    name: 'Sandeep Jadhav',
    selection: 'SSB 2023',
    image: '/images/download (2).jpg',
    bgColor: '#4A7C9E'
  },
  {
    id: 7,
    name: 'Anjali Verma',
    selection: 'Army Officer 2024',
    image: '/images/download (3).jpg',
    bgColor: '#6B8CAE'
  },
  {
    id: 9,
    name: 'Rajesh Verma',
    selection: 'Air Force 2023',
    image: '/images/close-up-of-a-navy-officer-smiling-DH41B8.jpg',
    bgColor: '#A85A5A'
  },
  {
    id: 10,
    name: 'Priya Nair',
    selection: 'Navy 2024',
    image: '/images/download (4).jpg',
    bgColor: '#5A7A9E'
  },
  {
    id: 11,
    name: 'Rohit Sharma',
    selection: 'Police Force 2023',
    image: '/images/download (5).jpg',
    bgColor: '#8B6B5A'
  },
  {
    id: 12,
    name: 'Neha Patel',
    selection: 'Army Selection 2024',
    image: '/images/download (6).jpg',
    bgColor: '#6B8C5A'
  },
  {
    id: 13,
    name: 'Nikhil Reddy',
    selection: 'Armed Forces 2023',
    image: '/images/pexels-micklatter-31539448.jpg',
    bgColor: '#7A5A9E'
  }
];

export function SuccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth continuous scrolling animation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 1;
        const itemWidth = 360; // Card width + gap (320 + 40)
        const totalWidth = itemWidth * successStories.length;
        
        // Reset to beginning for infinite scroll
        return newOffset >= totalWidth ? 0 : newOffset;
      });
    }, 30); // Smooth 30ms intervals

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    const itemWidth = 360;
    setOffset((prev) => {
      const newOffset = prev + itemWidth;
      const totalWidth = itemWidth * successStories.length;
      return newOffset >= totalWidth ? 0 : newOffset;
    });
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    const itemWidth = 360;
    setOffset((prev) => {
      return prev <= 0 ? (itemWidth * successStories.length) - itemWidth : prev - itemWidth;
    });
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[24px] md:text-[32px] mb-3 bg-gradient-to-r from-[#1F3D2B] to-[#F28C28] bg-clip-text text-transparent leading-[1.3]"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}
          >
            Success Stories
          </h2>
          <p className="text-gray-600 text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
            Celebrating our students' achievements and selections
          </p>
        </motion.div>

        {/* Sliding Carousel - Multiple Items */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden md:flex"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Wrapper with smooth transform */}
            <div className="overflow-hidden px-4 md:px-16">
              <div 
                className="flex gap-6 md:gap-8 transition-transform duration-300 ease-linear"
                style={{
                  transform: `translateX(-${offset}px)`,
                  transition: 'transform 0.03s linear'
                }}
              >
                {successStories.map((story, index) => (
                  <div
                    key={`${story.id}-${index}`}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
                  >
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-black h-80 md:h-96 cursor-pointer">
                      {/* Image */}
                      <img 
                        src={story.image}
                        alt={`${story.name} profile image`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Selection Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#FFD43B] to-[#F28C28] text-[#1F3D2B] text-xs font-bold z-10" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        ✓ Selected
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD43B] to-[#F28C28] flex items-center justify-center flex-shrink-0">
                            <span className="text-[#1F3D2B] font-bold text-lg">{story.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h3 
                              className="text-lg font-bold text-white"
                              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                            >
                              {story.name}
                            </h3>
                            <p 
                              className="text-[#FFD43B] text-sm"
                              style={{ fontFamily: "'Hind', sans-serif" }}
                            >
                              {story.selection}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Text */}
          <div className="text-center mt-6 text-gray-600">
            <p style={{ fontFamily: "'Hind', sans-serif" }}>Scroll smoothly to view all success stories →</p>
          </div>
        </div>
      </div>
    </section>
  );
}