import { Mail, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="section-padding bg-background border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-20">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl italic mb-6">
              Let's build the next machine.
            </h2>
            <a
              href="mailto:jaideepsingh08@gmail.com"
              className="text-lg md:text-xl border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              jaideepsingh08@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/jaideepsingh08/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:jaideepsingh08@gmail.com"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>San Francisco Bay Area</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Jaideep Singh. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Hardware · Robotics · Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
