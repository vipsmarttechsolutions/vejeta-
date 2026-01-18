import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Contact', path: '/contact' },
];

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F28C28] to-[#FFD43B] flex items-center justify-center">
              <span className="text-[#1F3D2B] font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>V</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Vijeta Foundation
              </div>
              <div className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                Ashta
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F28C28] to-[#FFD43B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden lg:block ml-4">
            <Link
              to="/admission"
              className="px-6 py-2.5 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] text-[#1F3D2B] rounded-full text-sm shadow-lg hover:shadow-[#F28C28]/30 transition-shadow"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Apply Now
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admission"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-[#F28C28] to-[#FFD43B] text-[#1F3D2B] rounded-full text-center shadow-lg"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
