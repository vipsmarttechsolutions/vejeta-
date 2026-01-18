import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Trained Candidates' },
  { icon: Award, value: '95%', label: 'Success Rate' },
  { icon: Target, value: '12+', label: 'Expert Trainers' },
  { icon: TrendingUp, value: '10+', label: 'Years Experience' }
];

const timeline = [
  { year: '2014', title: 'Foundation Established', description: 'Started with a vision to train future defence leaders' },
  { year: '2016', title: 'First NDA Selection', description: '50+ candidates cleared NDA exam' },
  { year: '2019', title: 'Expanded Programs', description: 'Added SSB, Police, and Nursing training' },
  { year: '2024', title: 'State Recognition', description: 'Awarded best defence training institute in Maharashtra' }
];

export function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1F3D2B] via-[#1C2E4A] to-black overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1585802540432-60662b65ca62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcm15JTIwc29sZGllcnN8ZW58MXx8fHwxNzY3NDU3NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl mb-6 text-white leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Discipline. Consistency. Success.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Training future leaders for Defence and Public Service since 2014
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#F28C28]" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-black to-[#1F3D2B]/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
            >
              <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                Our Vision
              </h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                To be India's leading defence training institute, shaping disciplined, skilled, and confident individuals who serve the nation with pride and excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
            >
              <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                Our Mission
              </h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                To provide comprehensive training that combines physical fitness, mental strength, and academic excellence, preparing candidates for success in defence and public service examinations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#1F3D2B]/20 to-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center mb-16 text-white"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Our Journey
          </motion.h2>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#F28C28] to-[#FFD43B] text-[#1F3D2B] font-bold text-sm">
                    {item.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 mt-2 rounded-full bg-[#F28C28]" />
                <div className="flex-1 pb-8 border-b border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
