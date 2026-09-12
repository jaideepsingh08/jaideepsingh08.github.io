import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import ProtectedImage from '@/components/ProtectedImage';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryLabels: Record<string, string> = {
  professional: 'Professional',
  academic: 'Academic',
  personal: 'Personal',
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isOffset = index % 2 === 1;

  return (
    <Link to={`/project/${project.id}`} className={`group block ${isOffset ? 'md:mt-16' : ''}`}>
      <article className="relative">
        {/* Image */}
        <div className="aspect-[4/5] bg-muted overflow-hidden relative mb-6 border border-border">
          <ProtectedImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="font-mono text-[10px] uppercase tracking-widest bg-foreground text-background px-2.5 py-1">
              {String(index + 1).padStart(2, '0')} / {categoryLabels[project.category]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-heading text-xl md:text-2xl mb-2 group-hover:italic transition-all">
              {project.shortTitle}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 max-w-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground mt-1 shrink-0">
            {project.year}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-5 h-5 text-foreground" />
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
