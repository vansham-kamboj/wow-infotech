import { Reveal, StaggerContainer, StaggerItem } from './Reveal';
import { Check, ArrowRight, Code, LayoutDashboard, TrendingUp } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 md:px-8 py-24 bg-[#12110F]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal className="mb-16 max-w-3xl">
          <p className="text-accent font-medium mb-3 uppercase tracking-wider text-sm">Pricing</p>
          <h2 className="font-display font-bold text-4xl md:text-[3.5rem] tracking-tight uppercase text-white leading-tight mb-4">
            Value that fuels growth
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We don't just build things, we provide real value to your business's growth. 
            Transparent pricing tailored to your requirements and desired quality.
          </p>
        </Reveal>

        {/* Pricing Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Static Websites */}
          <StaggerItem>
            <div className="bg-[#161616] border border-white/10 rounded-[2rem] p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group hover:border-white/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex-1">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <Code className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-display font-medium text-xl mb-2 text-white">Websites</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wide">From</span>
                  <span className="font-display font-bold text-3xl xl:text-4xl text-white">₹5,000</span>
                </div>
                
                <p className="text-white/70 mb-8 leading-relaxed text-sm">
                  Perfect for portfolios and landing pages. <strong className="text-white font-semibold">Our websites help you in getting ranked on Google</strong>, driving real organic traffic to your business.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    'Optimized for Google Rankings',
                    'Fast load times & performance',
                    'Fully responsive design',
                    'Modern, premium aesthetics'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <a
                  href="#contact"
                  className="flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-white text-[#12110F] font-medium hover:bg-accent transition-colors duration-500 group/btn"
                >
                  <span className="text-sm">Start project</span>
                  <ArrowRight className="w-4 h-4 text-[#12110F] group-hover/btn:translate-x-1 transition-all duration-500" />
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: SEO */}
          <StaggerItem>
            <div className="bg-[#161616] border border-white/10 rounded-[2rem] p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group hover:border-white/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex-1">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <TrendingUp className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-display font-medium text-xl mb-2 text-white">SEO & Ranking</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wide">From</span>
                  <span className="font-display font-bold text-3xl xl:text-4xl text-white">₹2,000</span>
                </div>
                
                <p className="text-white/70 mb-8 leading-relaxed text-sm">
                  Your business gets <strong className="text-white font-semibold">ranked on top</strong>. When people search, your profile comes first so you get continuous, high-quality enquiries.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    'Top search engine placement',
                    'Local profile optimization',
                    'Targeted keyword strategy',
                    'Enquiry & lead generation'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <a
                  href="#contact"
                  className="flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-white text-[#12110F] font-medium hover:bg-accent transition-colors duration-500 group/btn"
                >
                  <span className="text-sm">Rank higher</span>
                  <ArrowRight className="w-4 h-4 text-[#12110F] group-hover/btn:translate-x-1 transition-all duration-500" />
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: Management Systems */}
          <StaggerItem>
            <div className="bg-[#161616] border border-accent/20 rounded-[2rem] p-8 h-full flex flex-col hover:shadow-2xl hover:shadow-accent/10 transition-shadow duration-500 relative overflow-hidden group hover:border-accent/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-500" />
              
              <div className="relative z-10 flex-1">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 border border-accent/20">
                  <LayoutDashboard className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-display font-medium text-xl mb-2 text-white">Management / CRM</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wide">Custom Solutions</span>
                  <span className="font-display font-bold text-3xl xl:text-4xl text-white">Custom</span>
                </div>
                
                <p className="text-white/70 mb-8 leading-relaxed text-sm">
                  Our custom CRMs <strong className="text-white font-semibold">make your productivity more efficient by 200%</strong>, making everyday management incredibly easy for you.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    'Automated business workflows',
                    'Seamless everyday management',
                    'Secure & scalable architecture',
                    '200% efficiency boost'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <a
                  href="#contact"
                  className="flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-accent text-[#12110F] font-medium hover:bg-white transition-colors duration-500 group/btn"
                >
                  <span className="text-sm">Get a quote</span>
                  <ArrowRight className="w-4 h-4 text-[#12110F] group-hover/btn:translate-x-1 transition-transform duration-500" />
                </a>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}
