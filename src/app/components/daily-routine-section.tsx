import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Clock } from 'lucide-react';

const routineItems = [
  { time: '06:00', activity: 'Physical Training', description: 'Running, exercises, yoga' },
  { time: '08:00', activity: 'Breakfast', description: 'Nutritious meal' },
  { time: '09:00', activity: 'Academic Classes', description: 'Subject studies' },
  { time: '13:00', activity: 'Lunch & Rest', description: 'Midday break' },
  { time: '14:00', activity: 'Specialized Training', description: 'SSB, GD, Interview' },
  { time: '17:00', activity: 'Parade Practice', description: 'Discipline training' },
  { time: '19:00', activity: 'Self-Study', description: 'Homework and practice' },
  { time: '21:00', activity: 'Rest', description: 'End of day' }
];

export function DailyRoutineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
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
            Daily Schedule
          </h2>
          <p className="text-gray-600 text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
            Disciplined and well-planned daily routine
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal Scroll */}
        <div className="hidden lg:block relative">
          {/* Progress Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1F3D2B] via-[#F28C28] to-[#FFD43B] origin-left"
          />

          <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide">
            {routineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="flex-shrink-0 w-56"
              >
                {/* Time Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                  className="relative mb-6 mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-[#1F3D2B] to-[#F28C28] flex items-center justify-center shadow-md"
                >
                  <Clock className="w-5 h-5 text-white" />
                </motion.div>

                {/* Card */}
                <div className="p-5 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg hover:border-[#F28C28]/30 transition-all duration-300">
                  <div className="text-2xl mb-1.5 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] bg-clip-text text-transparent leading-none" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}>
                    {item.time}
                  </div>
                  <h3 className="text-[16px] mb-1 text-[#1F3D2B] leading-tight" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}>
                    {item.activity}
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden relative">
          {/* Vertical Progress Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1F3D2B] via-[#F28C28] to-[#FFD43B] origin-top"
          />

          <div className="space-y-6 pl-16">
            {routineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                {/* Time Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  className="absolute -left-[3.75rem] top-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#1F3D2B] to-[#F28C28] flex items-center justify-center shadow-md"
                >
                  <Clock className="w-4 h-4 text-white" />
                </motion.div>

                {/* Card */}
                <div className="p-4 rounded-xl bg-white shadow-md border border-gray-100">
                  <div className="text-xl mb-1 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] bg-clip-text text-transparent leading-none" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}>
                    {item.time}
                  </div>
                  <h3 className="text-[15px] mb-1 text-[#1F3D2B] leading-tight" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}>
                    {item.activity}
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}