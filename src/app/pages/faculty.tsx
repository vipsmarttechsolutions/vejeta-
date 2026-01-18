import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const faculty = [
  {
    name: 'Col. Rajesh Kumar (Retd.)',
    role: 'Director & Chief Instructor',
    experience: '25 years in Indian Army',
    expertise: 'NDA, SSB Interview, Leadership Training',
    image: 'https://images.unsplash.com/photo-1585802540432-60662b65ca62?w=400&q=80'
  },
  {
    name: 'Maj. Priya Sharma (Retd.)',
    role: 'Senior Faculty - Academic',
    experience: '15 years teaching experience',
    expertise: 'Mathematics, General Knowledge, English',
    image: 'https://images.unsplash.com/photo-1763656444799-e8abf3dcb5cb?w=400&q=80'
  },
  {
    name: 'Subedar Vikram Singh',
    role: 'Physical Training Instructor',
    experience: '20 years in Army Physical Training Corps',
    expertise: 'Physical Fitness, Endurance Training, Obstacle Course',
    image: 'https://images.unsplash.com/photo-1585802540432-60662b65ca62?w=400&q=80'
  },
  {
    name: 'Dr. Anita Deshmukh',
    role: 'Faculty - Science & Nursing',
    experience: 'Ph.D. in Biology, 12 years teaching',
    expertise: 'Biology, Chemistry, Nursing Exams',
    image: 'https://images.unsplash.com/photo-1763656444799-e8abf3dcb5cb?w=400&q=80'
  },
  {
    name: 'Capt. Arun Patil (Retd.)',
    role: 'SSB Interview Specialist',
    experience: '18 years in Army, SSB Board Member',
    expertise: 'Personality Development, Group Tasks, Psychology',
    image: 'https://images.unsplash.com/photo-1585802540432-60662b65ca62?w=400&q=80'
  },
  {
    name: 'Prof. Sandeep Joshi',
    role: 'Academic Coordinator',
    experience: 'M.A. English, 10 years coaching',
    expertise: 'English, Communication Skills, Essay Writing',
    image: 'https://images.unsplash.com/photo-1585802540432-60662b65ca62?w=400&q=80'
  }
];

const qualifications = [
  { icon: Award, title: 'Ex-Defence Personnel', description: 'Real-world experience from armed forces' },
  { icon: BookOpen, title: 'Academic Excellence', description: 'Qualified educators with proven track records' },
  { icon: Users, title: 'Personalized Attention', description: 'Individual mentoring and guidance' },
  { icon: Target, title: 'Proven Results', description: 'Track record of successful selections' }
];

export function FacultyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
            Expert Faculty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Learn from experienced defence personnel and qualified educators
          </motion.p>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              >
                <qual.icon className="w-10 h-10 mx-auto mb-3 text-[#F28C28]" />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {qual.title}
                </h3>
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {qual.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section ref={ref} className="py-20 bg-gradient-to-b from-black to-[#1F3D2B]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#F28C28]/40 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-[#FFD43B] text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {member.role}
                  </p>
                  <p className="text-white/70 text-sm mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {member.experience}
                  </p>
                  <p className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="font-semibold text-white/80">Specialization:</span> {member.expertise}
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
