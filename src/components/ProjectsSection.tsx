import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  Fingerprint,
  FolderOpen,
  Globe2,
  GraduationCap,
  HardDrive,
  Laptop,
  Mail,
  MessageCircle,
  Monitor,
  Play,
  Search,
  Send,
  ShoppingBag,
  Video,
  Wifi,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  GOTHWAD_PROJECTS,
  PROJECT_CATEGORIES,
  PROFILE,
  type ProjectFilter,
  type ProductProject,
} from '../data/profileData';

const projectIcons: Record<string, LucideIcon> = {
  messages: MessageCircle,
  send: Send,
  message: MessageCircle,
  video: Video,
  identity: Fingerprint,
  mail: Mail,
  drive: HardDrive,
  store: ShoppingBag,
  play: Play,
  globe: Globe2,
  monitor: Monitor,
  folder: FolderOpen,
  wifi: Wifi,
  computer: Laptop,
  code: Code2,
  remote: Monitor,
  education: GraduationCap,
};

function ProjectCard({ project }: { project: ProductProject }) {
  const Icon = projectIcons[project.icon] ?? Code2;

  return (
    <article className="project-card">
      <div className="project-card-topline">
        <span className="project-icon" aria-hidden="true">
          <Icon size={19} strokeWidth={1.7} />
        </span>
        <span className="project-category">{project.category}</span>
        {project.note && <span className="project-note">{project.note}</span>}
      </div>

      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-platform">{project.platform}</p>

      <div className="project-repositories">
        <span className="source-label">Source</span>
        <div className="source-links">
          {project.repositories.map((repo) => (
            <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer">
              {repo.name} <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilter>('All work');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return GOTHWAD_PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'All work' || project.category === selectedCategory;
      const searchableText = [
        project.name,
        project.category,
        project.description,
        project.platform,
        ...project.repositories.map((repo) => repo.name),
      ]
        .join(' ')
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="projects-section section-space" id="work" aria-labelledby="work-title">
      <div className="page-container">
        <div className="projects-heading">
          <div className="projects-heading-copy">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">A portfolio across everyday digital life.</h2>
            <p>
              A curated view of products and platforms in Gothwad Tech’s public repositories—from
              communication and identity to Android tools and education.
            </p>
          </div>
          <a className="text-link repository-index-link" href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">
            Browse all public repositories <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="project-controls">
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                className={`filter-button${selectedCategory === category ? ' is-active' : ''}`}
                type="button"
                key={category}
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="project-search">
            <Search size={16} aria-hidden="true" />
            <span className="visually-hidden">Search projects</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search products or repositories"
            />
            {searchQuery && (
              <button
                className="clear-search"
                type="button"
                aria-label="Clear project search"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>
            )}
          </label>
        </div>

        <p className="results-count" aria-live="polite">
          {filteredProjects.length === 1
            ? '1 selected project'
            : `${filteredProjects.length} selected projects`}
        </p>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="eyebrow">No matches</p>
            <h3>Try another search.</h3>
            <p>Search by product name, repository, platform or category.</p>
            <button
              className="inline-arrow-link"
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All work');
              }}
            >
              Reset filters
            </button>
          </div>
        )}

        <div className="project-source-note">
          <span className="note-marker" aria-hidden="true">i</span>
          <p>{PROFILE.workNote}</p>
          <a href={PROFILE.docsUrl} target="_blank" rel="noopener noreferrer">
            Read the developer docs <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
