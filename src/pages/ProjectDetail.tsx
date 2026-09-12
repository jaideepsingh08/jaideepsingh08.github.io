import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Calendar, Building2, User } from 'lucide-react';
import { getProjectById, projects } from '@/data/projects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProtectedImage from '@/components/ProtectedImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container-custom pt-32 text-center">
          <h1 className="font-heading text-4xl italic mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get related projects (same category, exclude current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id && !p.hidden)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding border-b border-border">
          <div className="container-custom">
            {/* Back Link */}
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
              {/* Left - Info */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  {project.category}
                </span>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl italic mb-6 leading-[1.05]">
                  {project.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-mono text-[10px] uppercase tracking-widest">
                  {project.year && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  )}
                  {project.company && (
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{project.company}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{project.role}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right - Image */}
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden">
                <ProtectedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="font-heading text-2xl md:text-3xl italic mb-6">Overview</h2>
                <div className="max-w-none">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mt-12">
                  <h3 className="font-heading text-xl md:text-2xl italic mb-6">Key Contributions</h3>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-28">
                  {/* Technologies */}
                  <div className="p-6 border border-border bg-muted mb-6">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 border border-border text-foreground text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="p-6 border border-foreground bg-foreground text-background">
                    <h3 className="font-heading text-xl italic mb-2">Discuss this work</h3>
                    <p className="text-sm text-background/70 mb-4 leading-relaxed">
                      Open to conversations about hard problems, new projects, and fellow builders.
                    </p>
                    <a
                      href="mailto:jaideepsingh08@gmail.com"
                      className="inline-flex items-center gap-2 text-sm font-medium border-b border-background/50 pb-1 hover:border-background transition-colors"
                    >
                      Get in touch
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 1 && (
          <section className="section-padding border-t border-border">
            <div className="container-custom">
              <h2 className="font-heading text-2xl md:text-3xl italic mb-8">Project Gallery</h2>
              <div className="relative px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {project.gallery.map((img, index) => (
                      <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="aspect-[4/3] overflow-hidden border border-border bg-muted">
                          <ProtectedImage
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="section-padding border-t border-border">
            <div className="container-custom">
              <h2 className="font-heading text-2xl md:text-3xl italic mb-8">Related Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    to={`/project/${related.id}`}
                    className="group block border border-border p-6 hover:border-foreground transition-colors"
                  >
                    <h3 className="font-heading text-xl italic mb-2 group-hover:underline">
                      {related.shortTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default ProjectDetail;
