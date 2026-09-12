import { useState } from 'react';
import { projects, ProjectCategory } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const filters: { label: string; value: 'all' | ProjectCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Professional', value: 'professional' },
    { label: 'Academic', value: 'academic' },
    { label: 'Personal', value: 'personal' },
  ];

  const visibleProjects = projects.filter(p => !p.hidden);
  const filteredProjects =
    activeFilter === 'all'
      ? visibleProjects
      : visibleProjects.filter(p => p.category === activeFilter);

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

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-sm border transition-colors ${
                activeFilter === filter.value
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
