import React from 'react';
import { CustomTailoringIcon, AlterationsIcon, WeddingWearIcon, DesignConsultationIcon } from '../../../../public/assets/home/svgs';


type Service = {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgClass: string;
};

const services: Service[] = [
  {
    title: 'Custom Tailoring',
    description: 'From sketch to stitch, we create garments that are uniquely yours, tailored to your precise measurements and style.',
    Icon: CustomTailoringIcon,
    bgClass: 'card-bg-1',
  },
  {
    title: 'Alterations & Repairs',
    description: 'Perfecting the fit of your cherished garments or restoring them to their former glory with meticulous care.',
    Icon: AlterationsIcon,
    bgClass: 'card-bg-2',
  },
  {
    title: 'Wedding & Event Wear',
    description: 'Crafting breathtaking gowns and occasion wear that ensure you are the center of attention on your special day.',
    Icon: WeddingWearIcon,
    bgClass: 'card-bg-3',
  },
  {
    title: 'Design Consultation',
    description: 'Collaborate with our designers to bring your vision to life, from fabric selection to the final silhouette.',
    Icon: DesignConsultationIcon,
    bgClass: 'card-bg-4',
  },
];

export const ServicesSection = () => {
  const extendedServices = [...services, ...services];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-white font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl opacity-50 -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-50 translate-x-1/4 translate-y-1/4"></div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal">
            Our Services
            <span className="block w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></span>
          </h2>
        </div>
      </div>
      
      <div className="w-full inline-flex p-6 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll hover:[animation-play-state:paused]">
          {[...extendedServices,...extendedServices] .map((service, index) => (
            <li key={index}>
              <div className={`relative group w-[350px] h-[450px] bg-white rounded-2xl shadow-gold-glow p-8 transition-all duration-500 ease-in-out hover:shadow-gold-glow-hover hover:-translate-y-3 flex flex-col overflow-hidden ${service.bgClass}`}>
                
                {/* Decorative Background Number */}
                <span className="absolute top-6 right-6 font-serif text-6xl text-brand-sage/10 transition-colors duration-500 group-hover:text-brand-sage/20">
                  0{index % services.length + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Framed Icon */}
                  <div className="mb-6 w-20 h-20 flex items-center justify-center border border-brand-gold/20 rounded-full bg-white/50 backdrop-blur-sm transition-colors duration-500 group-hover:border-brand-gold/50">
                    <service.Icon className="w-10 h-10 text-brand-gold transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl font-bold text-brand-charcoal mb-4 text-left">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-brand-soft-charcoal leading-relaxed text-left flex-grow">
                    {service.description}
                  </p>

                  {/* "Explore" CTA */}
                  <div className="mt-6 text-left">
                    <div className="w-1/3 h-[1px] bg-gradient-to-r from-brand-gold/80 to-transparent mb-3"></div>
                    <a href="#" className="font-sans text-sm font-semibold text-brand-gold group-hover:text-brand-charcoal transition-colors duration-500">
                      EXPLORE
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;