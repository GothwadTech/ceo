import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="page-title">
      <div className="hero-grid page-container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-rule" aria-hidden="true" />
            Founder &amp; CEO <span className="eyebrow-divider">/</span> Gothwad Tech
          </p>

          <h1 id="page-title">
            Yuvkesh <span>Meena</span>
          </h1>

          <p className="hero-lede">
            Founder and chief executive of Gothwad Tech, leading a broad portfolio of software
            products for web and mobile.
          </p>

          <p className="hero-origin">
            <MapPin size={16} aria-hidden="true" />
            <span>Born in {PROFILE.birthplace}</span>
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore the work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href="#about">
              Read the profile <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <p className="hero-description">
            Building across communication, digital services, media, developer tools and education.
          </p>
        </div>

        <figure className="hero-figure">
          <div className="monogram-panel" role="img" aria-label="Yuvkesh Meena monogram, YM">
            <div className="monogram-grid" aria-hidden="true" />
            <span className="panel-index">GOTHWAD TECH <span>·</span> INDIA</span>
            <span className="monogram-mark" aria-hidden="true">YM</span>
            <span className="monogram-seal" aria-hidden="true">Y<br />M</span>
            <div className="monogram-caption">
              <span className="caption-line" aria-hidden="true" />
              <span>
                <strong>Yuvkesh Meena</strong>
                <small>Founder &amp; Chief Executive Officer</small>
              </span>
            </div>
          </div>
          <figcaption>
            <span>Gothwad Tech</span>
            <span>Born in Dausa, Rajasthan</span>
          </figcaption>
        </figure>
      </div>

      <div className="hero-baseline page-container" aria-label="Profile highlights">
        <div className="baseline-item">
          <span className="baseline-label">Role</span>
          <span className="baseline-value">Founder &amp; CEO</span>
        </div>
        <div className="baseline-item">
          <span className="baseline-label">Organization</span>
          <span className="baseline-value">Gothwad Tech</span>
        </div>
        <div className="baseline-item">
          <span className="baseline-label">Born in</span>
          <span className="baseline-value">Dausa, Rajasthan, India</span>
        </div>
        <a className="baseline-link" href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">
          Public work on GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
