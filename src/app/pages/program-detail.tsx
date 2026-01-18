import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, BookOpen, Award, CalendarDays, CheckCircle2 } from 'lucide-react';
import { GraduationCap, Trophy, Target, Shield, Heart } from 'lucide-react';

const programsData = [
  {
    icon: GraduationCap,
    title: 'NDA - National Defence Academy',
    eligibility: '10+2 (Science/Arts/Commerce) | Age: 16.5-19.5 years',
    duration: '12 months intensive training',
    features: [
      'Mathematics & General Ability preparation',
      'Physical fitness training',
      'SSB interview preparation',
      'Personality development',
      'Regular mock tests'
    ],
    gradient: 'from-[#1F3D2B] to-[#2d5a3f]',
    curriculum: [
      'Mathematics: Algebra, Trigonometry, Calculus',
      'English: Comprehension, Grammar, Essay',
      'General Knowledge: Current Affairs, History',
      'Physics & Chemistry Fundamentals',
      'Reasoning & Logical Ability',
      'SSB Psychological Tests'
    ],
    faculty: [
      {
        name: 'Col. Rajesh Kumar (Retd)',
        role: 'NDA Mathematics Expert',
        experience: '20+ years military service'
      },
      {
        name: 'Major Priya Singh',
        role: 'SSB Interview Coach',
        experience: '15+ years coaching experience'
      },
      {
        name: 'Lt. Vikram Desai',
        role: 'Physical Training Director',
        experience: '12+ years Defence Forces'
      },
      {
        name: 'Dr. Amit Verma',
        role: 'General Knowledge & English',
        experience: '10+ years teaching'
      }
    ],
    schedule: {
      startDate: 'February 2026',
      batches: ['Morning (6 AM - 12 PM)', 'Evening (4 PM - 10 PM)', 'Weekend Batch'],
      timing: '6 hours/day, 6 days/week'
    },
    successStories: [
      { name: 'Rahul Patil', selection: 'NDA 2024 (Commissioned)', year: '2024' },
      { name: 'Vikram Deshmukh', selection: 'NDA 2023', year: '2023' },
      { name: 'Sandeep Jadhav', selection: 'NDA Selection', year: '2024' }
    ]
  },
  {
    icon: Trophy,
    title: 'SSC - Short Service Commission',
    eligibility: 'Graduate in any discipline | Age: 19-25 years',
    duration: '8-10 months preparation',
    features: [
      'Technical & Non-technical branches',
      'Written exam coaching',
      'SSB interview training',
      'Group discussion practice',
      'Medical guidance'
    ],
    gradient: 'from-[#1C2E4A] to-[#2a4469]',
    curriculum: [
      'Engineering Science (Technical)',
      'General Knowledge & Current Affairs',
      'English Language & Comprehension',
      'Social Studies',
      'Aptitude & Reasoning',
      'SSB Interview Preparation'
    ],
    faculty: [
      {
        name: 'Brigadier Arun Sharma (Retd)',
        role: 'SSC Programme Head',
        experience: '25+ years armed forces'
      },
      {
        name: 'Capt. Neha Patel',
        role: 'Technical Branch Expert',
        experience: '8+ years engineering background'
      },
      {
        name: 'Major Deepak Singh',
        role: 'SSB Interview Specialist',
        experience: '12+ years selection process'
      },
      {
        name: 'Dr. Pooja Gupta',
        role: 'Medical Assessment Guide',
        experience: '10+ years medical field'
      }
    ],
    schedule: {
      startDate: 'March 2026',
      batches: ['Morning Batch', 'Evening Batch', 'Online Classes'],
      timing: '5 hours/day, 5 days/week'
    },
    successStories: [
      { name: 'Rajesh Verma', selection: 'SSC 2023', year: '2023' },
      { name: 'Amit Kumar', selection: 'SSC Officer Training', year: '2024' },
      { name: 'Vikram Sharma', selection: 'SSC 2024', year: '2024' }
    ]
  },
  {
    icon: Target,
    title: 'AFCAT - Air Force Common Admission Test',
    eligibility: 'Bachelor\'s degree | Age: 20-28 years',
    duration: '6-9 months preparation',
    features: [
      'Pilot & Non-pilot branches',
      'Flying aptitude preparation',
      'Aviation knowledge training',
      'SSB interview coaching',
      'Confidence building'
    ],
    gradient: 'from-[#2E5090] to-[#1f3a5f]',
    curriculum: [
      'English Comprehension & Grammar',
      'Verbal Ability & Reasoning',
      'Quantitative Aptitude',
      'Physics & General Science',
      'Geography & Current Affairs',
      'Spatial Reasoning & Flying Aptitude'
    ],
    faculty: [
      {
        name: 'Air Cmde. Rajiv Kumar (Retd)',
        role: 'AFCAT Programme Director',
        experience: '22+ years air force service'
      },
      {
        name: 'Wg Cdr. Sahil Mehta',
        role: 'Flying Aptitude Coach',
        experience: '14+ years pilot training'
      },
      {
        name: 'Gp Capt. Anita Verma',
        role: 'Reasoning & Aptitude Expert',
        experience: '16+ years selection process'
      },
      {
        name: 'Sq Ldr. Harsh Singh',
        role: 'Technical Subjects Trainer',
        experience: '10+ years academics'
      }
    ],
    schedule: {
      startDate: 'April 2026',
      batches: ['Morning Batch', 'Evening Batch', 'Intensive Weekend'],
      timing: '4 hours/day, 6 days/week'
    },
    successStories: [
      { name: 'Arjun Desai', selection: 'AFCAT 2024 (Pilot)', year: '2024' },
      { name: 'Nikhil Patel', selection: 'AFCAT 2023 (Flying Officer)', year: '2023' },
      { name: 'Varun Shukla', selection: 'AFCAT Selection', year: '2024' }
    ]
  },
  {
    icon: Shield,
    title: 'CAPF - Central Armed Police Force',
    eligibility: '12th pass | Age: 18-25 years',
    duration: '4-6 months preparation',
    features: [
      'CISF, BSF, CRPF, SSB recruitment',
      'Written exam preparation',
      'Physical fitness training',
      'Interview coaching',
      'Personality assessment'
    ],
    gradient: 'from-[#8B4513] to-[#4a2511]',
    curriculum: [
      'English Comprehension & Essay',
      'General Knowledge & History',
      'Mathematics & Reasoning',
      'Current Affairs & Geography',
      'Constitution of India',
      'Personal Interview Preparation'
    ],
    faculty: [
      {
        name: 'Cdr. Bharat Singh (Retd)',
        role: 'CAPF Programme Head',
        experience: '20+ years CRPF service'
      },
      {
        name: 'Insp. Kavya Nair',
        role: 'Physical Fitness Expert',
        experience: '12+ years training'
      },
      {
        name: 'Col. Rohit Verma',
        role: 'Interview & Aptitude Coach',
        experience: '15+ years selection'
      },
      {
        name: 'Dr. Sandeep Kumar',
        role: 'General Knowledge Expert',
        experience: '11+ years teaching'
      }
    ],
    schedule: {
      startDate: 'May 2026',
      batches: ['Morning Batch', 'Evening Batch', 'Online Mode'],
      timing: '3 hours/day, 5 days/week'
    },
    successStories: [
      { name: 'Karan Malhotra', selection: 'BSF Constable 2024', year: '2024' },
      { name: 'Sanjay Sharma', selection: 'CISF Head Constable', year: '2024' },
      { name: 'Mohan Singh', selection: 'CRPF Selection', year: '2023' }
    ]
  },
  {
    icon: Users,
    title: 'Police & State Level Exams',
    eligibility: '12th pass | Age: 18-26 years',
    duration: '3-5 months preparation',
    features: [
      'State police recruitment',
      'Constable & SI exams',
      'Physical & written exam prep',
      'Interview training',
      'Legal knowledge coaching'
    ],
    gradient: 'from-[#2f1b3c] to-[#4a2552]',
    curriculum: [
      'General Knowledge & Current Events',
      'Hindi & English Language',
      'Mathematics & Reasoning',
      'Indian Policing System',
      'Constitution & Legal Basics',
      'Situational Judgment Tests'
    ],
    faculty: [
      {
        name: 'SP. Anil Desai (Retd)',
        role: 'Police Programme Director',
        experience: '18+ years police service'
      },
      {
        name: 'ASI. Priya Sharma',
        role: 'Written Exam Specialist',
        experience: '10+ years coaching'
      },
      {
        name: 'Insp. Manoj Kumar',
        role: 'Physical Training Coach',
        experience: '12+ years fitness training'
      },
      {
        name: 'Adv. Rajesh Gupta',
        role: 'Legal & Constitutional Expert',
        experience: '14+ years law background'
      }
    ],
    schedule: {
      startDate: 'June 2026',
      batches: ['Morning Batch', 'Evening Batch', 'Fast Track'],
      timing: '3 hours/day, 5 days/week'
    },
    successStories: [
      { name: 'Ajay Patel', selection: 'State Police SI 2024', year: '2024' },
      { name: 'Ravi Sharma', selection: 'Police Constable', year: '2024' },
      { name: 'Suresh Singh', selection: 'State Level Exam', year: '2023' }
    ]
  },
  {
    icon: Heart,
    title: 'Nursing in Armed Forces',
    eligibility: '10+2 (Science) with 50% marks | Age: 17-23 years',
    duration: '7-9 months preparation',
    features: [
      'Armed Forces Nursing recruitment',
      'Science subject coaching',
      'Medical aptitude training',
      'Interview preparation',
      'Physical fitness guidance'
    ],
    gradient: 'from-[#8B0000] to-[#660000]',
    curriculum: [
      'Biology & Human Anatomy',
      'Chemistry & Biochemistry',
      'Physics Fundamentals',
      'English Language & Communication',
      'General Knowledge',
      'Medical Interview Preparation'
    ],
    faculty: [
      {
        name: 'Lt. Col. Dr. Meera Singh',
        role: 'Nursing Programme Head',
        experience: '18+ years military nursing'
      },
      {
        name: 'Dr. Anjali Verma',
        role: 'Biology & Anatomy Expert',
        experience: '14+ years medical background'
      },
      {
        name: 'Sr. Capt. Neha Gupta',
        role: 'Interview & Personality Coach',
        experience: '10+ years recruitment process'
      },
      {
        name: 'Dr. Shreya Menon',
        role: 'Chemistry & Science Trainer',
        experience: '12+ years teaching'
      }
    ],
    schedule: {
      startDate: 'July 2026',
      batches: ['Morning Batch', 'Evening Batch', 'Weekend Classes'],
      timing: '4.5 hours/day, 5 days/week'
    },
    successStories: [
      { name: 'Priya Verma', selection: 'Armed Forces Nursing 2024', year: '2024' },
      { name: 'Sneha Patel', selection: 'Military Hospital Nursing', year: '2024' },
      { name: 'Divya Singh', selection: 'Defence Nursing Service', year: '2023' }
    ]
  }
];

