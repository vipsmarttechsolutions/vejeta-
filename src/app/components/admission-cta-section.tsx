import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send } from 'lucide-react';

export function AdmissionCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F3D2B] via-[#1C2E4A] to-[#1F3D2B]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTEyIDQ4YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          {/* CTA Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[28px] md:text-[42px] mb-4 leading-[1.2]"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-white via-[#FFD43B] to-white bg-clip-text text-transparent">
              Secure Your Admission Today!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[15px] md:text-base text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Hind', sans-serif" }}
          >
            Limited seats available. Take the first step towards your success today.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]/50 focus:border-transparent transition-all text-[15px]"
                  style={{ fontFamily: "'Hind', sans-serif" }}
                />
              </div>

              {/* Phone Input */}
              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]/50 focus:border-transparent transition-all text-[15px]"
                  style={{ fontFamily: "'Hind', sans-serif" }}
                />
              </div>

              {/* Course Select */}
              <div>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD43B]/50 focus:border-transparent transition-all appearance-none cursor-pointer text-[15px]"
                  style={{ fontFamily: "'Hind', sans-serif" }}
                >
                  <option value="" className="bg-[#1F3D2B]">Select Course</option>
                  <option value="nda" className="bg-[#1F3D2B]">NDA</option>
                  <option value="ssc" className="bg-[#1F3D2B]">SSC</option>
                  <option value="ssb" className="bg-[#1F3D2B]">SSB</option>
                  <option value="army" className="bg-[#1F3D2B]">ARMY</option>
                  <option value="police" className="bg-[#1F3D2B]">POLICE</option>
                  <option value="nursing" className="bg-[#1F3D2B]">NURSING</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#FFD43B] to-[#F28C28] text-[#1F3D2B] rounded-xl shadow-lg hover:shadow-[#FFD43B]/30 transition-shadow duration-300 flex items-center justify-center gap-2 group text-[15px]"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}
              >
                <span>Submit Admission Form</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </div>

            {/* Additional Info */}
            <p className="text-center text-white/50 text-[13px] mt-5" style={{ fontFamily: "'Hind', sans-serif" }}>
              We will contact you within 24 hours
            </p>
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-10"
        >
          <p className="text-white/60 mb-4 text-[14px]" style={{ fontFamily: "'Hind', sans-serif" }}>
            Or contact us directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href="tel:+919876543210"
              className="px-6 py-2.5 bg-white/5 backdrop-blur-md text-white rounded-full border border-white/10 hover:bg-white/10 transition-all text-[14px]"
              style={{ fontFamily: "'Hind', sans-serif" }}
            >
              📞 +91 98765 43210
            </a>
            <a 
              href="mailto:info@vijetafoundation.com"
              className="px-6 py-2.5 bg-white/5 backdrop-blur-md text-white rounded-full border border-white/10 hover:bg-white/10 transition-all text-[14px]"
              style={{ fontFamily: "'Hind', sans-serif" }}
            >
              ✉️ info@vijetafoundation.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}