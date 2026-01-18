import { PhysicalTrainingSection } from '../components/physical-training-section';
import { DailyRoutineSection } from '../components/daily-routine-section';
import { motion } from 'motion/react';
import { Dumbbell, TrendingUp, Timer, Award } from 'lucide-react';

const trainingFeatures = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build core strength and muscle endurance required for defence services'
  },
  {
    icon: TrendingUp,
    title: 'Progressive Overload',
    description: 'Scientifically planned training to gradually improve performance'
  },
  {
    icon: Timer,
    title: 'Timed Drills',
    description: 'Practice under time pressure to meet examination standards'
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Training supervised by ex-servicemen and certified trainers'
  }
];

export function PhysicalTrainingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1C2E4A] via-black to-[#1F3D2B] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1751730740419-8ce45dde8b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xkaWVycyUyMHJ1bm5pbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc0NTc1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Physical Training Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Build the strength, stamina, and discipline required for defence services
          </motion.p>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#F28C28]/40 transition-all"
              >
                <feature.icon className="w-10 h-10 text-[#F28C28] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Training Stats Section */}
      <PhysicalTrainingSection />

      {/* Daily Routine Section */}
      <DailyRoutineSection />
    </div>
  );
}
