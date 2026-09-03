import { Counter, Reveal, Parallax } from './Reveal';

export function StatsSection() {
  return (
    <section className="px-4 md:px-8 pb-8">
      <div className="max-w-[1600px] mx-auto bento-grid">
        {/* Stat 1 */}
        <Reveal
          delay={0}
          className="col-span-1 sm:col-span-3 md:col-span-3 bg-panel border border-border rounded-cell-lg p-10 lg:p-14 cell flex flex-col justify-end relative overflow-hidden"
        >
          <Parallax speed={-0.05} className="absolute -top-4 -right-4 pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
          </Parallax>
          <div className="relative z-10">
            <Counter target={95} suffix="%" className="font-display font-bold text-7xl lg:text-8xl text-dark block mb-3" />
            <p className="font-medium text-muted text-lg">Client Retention</p>
          </div>
        </Reveal>

        {/* Stat 2 */}
        <Reveal
          delay={0.1}
          className="col-span-1 sm:col-span-3 md:col-span-3 bg-panel border border-border rounded-cell-lg p-10 lg:p-14 cell flex flex-col justify-end relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="font-display font-bold text-7xl lg:text-8xl text-dark block mb-3">2x</span>
            <p className="font-medium text-muted text-lg">Faster Turnaround</p>
          </div>
        </Reveal>

        {/* Accent Banner */}
        <Reveal
          delay={0.2}
          className="col-span-1 sm:col-span-6 md:col-span-6 bg-accent rounded-cell-lg p-10 lg:p-14 cell flex items-center justify-between relative overflow-hidden"
        >
          <div className="glow-dot top-0 right-0 opacity-40" />
          <p className="font-display font-bold text-2xl md:text-3xl text-dark relative z-10 max-w-md">
            One team. Every channel. Real results.
          </p>
          <Parallax speed={0.08} className="hidden md:block relative z-10">
            <div className="w-16 h-16 rounded-full bg-dark/10 flex items-center justify-center">
              <span className="text-dark text-2xl">→</span>
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
