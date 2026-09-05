import { motion, type Transition } from 'framer-motion';
import { useState } from 'react';

/* ─── Entrance variants ─── */
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = (delay: number): { initial: { opacity: number; y: number }; animate: { opacity: number; y: number }; transition: Transition } => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

const flyFromLeft = (delay: number) => ({
  initial: { opacity: 0, x: -120, filter: 'blur(12px)' },
  whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.85, ease, delay },
});

const flyFromRight = (delay: number) => ({
  initial: { opacity: 0, x: 120, filter: 'blur(12px)' },
  whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.85, ease, delay },
});

const fadeDownCinematic = (delay: number) => ({
  initial: { opacity: 0, y: -45, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1.1, ease, delay },
});

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section 
      className="relative flex flex-col items-center pt-28 md:pt-32 pb-0 overflow-hidden bg-white min-h-screen"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* ── Animated Flowing Lines Background ── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-center items-center transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, black 10%, transparent 100%)`,
          maskImage: `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, black 10%, transparent 100%)`,
        }}
      >
        
        <div className="flex flex-col gap-12 md:gap-20 w-[150vw] rotate-[-2deg] md:rotate-[-1deg] scale-110 opacity-70">
          {[
            { duration: 5, delay: 0, colorL: "via-indigo-500", colorR: "via-purple-500", h: "h-[2px]" },
            { duration: 7, delay: 1.2, colorL: "via-amber-500", colorR: "via-pink-500", h: "h-[3px]" },
            { duration: 6, delay: 0.5, colorL: "via-blue-500", colorR: "via-indigo-500", h: "h-[2px]" },
            { duration: 8, delay: 2, colorL: "via-pink-500", colorR: "via-amber-500", h: "h-[3px]" },
            { duration: 5.5, delay: 1, colorL: "via-purple-500", colorR: "via-blue-500", h: "h-[2px]" },
            { duration: 6.5, delay: 2.5, colorL: "via-amber-500", colorR: "via-indigo-500", h: "h-[2px]" },
          ].map((line, i) => (
            <div key={i} className="flex w-full items-center relative">
              {/* Subtle track line */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gray-200/60 w-full h-[1px]" />
              
              {/* Left Side Flow */}
              <div className="w-1/2 h-[6px] relative overflow-hidden">
                <motion.div
                  className={`absolute top-1/2 -translate-y-1/2 w-[70%] ${line.h} bg-gradient-to-r from-transparent ${line.colorL} to-transparent blur-[1px]`}
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: line.duration, repeat: Infinity, ease: 'linear', delay: line.delay }}
                />
              </div>

              {/* Right Side Flow */}
              <div className="w-1/2 h-[6px] relative overflow-hidden">
                <motion.div
                  className={`absolute top-1/2 -translate-y-1/2 w-[70%] ${line.h} bg-gradient-to-l from-transparent ${line.colorR} to-transparent blur-[1px]`}
                  initial={{ right: '-100%' }}
                  animate={{ right: '100%' }}
                  transition={{ duration: line.duration, repeat: Infinity, ease: 'linear', delay: line.delay + 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Text Block ── */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          {...fadeDownCinematic(0.1)}
          whileHover={{ scale: 1.04, transition: { duration: 1, ease: 'easeOut' } }}
          className="font-display font-bold text-[2.5rem] sm:text-[3.2rem] md:text-[4rem] leading-[1.05] tracking-tight mb-5 text-[#12110F] cursor-default origin-center"
        >
          We build systems to help
          <br />
          you scale your business
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-8 font-medium"
        >
          Management systems, websites &amp; SaaS — we focus on the product, you focus on growth.
        </motion.p>

        {/* CTA Row - Input style like reference */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="relative group rounded-full overflow-hidden w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow">
            
            {/* Spinning gradient for hover glow */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="w-[800px] h-[800px] absolute animate-[spin_2s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ background: 'conic-gradient(from 90deg, transparent 60%, #F5B301 100%)' }} 
              />
            </div>

            {/* Static border (fades out on hover) */}
            <div className="absolute inset-0 rounded-full border border-gray-200 z-10 group-hover:opacity-0 transition-opacity duration-500" />
            
            {/* Inner Content Container */}
            <div className="relative z-20 m-[2px] flex w-full sm:w-auto p-1.5 bg-white rounded-full focus-within:ring-2 focus-within:ring-gray-100">
              <input 
                type="email" 
                placeholder="Your work email" 
                className="px-4 py-2 bg-transparent outline-none text-sm w-full sm:w-[260px] text-gray-700 placeholder:text-gray-400"
              />
              <motion.a
                href="mailto:hello@wowtecho.com"
                whileTap={{ scale: 0.92, transition: { type: "spring", stiffness: 500, damping: 12 } }}
                className="group/btn inline-flex items-center justify-center gap-2 bg-[#12110F] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#F5B301] hover:text-[#12110F] transition-colors duration-500 shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
              >
                Let's build together
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Orb + Cards Composition ── */}
      <div className="relative w-full max-w-[1100px] mx-auto mt-16 md:mt-24 md:h-[600px] pb-16 md:pb-0">

        {/* Gradient Orb */}
        <div className="absolute left-1/2 top-[20%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.3 }}
          >
            <div
              className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full relative flex items-center justify-center"
            >
              {/* Main orb gradients */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  filter: ['blur(12px) hue-rotate(0deg)', 'blur(12px) hue-rotate(360deg)']
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full overflow-hidden opacity-90"
              >
                <div
                  className="absolute inset-0 rounded-full scale-110"
                  style={{
                    background: 'conic-gradient(from 0deg, #a5b4fc 0%, #f9a8d4 30%, #fde68a 60%, #93c5fd 85%, #a5b4fc 100%)',
                    filter: 'blur(30px)',
                  }}
                />
              </motion.div>
              
              {/* Inner white glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
                }}
              />
              
              {/* Center Logo Placeholder (Four leaf clover style) */}
              <div className="relative z-10 w-24 h-24 opacity-60 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="white" strokeWidth="2">
                  <path d="M50 50 C 30 10, 10 30, 50 50 C 70 10, 90 30, 50 50 C 90 70, 70 90, 50 50 C 10 90, 30 70, 50 50 Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 4 Cards in overlapping layout ── */}
        <div className="relative md:absolute inset-0 flex flex-col md:block items-center gap-6 mt-12 md:mt-0 px-4 md:px-0">

          {/* Card 1 — Management Systems */}
          <motion.div
            {...flyFromLeft(0.1)}
            className="relative md:absolute z-20 md:right-[calc(50%+150px)] md:top-[60px] w-full max-w-[320px]"
          >
            <div className="group bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#EAEAE7] p-5 hover:-translate-y-1 transition-transform duration-500 transform md:rotate-[5deg]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#12110F]"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                  <span className="text-[13px] font-semibold text-[#12110F]">Management Systems</span>
                </div>
                <span className="text-[10px] text-gray-500 border border-gray-200 rounded-md px-2 py-0.5 bg-gray-50">Week ⌄</span>
              </div>
              <div className="mb-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-[2.75rem] font-display font-bold leading-none text-[#12110F] tracking-tight">99.9</span>
                  <span className="text-xl text-gray-300 font-display font-medium">/100%</span>
                </div>
              </div>
              <p className="text-[11px] text-[#12110F] mb-5 font-medium">systems running smoothly &amp; scaling</p>
              
              {/* Bar Chart with animated growing bars */}
              <div className="h-10 w-full flex items-end gap-1">
                {[40, 65, 50, 80, 60, 90, 75, 85, 70, 95, 60, 70, 85, 90, 75, 65, 80, 50, 60, 95, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: '10%', backgroundColor: '#E5E7EB' }}
                    whileInView={{ height: `${h}%`, backgroundColor: '#F5B301' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.02, ease: "easeOut" }}
                    className="flex-1 rounded-t-sm group-hover:bg-[#F5B301] transition-colors duration-300"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 — SEO Insights */}
          <motion.div
            {...flyFromLeft(0.25)}
            className="relative md:absolute z-30 md:right-[calc(50%+130px)] md:top-[200px] w-full max-w-[260px]"
          >
            <div className="group bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-[#EAEAE7] p-4 hover:-translate-y-1 transition-transform duration-500 transform md:-rotate-[4deg]">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#12110F]"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <span className="text-[12px] font-bold text-[#12110F]">SEO Insights</span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium">2/6</span>
              </div>
              
              {/* Stacked inner cards effect with smooth fan-out animation */}
              <div className="relative mt-3">
                 <motion.div
                   initial={{ y: 0, scale: 1 }}
                   whileInView={{ y: -8, scale: 1.02 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                   className="absolute inset-x-3 -top-2 h-4 bg-[#fde68a]/40 rounded-t-xl group-hover:-translate-y-2.5 transition-transform duration-500" 
                 />
                 <motion.div
                   initial={{ y: 0, scale: 1 }}
                   whileInView={{ y: -4, scale: 1.01 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                   className="absolute inset-x-1.5 -top-1 h-4 bg-[#fcd34d]/60 rounded-t-xl group-hover:-translate-y-1.5 transition-transform duration-500" 
                 />
                 
                 <div className="relative bg-[#fef3c7] rounded-xl p-5 border border-[#fde68a] transition-transform duration-500 ease-out group-hover:translate-y-0.5">
                    <div className="flex justify-center mb-3 text-[#b45309]">
                       <motion.svg
                         animate={{ scale: [1, 1.15, 1] }}
                         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                       >
                         <path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path>
                       </motion.svg>
                    </div>
                    <p className="text-[13px] text-[#92400e] font-medium text-center leading-snug px-2">
                      Rank #1 on Google. We optimize your SEO &amp; social profiles.
                    </p>
                    <p className="text-[9px] text-[#b45309]/70 text-center mt-3 uppercase tracking-wide">Grow your reach</p>
                    <div className="flex justify-center gap-1 mt-4">
                      <div className="w-1 h-1 rounded-full bg-[#b45309]/30" />
                      <div className="w-1 h-1 rounded-full bg-[#b45309]/60" />
                      <div className="w-1 h-1 rounded-full bg-[#b45309]/30" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Reach & Traffic */}
          <motion.div
            {...flyFromRight(0.15)}
            className="relative md:absolute z-30 md:left-[calc(50%+130px)] md:top-[50px] w-full max-w-[300px]"
          >
            <div className="group bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-[#EAEAE7] p-5 hover:-translate-y-1 transition-transform duration-500 transform md:-rotate-[5deg]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <motion.div
                    whileInView={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 transition-colors duration-500"
                  >
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </motion.div>
                  <span className="text-[13px] font-semibold text-[#12110F]">Reach &amp; Traffic</span>
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-1 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                  <span className="text-[10px] font-bold text-green-700">324%</span>
                </motion.div>
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                 <span className="text-3xl font-display font-bold text-[#12110F]">84.2K</span>
                 <span className="text-xs text-gray-500 font-medium">monthly visitors</span>
              </div>

              {/* Animated Growth Graph */}
              <div className="relative h-16 w-full flex items-end justify-between gap-1 mt-2">
                {[15, 22, 18, 30, 45, 40, 60, 55, 75, 90, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0.2, opacity: 0.3 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.03, ease: "easeOut" }}
                    className="w-full bg-[#12110F] rounded-t-sm origin-bottom"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4 — Social Media */}
          <motion.div
            {...flyFromRight(0.3)}
            className="relative md:absolute z-20 md:left-[calc(50%+180px)] md:top-[210px] w-full max-w-[240px]"
          >
            <div className="group bg-[#f8fafc] rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e2e8f0] p-5 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-500 transform md:rotate-[5deg]">
              <div className="w-full relative aspect-square flex flex-col items-center justify-center">
                 {/* Clock ticks background — Continuous Rotating Clock Animation */}
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 w-full h-full"
                 >
                   <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                      {Array.from({length: 60}).map((_, i) => (
                        <line key={i} x1="50" y1="5" x2="50" y2={i % 5 === 0 ? "11" : "7"} stroke="#0f172a" strokeWidth={i % 5 === 0 ? "1.5" : "1"} transform={`rotate(${i * 6} 50 50)`} />
                      ))}
                   </svg>
                 </motion.div>
                 
                 <div className="z-10 text-center transform transition-transform duration-500 group-hover:scale-110">
                    <div className="text-[2.5rem] font-display font-bold text-[#0f172a] mb-1 tracking-tight">
                      24/7
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 leading-snug">
                      Social media<br/>managed
                    </p>
                    
                    <motion.div
                      whileInView={{ color: '#3B82F6' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mt-5 flex items-center justify-center gap-4 text-slate-400"
                    >
                       <span className="text-[10px] transform transition-transform group-hover:-translate-x-1">◁</span>
                       <div className="w-7 h-7 rounded-full border border-blue-500 flex items-center justify-center text-blue-600 font-bold text-[10px] shadow-sm">
                          II
                       </div>
                       <span className="text-[10px] transform transition-transform group-hover:translate-x-1">▷</span>
                    </motion.div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
