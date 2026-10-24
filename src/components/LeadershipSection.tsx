import { ArrowUpRight, BookOpen, Layers3, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LEADERSHIP_THEMES, PROFILE } from '../data/profileData';

const themeIcons: Record<string, LucideIcon> = {
  network: Layers3,
  devices: Smartphone,
  book: BookOpen,
};

export function LeadershipSection() {
  return (
    <section className="leadership-section section-space" id="leadership" aria-labelledby="leadership-title">
      <div className="page-container">
        <div className="leadership-heading">
          <div>
            <p className="eyebrow eyebrow-light">Leadership &amp; direction</p>
            <h2 id="leadership-title">The work behind the ecosystem.</h2>
          </div>
          <p className="leadership-intro">
            As CEO, Yuvkesh leads Gothwad Tech’s product portfolio. Across its public
            projects, a few clear patterns emerge.
          </p>
        </div>

        <div className="theme-grid">
          {LEADERSHIP_THEMES.map((theme) => {
            const Icon = themeIcons[theme.icon];

            return (
              <article className="theme-item" key={theme.title}>
                <div className="theme-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </article>
            );
          })}
        </div>

        <div className="leadership-source">
          <span>Explore the documentation</span>
          <a href={PROFILE.docsUrl} target="_blank" rel="noopener noreferrer">
            Gothwad Tech developer docs <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
