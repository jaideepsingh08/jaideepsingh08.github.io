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
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-12 bg-background">
      <div className="container-custom relative z-10">
        {/* Main content */}
        <header className="mb-24 md:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-16">
            <div className="max-w-2xl">
              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl leading-[0.9] mb-8 italic tracking-tight animate-fade-up animation-delay-100">
                Jaideep Singh
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-xl animate-fade-up animation-delay-200">
                Leading hardware organizations from concept to certified production across robotics, autonomous systems, and consumer products.
              </p>
            </div>

            <div className="animate-fade-up animation-delay-300 flex justify-center lg:justify-end mt-10 md:mt-14">
              <div className="w-[17.5rem] h-[22.5rem] md:w-80 md:h-[27.5rem] border border-border rounded-[1rem] overflow-hidden relative bg-muted">
                <ProtectedImage
                  src={headshot}
                  alt="Jaideep Singh"
                  className="w-full h-full object-cover object-[center_22%]"
                />
              </div>

            </div>
          </div>

          {/* Logos Section */}
          <div className="mt-20 md:mt-24 pt-8 border-t border-border animate-fade-up animation-delay-400">
            <span className="text-sm text-muted-foreground mb-6 md:mb-8 block">
              Previously leading teams at
            </span>
            <div className="relative overflow-hidden group py-2">
              <div className="flex w-max items-center gap-[90px] md:gap-[126px] pr-[90px] md:pr-[126px] animate-marquee group-hover:[animation-play-state:paused]">
                {[...companyLogos, ...companyLogos].map((company, i) => (
                  <ProtectedImage
                    key={`${company.name}-${i}`}
                    src={company.logo}
                    alt={company.name}
                    className="shrink-0 h-7 md:h-10 w-auto max-w-[130px] md:max-w-[185px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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
