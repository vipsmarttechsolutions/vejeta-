import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: 'Student Success Rate', value: 95, suffix: '%' },
  { label: 'Expert Instructors', value: 12, suffix: '+' },
  { label: 'Selected Candidates', value: 500, suffix: '+' },
  { label: 'Years of Experience', value: 10, suffix: '+' }
];

function CountUpNumber({ end, duration = 2, isInView }: { end: number; duration?: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span>{count}</span>;
}

export function PhysicalTrainingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Dark Background with Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C2E4A] via-[#0a0a0a] to-[#1F3D2B]">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1751730740419-8ce45dde8b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xkaWVycyUyMHJ1bm5pbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc0NTc1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 
                className="text-[24px] md:text-[32px] mb-6 bg-gradient-to-r from-white to-[#FFD43B] bg-clip-text text-transparent leading-[1.3]"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}
              >
                Physical Training
              </h2>
            </motion.div>

            {/* Animated Lines */}
            <div className="space-y-3 mb-8">
              {[
                'Daily morning physical exercise at 6 AM',
                'Fitness training under expert guidance',
                'Parade and discipline practice',
                'SSB Interview preparation and mock tests'
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-[#F28C28] to-[#FFD43B] flex-shrink-0" />
                  <p className="text-gray-300 text-[15px] leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] text-[#1F3D2B] rounded-full shadow-lg hover:shadow-[#F28C28]/30 transition-shadow duration-300 text-[15px]"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}
            >
              View Training Programs
            </motion.button>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#F28C28]/40 transition-all duration-300">
                  {/* Subtle Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F28C28]/10 to-[#FFD43B]/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="text-[38px] md:text-[42px] mb-1 bg-gradient-to-r from-[#FFD43B] to-[#F28C28] bg-clip-text text-transparent leading-none" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}>
                      <CountUpNumber end={stat.value} isInView={isInView} />
                      {stat.suffix}
                    </div>
                    <div className="text-gray-400 text-[13px] leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>

                  {/* Progress Bar Animation */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-0.5 mt-4 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] rounded-full origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}