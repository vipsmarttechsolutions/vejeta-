import { SuccessSection } from '../components/success-section';
import { motion } from 'motion/react';

export function SuccessPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#1F3D2B] via-[#1C2E4A] to-black">
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Celebrating the achievements of our candidates who serve the nation with pride
          </motion.p>
        </div>
      </section>

      {/* Success Gallery */}
      <SuccessSection />
    </div>
  );
}
