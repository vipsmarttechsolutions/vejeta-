import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Trophy, Target, Shield, Users, Heart, CheckCircle2 } from 'lucide-react';

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

export function ProgramsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#1F3D2B] via-[#1C2E4A] to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#F28C28]/20 to-[#FFD43B]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#1F3D2B]/20 to-[#2E5090]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD43B] to-[#F28C28] text-[#1F3D2B] text-xs font-bold mb-4"
          >
            OUR PROGRAMS
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Training Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Specialized courses designed to help you achieve your defence and public service goals
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section ref={ref} className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programsData.map((program, index) => {
              const Icon = program.icon;
              const programUrl = `/program/${program.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
              return (
                <Link key={index} to={programUrl} className="group relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -2 }}
                    animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, rotate: 1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#F28C28]/40 transition-all duration-500 p-8 h-full">
                      {/* Animated gradient overlay */}
                      <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F28C28] to-[#FFD43B] flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                      >
                        <Icon className="w-7 h-7 text-[#1F3D2B]" />
                      </motion.div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD43B] transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {program.title}
                      </h3>

                      {/* Quick Info */}
                      <div className="space-y-2 mb-6">
                        <p className="text-white/70 text-sm flex items-start gap-2">
                          <span className="text-[#F28C28] mt-1">✓</span>
                          <span style={{ fontFamily: "'Hind', sans-serif" }}>{program.eligibility}</span>
                        </p>
                        <p className="text-white/70 text-sm flex items-start gap-2">
                          <span className="text-[#F28C28] mt-1">⏱</span>
                          <span style={{ fontFamily: "'Hind', sans-serif" }}>{program.duration}</span>
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {program.features.slice(0, 3).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-start gap-2 text-white/60"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#FFD43B] mt-0.5 flex-shrink-0" />
                            <span className="text-sm" style={{ fontFamily: "'Hind', sans-serif" }}>
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(242, 140, 40, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] text-[#1F3D2B] rounded-full font-bold transition-all shadow-lg"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* No longer showing modal on this page */}
    </div>
  );
}
