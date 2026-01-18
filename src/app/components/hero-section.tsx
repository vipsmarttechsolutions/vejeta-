import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F3D2B]/95 via-[#1C2E4A]/95 to-[#1F3D2B]/95">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1585802540432-60662b65ca62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcm15JTIwc29sZGllcnMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc0NTc1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080)`
            }}
          />
        </div>
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-[#FFD43B] tracking-wider uppercase text-xs opacity-90" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              Defence Training Excellence
            </p>
          </div>
        </motion.div>

        {/* Main Heading with animated gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-[32px] sm:text-[40px] md:text-[52px] mb-4 leading-[1.2] tracking-tight"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
        >
          <motion.span 
            className="bg-gradient-to-r from-white via-[#FFD43B] to-white bg-clip-text text-transparent inline-block"
            animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Discipline • Consistency • Success
          </motion.span>
        </motion.h1>

        {/* Institute Name with float animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl mb-3 text-white"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
        >
          Vijeta Foundation, Ashta
        </motion.h2>

        {/* Subtext with staggered animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="text-base md:text-xl text-white/70 mb-12 tracking-widest max-w-3xl leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            NDA | SSC | SSB | ARMY | POLICE | NURSING
          </motion.span>
        </motion.p>

        {/* CTA Buttons with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(242, 140, 40, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3.5 bg-gradient-to-r from-[#FFD43B] to-[#F28C28] text-[#1F3D2B] rounded-full transition-all duration-300 shadow-lg text-[15px] font-semibold relative overflow-hidden group"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <motion.span
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white/20"
            />
            <span className="relative">Apply Now</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: 'rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3.5 bg-white/5 backdrop-blur-md text-white rounded-full border border-white/20 transition-all duration-300 text-[15px] font-semibold relative group"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative">Learn More</span>
          </motion.button>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10" />
    </div>
  );
}