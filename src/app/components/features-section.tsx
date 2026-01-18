import { motion } from 'motion/react';
import { BookOpen, Wifi, Dumbbell, MessageCircle, Award, MapPin } from 'lucide-react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const features = [
  {
    icon: BookOpen,
    title: 'Updated Study Materials',
    description: 'Latest curriculum-aligned notes and resources'
  },
  {
    icon: Wifi,
    title: 'Online + Offline Classes',
    description: 'Flexible hybrid learning with all amenities'
  },
  {
    icon: Dumbbell,
    title: 'Physical Training',
    description: 'Fitness and exercise focused training'
  },
  {
    icon: MessageCircle,
    title: 'SSB Interview Guidance',
    description: 'Expert mentoring and personalized guidance'
  },
  {
    icon: Award,
    title: 'Experienced Instructors',
    description: 'Ex-defence officers and subject experts'
  },
  {
    icon: MapPin,
    title: 'Premium Location',
    description: 'State-of-the-art facilities and campus'
  }
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#F28C28]/10 to-[#FFD43B]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#1F3D2B]/10 to-[#2E5090]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD43B] to-[#F28C28] text-[#1F3D2B] text-xs font-bold mb-4"
          >
            KEY FEATURES
          </motion.div>
          
          <h2 
            className="text-[24px] md:text-[32px] mb-3 bg-gradient-to-r from-[#1F3D2B] to-[#F28C28] bg-clip-text text-transparent leading-[1.3]"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}
          >
            Why Choose Vijeta Foundation?
          </h2>
          <p className="text-gray-600 text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
            Comprehensive facilities designed for your success
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, rotate: 2, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#F28C28]/30 overflow-hidden">
                {/* Animated gradient background on hover */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#F28C28]/8 to-[#FFD43B]/8 rounded-2xl" 
                />
                
                {/* Animated border glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl border border-[#F28C28]/20 pointer-events-none"
                />
                
                <div className="relative z-10">
                  {/* Icon with rotation animation */}
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#1F3D2B] to-[#2d5a3f] flex items-center justify-center group-hover:from-[#F28C28] group-hover:to-[#FFD43B] transition-all duration-500 shadow-lg"
                  >
                    <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>

                  {/* Title with gradient animation */}
                  <motion.h3 
                    initial={{ color: '#1F3D2B' }}
                    whileHover={{ color: '#F28C28' }}
                    className="text-[18px] mb-2 group-hover:text-[#F28C28] transition-colors duration-300 leading-tight"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-600 text-[14px] leading-relaxed group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: "'Hind', sans-serif" }}>
                    {feature.description}
                  </p>
                </div>

                {/* Animated bottom border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}