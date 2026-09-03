import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Magnetic, Reveal, Parallax } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [60, 28]);

  return (
    <section id="contact" ref={sectionRef} className="px-4 md:px-8 py-12">
      <motion.div
        style={{ scale, borderRadius }}
        className="max-w-[1600px] mx-auto bg-dark text-white py-16 md:py-32 px-6 md:px-20 relative overflow-hidden"
      >
        {/* Glow */}
        <Parallax speed={0.05} className="absolute -top-20 -right-20 pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-accent/20 blur-[100px]" />
        </Parallax>
        <Parallax speed={-0.08} className="absolute -bottom-20 -left-20 pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-accent/10 blur-[80px]" />
        </Parallax>

        {/* Floating Dots */}
        <Parallax speed={-0.1} className="absolute top-20 right-20 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
            ))}
          </div>
        </Parallax>

        <div className="relative z-10 max-w-3xl">
          <Reveal>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 md:mb-8 leading-[1.1]">
              Let's Build Something People Notice
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-white/50 text-lg sm:text-xl md:text-2xl mb-10 md:mb-14 max-w-xl leading-relaxed">
              No forms. No back and forth. Just write to us.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Magnetic strength={0.12}>
              <motion.a
                href="mailto:hello@wowtecho.com"
                whileTap={{ scale: 0.92, transition: { type: "spring", stiffness: 500, damping: 12 } }}
                className="group inline-flex items-center gap-3 md:gap-4 bg-accent text-dark rounded-full px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-medium hover:bg-white transition-colors duration-500 shadow-2xl break-all sm:break-normal max-w-full"
              >
                <span className="truncate">hello@wowtecho.com</span>
                <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </Magnetic>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}
