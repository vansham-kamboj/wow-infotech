import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Magnetic } from './Reveal';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#"
            className="bg-white/90 backdrop-blur-xl border border-border rounded-full px-6 py-3 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center">
              <span className="text-dark text-xs font-bold">w</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">wow Techo</span>
          </a>

          {/* Desktop Nav */}
          <Magnetic strength={0.15}>
            <nav className="hidden md:flex bg-white/90 backdrop-blur-xl border border-border rounded-full px-2 py-1.5 items-center shadow-sm">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  className="px-5 py-2 rounded-full text-sm font-medium text-dark/70 hover:text-dark hover:bg-panel transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </Magnetic>

          {/* CTA Pill */}
          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                href="mailto:hello@wowtecho.com"
                className="hidden sm:flex bg-dark text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-accent hover:text-dark transition-colors duration-500 shadow-sm"
              >
                Say Hello
              </a>
            </Magnetic>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden bg-white/90 backdrop-blur-xl border border-border rounded-full p-3 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 z-40 px-4 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-2xl border border-border rounded-3xl p-6 shadow-xl flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-2xl text-lg font-medium text-dark/70 hover:text-dark hover:bg-panel transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hello@wowtecho.com"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-dark text-white rounded-2xl px-4 py-3 text-center font-medium hover:bg-accent hover:text-dark transition-colors"
              >
                Say Hello
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
