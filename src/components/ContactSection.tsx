import { ArrowUpRight, Github, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export function ContactSection() {
  return (
    <section className="contact-section section-space" id="contact" aria-labelledby="contact-title">
      <div className="page-container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">Contact</p>
          <h2 id="contact-title">Start a conversation.</h2>
          <p>
            For product, partnership and media enquiries, use Gothwad Tech’s public channels.
          </p>
          <div className="contact-location">
            <MapPin size={16} aria-hidden="true" />
            <span>{PROFILE.birthplace}</span>
          </div>
        </div>

        <div className="contact-links">
          <a className="contact-link" href={`mailto:${PROFILE.email}?subject=Enquiry%20for%20Yuvkesh%20Meena`}>
            <span className="contact-link-icon" aria-hidden="true"><Mail size={19} /></span>
            <span className="contact-link-copy">
              <small>Official email</small>
              <strong>{PROFILE.email}</strong>
            </span>
            <ArrowUpRight className="contact-link-arrow" size={18} aria-hidden="true" />
          </a>
          <a className="contact-link" href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon" aria-hidden="true"><Github size={19} /></span>
            <span className="contact-link-copy">
              <small>Public projects</small>
              <strong>Gothwad Tech on GitHub</strong>
            </span>
            <ArrowUpRight className="contact-link-arrow" size={18} aria-hidden="true" />
          </a>
          <a className="contact-link" href={PROFILE.docsUrl} target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon contact-link-letter" aria-hidden="true">D</span>
            <span className="contact-link-copy">
              <small>Technical reference</small>
              <strong>Developer documentation</strong>
            </span>
            <ArrowUpRight className="contact-link-arrow" size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
