import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profileData';

const profileFacts = [
  { label: 'Full name', value: PROFILE.name },
  { label: 'Role', value: PROFILE.role },
  { label: 'Organization', value: PROFILE.organization },
  { label: 'Company founder', value: PROFILE.founder },
  { label: 'Born in', value: PROFILE.birthplace },
];

export function ProfileSection() {
  return (
    <section className="profile-section section-space" id="about" aria-labelledby="about-title">
      <div className="page-container profile-layout">
        <div className="section-aside">
          <p className="eyebrow">The profile</p>
          <p className="aside-note">A concise introduction to Yuvkesh Meena’s role at Gothwad Tech.</p>
        </div>

        <div className="profile-main">
          <h2 id="about-title">Leading a connected technology portfolio.</h2>
          <div className="profile-prose">
            <p className="profile-lead">{PROFILE.introduction}</p>
            <p>{PROFILE.biography}</p>
          </div>

          <a className="inline-arrow-link" href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">
            Explore Gothwad Tech’s public work <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <dl className="profile-facts" aria-label="Yuvkesh Meena profile facts">
          {profileFacts.map((fact) => (
            <div className="profile-fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
