import { motion } from 'motion/react';
import { Shield, Trophy, Heart, Users, GraduationCap, Target } from 'lucide-react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'NDA',
    subtitle: 'National Defence Academy',
    gradient: 'from-[#1F3D2B] to-[#2d5a3f]'
  },
  {
    id: 2,
    icon: Trophy,
    title: 'SSC',
    subtitle: 'Short Service Commission',
    gradient: 'from-[#1C2E4A] to-[#2a4469]'
  },
  {
    id: 3,
    icon: Target,
    title: 'SSB',
    subtitle: 'Service Selection Board',
    gradient: 'from-[#F28C28] to-[#d67418]'
  },
  {
    id: 4,
    icon: Shield,
    title: 'ARMY',
    subtitle: 'Indian Armed Forces',
    gradient: 'from-[#1F3D2B] to-[#163020]'
  },
  {
    id: 5,
    icon: Users,
    title: 'POLICE',
    subtitle: 'Police Forces',
    gradient: 'from-[#1C2E4A] to-[#151f33]'
  },
  {
    id: 6,
    icon: Heart,
    title: 'NURSING',
    subtitle: 'Nursing Department',
    gradient: 'from-[#F28C28] to-[#c47220]'
  }
];

export function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1F3D2B]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <Link to="/programs">
            <h2 
              className="text-[24px] md:text-[32px] mb-3 bg-gradient-to-r from-white to-[#FFD43B] bg-clip-text text-transparent leading-[1.3] cursor-pointer hover:opacity-80 transition-opacity duration-300"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}
            >
              Our Programs
            </h2>
          </Link>
          <p className="text-white/60 text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
            Specialized training programs to help you achieve your goals
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, index) => {
            const programUrl = `/program/${course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
            return (
              <Link key={course.id} to={programUrl} className="group relative">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-7 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#F28C28]/40 hover:bg-white/[0.07] cursor-pointer">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F28C28]/20 to-[#FFD43B]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-[#F28C28] to-[#FFD43B] flex items-center justify-center shadow-md group-hover:shadow-[#F28C28]/30 transition-shadow duration-300">
                      <course.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-[19px] mb-1.5 text-white group-hover:text-[#FFD43B] transition-colors duration-300 leading-tight"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}
                    >
                      {course.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-white/60 text-[14px] group-hover:text-white/70 transition-colors duration-300 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
                      {course.subtitle}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      className="mt-4 text-[#F28C28] flex items-center gap-2 text-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <span style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 500 }}>Learn More</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}