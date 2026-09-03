import { Reveal, StaggerContainer } from './Reveal';
import { Search, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'UNDERSTAND FIRST',
    desc: 'We dive deep to understand your work, your process, and your exact business needs first.',
    btnText: 'Get Started',
  },
  {
    icon: Lightbulb,
    title: 'STRATEGIZE & BUILD',
    desc: 'We develop the best strategy tailored to you and deliver high-quality work based on your goals.',
    btnText: 'Learn More',
  },
  {
    icon: ShieldCheck,
    title: 'ZERO-RISK GUARANTEE',
    desc: "We don't charge you until you are completely satisfied. You only pay when the work perfectly matches your vision.",
    btnText: 'Start Risk-Free',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="px-4 md:px-8 py-4 bg-[#161616]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <Reveal className="mb-12">
          <h2 className="font-display font-normal text-3xl md:text-5xl tracking-tight uppercase text-white">
            HOW WE WORK
          </h2>
        </Reveal>

        {/* Process Cards - Tight Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="bg-white p-8 lg:p-10 flex flex-col justify-between group rounded-xl">
                <div>
                  {/* Top Icon */}
                  <div className="mb-10">
                    <Icon className="w-16 h-16 text-[#12110F]" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-normal text-[1.3rem] leading-tight mb-4 text-[#12110F] uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[#12110F]/80 font-light text-[15px] leading-relaxed mb-12 max-w-sm">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Button - Styled like Navbar */}
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between min-w-[160px] px-6 py-3 rounded-full bg-[#12110F] text-white font-medium text-sm hover:bg-[#F5B301] hover:text-[#12110F] transition-colors duration-500 shadow-sm group/btn"
                  >
                    <span>{step.btnText}</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-[#12110F] group-hover/btn:translate-x-1 transition-all duration-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
