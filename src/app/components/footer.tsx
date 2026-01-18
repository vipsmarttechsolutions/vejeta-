import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#1F3D2B] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 
              className="text-2xl mb-3 bg-gradient-to-r from-[#FFD43B] to-[#F28C28] bg-clip-text text-transparent"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 700 }}
            >
              Vijeta Foundation
            </h3>
            <p className="text-white/60 text-[14px] mb-4 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
              Your partner in success for defence services. Training in NDA, SSC, SSB, Army, Police, and Nursing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-[16px] mb-3 text-white"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-[14px]" style={{ fontFamily: "'Hind', sans-serif" }}>
              <li>
                <a href="#courses" className="text-white/60 hover:text-[#FFD43B] transition-colors">Programs</a>
              </li>
              <li>
                <a href="#features" className="text-white/60 hover:text-[#FFD43B] transition-colors">Features</a>
              </li>
              <li>
                <a href="#success" className="text-white/60 hover:text-[#FFD43B] transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#admission" className="text-white/60 hover:text-[#FFD43B] transition-colors">Admission</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="text-[16px] mb-3 text-white"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="space-y-2.5 text-[14px]" style={{ fontFamily: "'Hind', sans-serif" }}>
              <li className="flex items-start gap-2 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F28C28]" />
                <span>Ashta, Sangli, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#F28C28]" />
                <a href="tel:+919876543210" className="hover:text-[#FFD43B] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#F28C28]" />
                <a href="mailto:info@vijetafoundation.com" className="hover:text-[#FFD43B] transition-colors">
                  info@vijetafoundation.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 
              className="text-[16px] mb-3 text-white"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F28C28] hover:to-[#FFD43B] border border-white/10 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F28C28] hover:to-[#FFD43B] border border-white/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F28C28] hover:to-[#FFD43B] border border-white/10 transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-[13px]" style={{ fontFamily: "'Hind', sans-serif" }}>
              © 2026 विजेता फाउंडेशन, आष्टा. सर्व हक्क राखीव.
            </p>
            <div className="flex gap-6 text-[13px]" style={{ fontFamily: "'Hind', sans-serif" }}>
              <a href="#" className="text-white/50 hover:text-[#FFD43B] transition-colors">गोपनीयता धोरण</a>
              <a href="#" className="text-white/50 hover:text-[#FFD43B] transition-colors">अटी व शर्ती</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}