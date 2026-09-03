import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const partners = [
  "Acme Corp",
  "Global Tech",
  "Nexus Industries",
  "Vertex Solutions",
  "Quantum Dynamics",
  "Aura Digital",
];

// Duplicate items enough times to fill the screen for a seamless loop
const marqueeItems = [...partners, ...partners, ...partners, ...partners];

export function PartnersSection() {
  const [activePartner, setActivePartner] = useState<string | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the cursor following
  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section 
      className="py-16 bg-white overflow-hidden border-b border-gray-100 relative"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-10 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted Partners
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full">
        {/* Left/Right fading edges for a cleaner look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee hover:[animation-play-state:paused] ml-[1px]">
          {marqueeItems.map((partner, i) => (
            <div
              key={i}
              onMouseEnter={() => setActivePartner(partner)}
              onMouseLeave={() => setActivePartner(null)}
              className="flex items-center justify-center bg-gray-50/50 border border-gray-100 -ml-[1px] rounded-sm px-12 py-8 min-w-[240px] hover:bg-gray-100 transition-colors duration-300 cursor-none"
            >
              <span className="font-display font-bold text-2xl text-gray-300">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Custom Cursor Pill */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none px-4 py-2 bg-[#F5B301] text-[#12110F] rounded-full text-sm font-bold tracking-wide uppercase shadow-xl whitespace-nowrap flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: activePartner ? 1 : 0, 
          scale: activePartner ? 1 : 0.5 
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        {activePartner}
      </motion.div>
    </section>
  );
}
