const About = () => {
  return (
    <section id="about" className="section-padding bg-background border-t border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - Heading */}
          <div className="lg:col-span-4">
            <span className="text-sm text-muted-foreground mb-4 block">
              About
            </span>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.05] italic">
              Builder of physical systems.
            </h2>
          </div>

          {/* Right - Story */}
          <div className="lg:col-span-8">
            <div className="max-w-2xl space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium text-lg md:text-xl">
                I work at the intersection of mechanical, electrical, and software engineering in a range of industries.
              </p>
              <p>
                I've led hardware organizations from founding through Series C: building teams, managing budgets, navigating certifications, and shipping products that work at scale. I care about getting the details right and moving fast.
              </p>
              <p>
                Background in Physics, Mechanical Engineering, and Hybrid Electric Vehicles.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <span className="text-sm text-muted-foreground mb-6 block">
                Capabilities
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  'Systems Engineering',
                  'Team Leadership',
                  'Product Certification',
                  'Robotics',
                  'Manufacturing Ramp',
                  'Startup Operations',
                  'Hardware Integration',
                  'Embedded Systems',
                  'Cross-functional Leadership',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="px-4 py-2 text-sm text-foreground border border-border rounded-full bg-background"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
