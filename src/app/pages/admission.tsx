import { AdmissionCTASection } from '../components/admission-cta-section';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, UserCheck, CreditCard, GraduationCap } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Step 1: Fill Application',
    description: 'Complete the online application form or visit our office'
  },
  {
    icon: UserCheck,
    title: 'Step 2: Document Verification',
    description: 'Submit required documents and certificates for verification'
  },
  {
    icon: CreditCard,
    title: 'Step 3: Fee Payment',
    description: 'Pay the course fee through online or offline mode'
  },
  {
    icon: GraduationCap,
    title: 'Step 4: Start Training',
    description: 'Begin your journey with orientation and batch allocation'
  }
];

const documents = [
  'Educational certificates (10th, 12th, Graduation marksheets)',
  'Birth certificate or age proof',
  'Aadhar card and PAN card',
  'Recent passport size photographs (6 copies)',
  'Caste certificate (if applicable)',
  'Medical fitness certificate'
];

const feeStructure = [
  { program: 'NDA Preparation', fee: '₹45,000', duration: '12 months' },
  { program: 'SSC Preparation', fee: '₹35,000', duration: '8-10 months' },
  { program: 'SSB Interview Training', fee: '₹25,000', duration: '3-4 months' },
  { program: 'Army Recruitment', fee: '₹20,000', duration: '6 months' },
  { program: 'Police Bharti', fee: '₹18,000', duration: '4-6 months' },
  { program: 'Nursing Preparation', fee: '₹30,000', duration: '6-8 months' }
];

export function AdmissionPage() {
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
            Admission Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Simple and straightforward admission process to start your defence career
          </motion.p>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
            How to Apply
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F28C28] flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <step.icon className="w-10 h-10 text-[#F28C28] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gradient-to-b from-black to-[#1F3D2B]/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
            Required Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {doc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gradient-to-b from-[#1F3D2B]/10 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
            Fee Structure
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeStructure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#F28C28]/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.program}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-[#FFD43B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.fee}
                  </span>
                </div>
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Duration: {item.duration}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/60 text-sm mt-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            * Fees include study material, physical training, and online test series. Installment facility available.
          </p>
        </div>
      </section>

      {/* Admission Form Section */}
      <AdmissionCTASection />
    </div>
  );
}