export function ProgramDetailPage() {
  const navigate = useNavigate();
  const { title } = useParams();
  
  // Find the program based on the title
  const program = programsData.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-').includes(title?.toLowerCase() || '')
  );

  if (!program) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl text-white mb-4">Program Not Found</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/programs')}
            className="px-6 py-3 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] text-[#1F3D2B] rounded-full font-bold"
          >
            Back to Programs
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/programs')}
          className="flex items-center gap-2 text-[#F28C28] hover:text-[#FFD43B] transition-colors mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>Back to Programs</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1F3D2B] via-[#1C2E4A] to-black overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#F28C28]/20 to-[#FFD43B]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#1F3D2B]/20 to-[#2E5090]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-8"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#F28C28] to-[#FFD43B] flex items-center justify-center flex-shrink-0"
            >
              <Icon className="w-10 h-10 text-[#1F3D2B]" />
            </motion.div>
            
            <div>
              <h1 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                {program.title}
              </h1>
              <p className="text-white/80 text-lg mb-6" style={{ fontFamily: "'Hind', sans-serif" }}>
                Complete training program to achieve your goals
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <span className="text-[#FFD43B]">✓</span>
                  <span style={{ fontFamily: "'Hind', sans-serif" }}>{program.eligibility}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Clock className="w-5 h-5 text-[#F28C28]" />
                  <span style={{ fontFamily: "'Hind', sans-serif" }}>{program.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* Curriculum Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-[#F28C28]" />
            <h2 className="text-3xl text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Curriculum
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {program.curriculum.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FFD43B] flex-shrink-0 mt-1" />
                <span className="text-white/80" style={{ fontFamily: "'Hind', sans-serif" }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Faculty Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-[#F28C28]" />
            <h2 className="text-3xl text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Expert Faculty
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {program.faculty.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6 hover:border-[#F28C28]/40 transition-colors"
              >
                <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {member.name}
                </h3>
                <p className="text-[#F28C28] text-sm mb-2" style={{ fontFamily: "'Hind', sans-serif" }}>
                  {member.role}
                </p>
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Hind', sans-serif" }}>
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <CalendarDays className="w-8 h-8 text-[#F28C28]" />
            <h2 className="text-3xl text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Schedule & Batches
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Start Date
              </h3>
              <p className="text-[#FFD43B] text-lg" style={{ fontFamily: "'Hind', sans-serif" }}>
                {program.schedule.startDate}
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Available Batches
              </h3>
              <div className="space-y-2">
                {program.schedule.batches.map((batch, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <span className="w-2 h-2 bg-[#F28C28] rounded-full" />
                    <span style={{ fontFamily: "'Hind', sans-serif" }}>{batch}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Daily Timing
              </h3>
              <p className="text-white/80" style={{ fontFamily: "'Hind', sans-serif" }}>
                {program.schedule.timing}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-[#F28C28]" />
            <h2 className="text-3xl text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6 hover:border-[#FFD43B]/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#FFD43B] rounded-full" />
                  <h3 className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {story.name}
                  </h3>
                </div>
                <p className="text-[#F28C28] text-sm mb-2" style={{ fontFamily: "'Hind', sans-serif" }}>
                  {story.selection}
                </p>
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Hind', sans-serif" }}>
                  Year: {story.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#F28C28] to-[#FFD43B] rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl text-[#1F3D2B] mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#1F3D2B]/80 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Hind', sans-serif" }}>
            Join thousands of successful candidates who achieved their dreams with us
          </p>
          <motion.a
            href="/admission"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-[#1F3D2B] text-white rounded-full font-bold hover:bg-[#1F3D2B]/90 transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
