import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export function Footer() {
  return (
    <Reveal>
      <footer className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 md:py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#12110F] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold font-display">w</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-[#12110F]">wow Techo</span>
            </div>
            <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
              A digital agency that builds, ranks and grows modern brands across the globe.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <motion.a whileTap={{ scale: 0.94, transition: { type: "spring", stiffness: 500, damping: 12 } }} href="#services" className="hover:text-accent transition-colors w-fit">Website Development</motion.a>
              <motion.a whileTap={{ scale: 0.94, transition: { type: "spring", stiffness: 500, damping: 12 } }} href="#services" className="hover:text-accent transition-colors w-fit">App Development</motion.a>
              <motion.a whileTap={{ scale: 0.94, transition: { type: "spring", stiffness: 500, damping: 12 } }} href="#services" className="hover:text-accent transition-colors w-fit">SEO & Ranking</motion.a>
              <motion.a whileTap={{ scale: 0.94, transition: { type: "spring", stiffness: 500, damping: 12 } }} href="#services" className="hover:text-accent transition-colors w-fit">Performance Ads</motion.a>
              <motion.a whileTap={{ scale: 0.94, transition: { type: "spring", stiffness: 500, damping: 12 } }} href="#services" className="hover:text-accent transition-colors w-fit">Social Media</motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <motion.a
                whileTap={{ scale: 0.94, transition: { type: "spring", stiffness: 500, damping: 12 } }}
                href="mailto:hello@wowtecho.com"
                className="hover:text-accent transition-colors w-fit"
              >
                hello@wowtecho.com
              </motion.a>
              <p>Available for new projects</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-400">
          <span>© {new Date().getFullYear()} wow Techo. All rights reserved.</span>
          <span>Crafted with precision.</span>
        </div>
      </footer>
    </Reveal>
  );
}
