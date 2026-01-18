import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = "919876543210"; // Replace with actual number
  const message = "Hello! I would like to know more about Vijeta Foundation's admission programs.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Desktop Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 z-50 group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Subtle Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-4 py-2 bg-[#1F3D2B] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg text-[13px]" style={{ fontFamily: "'Hind', sans-serif" }}>
          Contact via WhatsApp
        </div>
      </motion.a>

      {/* Mobile Sticky Bottom CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-gradient-to-r from-[#1F3D2B] to-[#1C2E4A] border-t border-white/10 z-50 shadow-2xl"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-md active:scale-95 transition-transform text-[15px]"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600 }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>Message on WhatsApp</span>
        </a>
      </motion.div>
    </>
  );
}