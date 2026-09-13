import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const visibleProjects = projects.filter(p => !p.hidden);

  return (
    <section id="work" className="section-padding bg-background border-t border-border">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 pb-4 border-b border-foreground">
          <span className="text-sm text-muted-foreground mb-3 block">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl italic">Selected Works</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
