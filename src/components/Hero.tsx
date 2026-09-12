import { ArrowDown } from 'lucide-react';
import headshot from '@/assets/jaideep-headshot.jpg';
import unitxLogo from '@/assets/logos/unitx-logo.jpg';
import greyorangeLogo from '@/assets/logos/greyorange-logo.png';
import fiatLogo from '@/assets/logos/fiat-logo.png';
import bumblebeeLogo from '@/assets/logos/bumblebee-logo.png';
import ziplineLogo from '@/assets/logos/zipline-logo.png';
import millLogo from '@/assets/logos/mill-logo.png';
import ProtectedImage from '@/components/ProtectedImage';

const companyLogos = [
  { name: 'Mill', logo: millLogo, height: 'h-7' },
  { name: 'Zipline', logo: ziplineLogo, height: 'h-7' },
  { name: 'UnitX', logo: unitxLogo, height: 'h-10' },
  { name: 'Fiat Chrysler', logo: fiatLogo, height: 'h-7' },
  { name: 'GreyOrange', logo: greyorangeLogo, height: 'h-8' },
  { name: 'Bumblebee Spaces', logo: bumblebeeLogo, height: 'h-10' },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-12 bg-background">
      <div className="container-custom relative z-10">
        {/* Main content */}
        <header className="mb-24 md:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-16">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6 block animate-fade-up">
                Senior Engineering Leadership
              </span>
              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl leading-[0.9] mb-8 italic tracking-tight animate-fade-up animation-delay-100">
                Jaideep Singh
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-xl animate-fade-up animation-delay-200">
                Leading hardware organizations from concept to certified production across robotics, autonomous systems, and consumer products.
              </p>
            </div>

            <div className="animate-fade-up animation-delay-300 flex justify-center lg:justify-end">
              <div className="w-52 h-72 md:w-56 md:h-80 border border-border overflow-hidden relative bg-muted">
                <ProtectedImage
                  src={headshot}
                  alt="Jaideep Singh"
                  className="w-full h-full object-cover object-[center_25%] grayscale contrast-110"
                />
              </div>
            </div>
          </div>

          {/* Logos Section */}
          <div className="mt-20 md:mt-24 pt-8 border-t border-border animate-fade-up animation-delay-400">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6 md:mb-8 block">
              Previously Leading Teams At
            </span>
            <div className="flex flex-wrap items-center gap-x-10 md:gap-x-16 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {companyLogos.map(company => (
                <ProtectedImage
                  key={company.name}
                  src={company.logo}
                  alt={company.name}
                  className={`${company.height} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}
            </div>
          </div>
        </header>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
