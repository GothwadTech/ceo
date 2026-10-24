import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <a className="footer-brand" href="#top">
          <img src="/assets/gothwad-tech-logo.svg" alt="" width="34" height="34" />
          <span>
            <strong>Yuvkesh Meena</strong>
            <small>Chief Executive Officer, Gothwad Tech</small>
          </span>
        </a>

        <p className="footer-note">A professional profile and selected record of Gothwad Tech’s work.</p>

        <div className="footer-links">
          <a href={PROFILE.companyUrl} target="_blank" rel="noopener noreferrer">
            Gothwad Tech <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={PROFILE.docsUrl} target="_blank" rel="noopener noreferrer">
            Documentation <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
