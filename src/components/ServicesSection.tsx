import { StaggerContainer, StaggerItem, Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    desc: 'Fast, modern websites that turn visitors into customers.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80',
  },
  {
    title: 'App Development',
    desc: 'iOS and Android apps built for real users, not just app stores.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=200&q=80',
  },
  {
    title: 'Enterprise Apps',
    desc: 'Scalable solutions with real-world utility, from logistics to platforms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80',
  },
  {
    title: 'Performance Ads',
    desc: 'Meta and Google ads that bring leads, not just likes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80',
  },
  {
    title: 'Social Media',
    desc: 'Content and management that builds a brand people follow.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=200&q=80',
  },
];



export function ServicesSection() {
  return (
    <section id="services" className="px-4 md:px-8 py-24 bg-white relative">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Area */}
        <Reveal className="mb-16 max-w-2xl">
          <p className="text-accent font-medium mb-3 uppercase tracking-wider text-sm">What we do</p>
          <h2 className="font-display font-bold text-4xl md:text-[3.5rem] tracking-tight uppercase text-[#12110F] leading-tight">
            Everything your brand needs to grow
          </h2>
        </Reveal>

        {/* Divider */}
        <Reveal>
          <div className="w-full h-[1px] bg-gray-200 mb-16" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Text */}
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <p className="text-gray-800 font-medium text-[15px] leading-relaxed max-w-[90%]">
                Wow Techo empowers founders, businesses and institutions across industries, both local and global, to build anything they want, any way they want. Take control with the best custom digital solutions and supportive marketing team at Wow Techo.
              </p>
            </Reveal>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, idx) => {
                return (
                  <StaggerItem key={idx} className="col-span-1">
                    <a
                      href="#contact"
                      className="group relative flex rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
                    >
                      {/* Spinning gradient for hover glow */}
                      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[800px] h-[800px] absolute animate-[spin_2s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                             style={{ background: 'conic-gradient(from 90deg, transparent 60%, #F5B301 100%)' }} 
                        />
                      </div>

                      {/* Static border (fades out on hover) */}
                      <div className="absolute inset-0 rounded-2xl border border-gray-200 z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Inner Content Container */}
                      <div className="relative z-20 m-[2px] flex-1 bg-white rounded-[14px] p-2 flex items-center overflow-hidden">
                        {/* Expanding Hover Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pt-[120%] bg-[#12110F] rounded-full scale-0 group-hover:scale-[2] transition-transform duration-700 ease-out pointer-events-none z-0" />

                        <div className="relative z-10 flex items-center w-full">
                          {/* Left Graphic - Image with padding */}
                          <div className="w-[85px] h-[85px] shrink-0 rounded-[10px] overflow-hidden relative mr-4">
                            <img 
                              src={service.image} 
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 py-1">
                            <h3 className="font-display font-bold text-[13px] leading-tight mb-1 text-gray-900 group-hover:text-accent transition-colors duration-500 uppercase tracking-wide">
                              {service.title}
                            </h3>
                            <p className="text-[12px] leading-snug text-gray-500 group-hover:text-accent/80 transition-colors duration-500 line-clamp-2">
                              {service.desc}
                            </p>
                          </div>

                          {/* Right Arrow */}
                          <div className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center mx-3 group-hover:border-accent transition-colors duration-500 bg-white group-hover:bg-[#12110F]">
                            <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-accent transition-colors duration-500" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
