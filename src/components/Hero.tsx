import { ArrowDown } from 'lucide-react';
import headshot from '@/assets/jaideep-headshot.jpg';
import unitxLogo from '@/assets/logos/unitx-logo.png';
import greyorangeLogo from '@/assets/logos/greyorange-logo.png';
import fiatLogo from '@/assets/logos/fiat-logo.png';
import bumblebeeLogo from '@/assets/logos/bumblebee-logo.png';
import ziplineLogo from '@/assets/logos/zipline-logo.png';
import millLogo from '@/assets/logos/mill-logo.png';
import chryslerLogo from '@/assets/logos/chrysler-logo.png';
import ProtectedImage from '@/components/ProtectedImage';

const companyLogos = [
  { name: 'Mill', logo: millLogo },
  { name: 'Zipline', logo: ziplineLogo },
  { name: 'UnitX', logo: unitxLogo },
  { name: 'Fiat', logo: fiatLogo },
  { name: 'Chrysler', logo: chryslerLogo },
  { name: 'GreyOrange', logo: greyorangeLogo },
  { name: 'Bumblebee Spaces', logo: bumblebeeLogo },
];


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-12 bg-background">
      <div className="container-custom w-full relative z-10">
        {/* Main content */}
        <header className="mb-16 md:mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 lg:gap-16">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 md:mb-8 italic tracking-tight animate-fade-up animation-delay-100">
                Jaideep Singh
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground max-w-xl animate-fade-up animation-delay-200">
                Leading hardware organizations from concept to certified production across robotics, autonomous systems, and consumer products.
              </p>
            </div>

            <div className="animate-fade-up animation-delay-300 w-full flex justify-center lg:justify-end mt-6 md:mt-10 lg:mt-14">
              <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[27.5rem] border border-border rounded-[1rem] overflow-hidden relative bg-muted">
                <ProtectedImage
                  src={headshot}
                  alt="Jaideep Singh"
                  className="w-full h-full object-cover object-[center_22%]"
                />
              </div>
            </div>
          </div>

          {/* Logos Section */}
          <div className="mt-12 md:mt-20 pt-4 md:pt-6 border-t border-border animate-fade-up animation-delay-400">
            <span className="text-sm text-muted-foreground mb-4 md:mb-6 block">
Previously led teams at
            </span>
            <div className="relative overflow-hidden group py-1 md:py-2">
              <div className="flex w-max items-center gap-10 md:gap-[126px] pr-10 md:pr-[126px] animate-marquee group-hover:[animation-play-state:paused]">
                {[...companyLogos, ...companyLogos].map((company, i) => (
                  <ProtectedImage
                    key={`${company.name}-${i}`}
                    src={company.logo}
                    alt={company.name}
                    className="shrink-0 h-[1.35rem] md:h-8 w-auto max-w-[104px] md:max-w-[148px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
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
