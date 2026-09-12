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
              <span className="text-sm text-muted-foreground mb-8 block">
                Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">
                    Build
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Systems Engineering</li>
                    <li>Robotics</li>
                    <li>Hardware Integration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">
                    Ship
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Product Certification</li>
                    <li>Manufacturing Ramp</li>
                    <li>Embedded Systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">
                    Lead
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Team Leadership</li>
                    <li>Startup Operations</li>
                    <li>Cross-functional Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
