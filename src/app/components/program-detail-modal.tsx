import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Users, BookOpen, Award, CalendarDays } from 'lucide-react';

interface ProgramDetailModalProps {
  program: {
    title: string;
    eligibility: string;
    duration: string;
    features: string[];
    curriculum: string[];
    faculty: Array<{
      name: string;
      role: string;
      experience: string;
    }>;
    schedule: {
      startDate: string;
      batches: string[];
      timing: string;
    };
    successStories: Array<{
      name: string;
      selection: string;
      year: string;
    }>;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProgramDetailModal({ program, isOpen, onClose }: ProgramDetailModalProps) {
  if (!program) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#1F3D2B] to-[#F28C28] p-8 rounded-t-3xl flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {program.title}
                </h2>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-[#1F3D2B]/10 to-[#F28C28]/10 p-4 rounded-xl border border-[#F28C28]/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={18} className="text-[#F28C28]" />
                      <p className="text-sm text-gray-600" style={{ fontFamily: "'Hind', sans-serif" }}>Eligibility</p>
                    </div>
                    <p className="font-semibold text-[#1F3D2B]" style={{ fontFamily: "'Hind', sans-serif" }}>
                      {program.eligibility}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-[#2E5090]/10 to-[#F28C28]/10 p-4 rounded-xl border border-[#F28C28]/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={18} className="text-[#F28C28]" />
                      <p className="text-sm text-gray-600" style={{ fontFamily: "'Hind', sans-serif" }}>Duration</p>
                    </div>
                    <p className="font-semibold text-[#1F3D2B]" style={{ fontFamily: "'Hind', sans-serif" }}>
                      {program.duration}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-[#8B6B5A]/10 to-[#F28C28]/10 p-4 rounded-xl border border-[#F28C28]/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarDays size={18} className="text-[#F28C28]" />
                      <p className="text-sm text-gray-600" style={{ fontFamily: "'Hind', sans-serif" }}>Start Date</p>
                    </div>
                    <p className="font-semibold text-[#1F3D2B]" style={{ fontFamily: "'Hind', sans-serif" }}>
                      {program.schedule.startDate}
                    </p>
                  </motion.div>
                </div>

                {/* Curriculum */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-[#1F3D2B] mb-4 flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <BookOpen className="text-[#F28C28]" />
                    What We Cover
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.curriculum.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#FFD43B]/10 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F28C28] to-[#FFD43B] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-white font-bold">✓</span>
                        </div>
                        <p className="text-[#1F3D2B]" style={{ fontFamily: "'Hind', sans-serif" }}>{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Faculty */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-[#1F3D2B] mb-4 flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <Users className="text-[#F28C28]" />
                    Faculty & Teaching Staff
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.faculty.map((faculty, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="p-4 bg-gradient-to-br from-[#1F3D2B]/5 to-[#F28C28]/5 rounded-xl border border-[#F28C28]/20 hover:border-[#F28C28]/40 transition-all"
                      >
                        <h4 className="font-bold text-[#1F3D2B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {faculty.name}
                        </h4>
                        <p className="text-sm text-[#F28C28] font-semibold" style={{ fontFamily: "'Hind', sans-serif" }}>
                          {faculty.role}
                        </p>
                        <p className="text-xs text-gray-600 mt-1" style={{ fontFamily: "'Hind', sans-serif" }}>
                          {faculty.experience}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Schedule */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-[#1F3D2B] mb-4 flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <CalendarDays className="text-[#F28C28]" />
                    Schedule
                  </h3>
                  <div className="bg-gradient-to-r from-[#1F3D2B]/5 to-[#F28C28]/5 p-6 rounded-xl border border-[#F28C28]/20">
                    <p className="text-[#1F3D2B] font-semibold mb-3" style={{ fontFamily: "'Hind', sans-serif" }}>
                      Timing: {program.schedule.timing}
                    </p>
                    <div>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "'Hind', sans-serif" }}>Available Batches:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.schedule.batches.map((batch, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="px-4 py-2 bg-gradient-to-r from-[#FFD43B] to-[#F28C28] text-[#1F3D2B] rounded-full text-sm font-semibold"
                          >
                            {batch}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Success Stories */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-[#1F3D2B] mb-4 flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <Award className="text-[#F28C28]" />
                    Success Stories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {program.successStories.map((story, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="p-4 bg-gradient-to-br from-[#1F3D2B] to-[#2d5a3f] rounded-xl text-white hover:shadow-lg transition-shadow"
                      >
                        <h4 className="font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {story.name}
                        </h4>
                        <p className="text-[#FFD43B] text-sm font-semibold mb-2" style={{ fontFamily: "'Hind', sans-serif" }}>
                          {story.selection}
                        </p>
                        <p className="text-white/70 text-xs" style={{ fontFamily: "'Hind', sans-serif" }}>
                          Year: {story.year}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4 pt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-3 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] text-[#1F3D2B] rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Apply Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="flex-1 px-8 py-3 bg-gray-200 text-[#1F3D2B] rounded-full font-bold hover:bg-gray-300 transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
