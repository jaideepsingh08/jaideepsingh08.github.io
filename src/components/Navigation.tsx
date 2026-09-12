import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/#home', section: 'home' },
    { name: 'About', path: '/#about', section: 'about' },
    { name: 'Work', path: '/#work', section: 'work' },
    { name: 'Contact', path: '/#contact', section: 'contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jaideepsingh08/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jaideepsingh08@gmail.com', label: 'Email' },
  ];

  useEffect(() => {
    if (location.pathname !== '/') return;

    const updateActiveSection = () => {
      const sectionIds = navLinks.map(link => link.section);
      const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (atPageBottom) {
        setActiveSection('contact');
        return;
      }

      const current = sectionIds.reduce((active, sectionId) => {
        const section = document.getElementById(sectionId);
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.35
          ? sectionId
          : active;
      }, 'home');

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  const isActive = (section: string) => location.pathname === '/' && activeSection === section;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl md:text-3xl tracking-tight text-foreground">
            Jaideep Singh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.path}
                className={`relative font-heading italic text-xl tracking-tight transition-colors pb-1 ${
                  isActive(link.section)
                    ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-5">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <div className="container-custom py-6 space-y-5">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-heading italic text-xl transition-colors ${
                    isActive(link.section)
                      ? 'text-foreground underline decoration-2 underline-offset-4'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-5 pt-4 border-t border-border">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
